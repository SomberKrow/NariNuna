import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { describe, expect, it } from "vitest";

function sourceAt(path: string): string {
  return readFileSync(resolve(process.cwd(), path), "utf8");
}

describe("Nari face-safe composition contract", () => {
  it("loads the face-safe layer after every existing composition layer", () => {
    const main = sourceAt("src/styles/main.scss").trim();

    expect(main).toContain('@use "feedback";');
    expect(main.endsWith('@use "face-safe";')).toBe(true);
  });

  it("covers every page whose hero painting explicitly contains Nari", () => {
    const pages = {
      home: sourceAt("src/pages/HomePage.vue"),
      meet: sourceAt("src/pages/MeetNariPage.vue"),
      streams: sourceAt("src/pages/StreamsPage.vue"),
      nails: sourceAt("src/pages/NailStudioPage.vue"),
      haven: sourceAt("src/pages/HavenPage.vue"),
      support: sourceAt("src/pages/SupportPage.vue"),
      stories: sourceAt("src/pages/StoriesPage.vue"),
      work: sourceAt("src/pages/WorkWithNariPage.vue")
    };

    expect(pages.home).toContain("Nari, with emerald eyes");
    expect(pages.meet).toContain("environmentArtwork.meetNari");
    expect(pages.streams).toContain('class="room-opening room-opening--streams page-width"');
    expect(pages.streams).toContain("Nari laughs at her hand-painted autumn streaming desk");
    expect(pages.nails).toContain("environmentArtwork.nails");
    expect(pages.haven).toContain("environmentArtwork.commonRoom");
    expect(pages.support).toContain("environmentArtwork.commonRoom");
    expect(pages.stories).toContain("environmentArtwork.stories");
    expect(pages.work).toContain('class="room-opening room-opening--work page-width"');
    expect(pages.work).toContain("Nari sits at her beautifully illustrated autumn correspondence desk");
  });

  it("defines one shared focal system with page-specific mobile crops", () => {
    const styles = sourceAt("src/styles/_face-safe.scss");

    expect(styles).toContain("--hero-desktop-focus-x");
    expect(styles).toContain("--hero-mobile-focus-x");
    expect(styles).toContain("--hero-mobile-focus-y");
    expect(styles).toContain("--hero-mobile-art-height");
    expect(styles).toContain("--hero-mobile-copy-width");
    expect(styles).toContain(".room-opening--streams {");
    expect(styles).toContain(".room-opening--work {");
  });

  it("keeps desktop copy in a protected left lane and the painted focal point to the right", () => {
    const styles = sourceAt("src/styles/_face-safe.scss");

    expect(styles).toContain("@media (min-width: 64.01rem)");
    expect(styles).toContain(".haven-landing__welcome");
    expect(styles).toContain("background-position: var(--hero-desktop-focus-x) center");
    expect(styles).toContain(".character-intro--integrated .character-intro__copy");
    expect(styles).toContain(".studio-opening__inner > div");
    expect(styles).toContain(".haven-heart__inner > div");
    expect(styles).toContain(".story-opening--painted > div:first-child");
    expect(styles).toContain(".support-welcome--painted > div");
    expect(styles).toContain("width: min(38vw, 30rem)");
  });

  it("physically separates Streams and Work copy from Nari's image", () => {
    const styles = sourceAt("src/styles/_face-safe.scss");

    expect(styles).toContain(".room-opening--streams,");
    expect(styles).toContain(".room-opening--work {");
    expect(styles).toContain("grid-template-columns: minmax(18rem, 0.72fr) minmax(0, 1.28fr)");
    expect(styles).toContain(".room-opening--streams .room-opening__art,");
    expect(styles).toContain("position: relative");
    expect(styles).toContain("inset: auto");
  });

  it("moves Nari paintings into compact framed plates on tablet and mobile", () => {
    const styles = sourceAt("src/styles/_face-safe.scss");

    expect(styles).toContain("@media (max-width: 64rem)");
    expect(styles).toContain("height: var(--hero-mobile-art-height)");
    expect(styles).toContain("background-position: var(--hero-mobile-focus-x) var(--hero-mobile-focus-y)");
    expect(styles).toContain("background-size: cover");
    expect(styles).toContain("calc(var(--hero-mobile-art-height) + 2.5rem)");
    expect(styles).toContain("grid-template-columns: 1fr");
    expect(styles).toContain("object-position: var(--hero-mobile-focus-x) var(--hero-mobile-focus-y)");
  });

  it("does not force Nari-specific face rules onto non-Nari hero pages", () => {
    const styles = sourceAt("src/styles/_face-safe.scss");

    expect(styles).not.toContain("room-opening--resources");
    expect(styles).not.toContain("not-found");
    expect(styles).not.toContain("prinny-cult");
  });
});
