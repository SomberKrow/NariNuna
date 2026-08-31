import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { describe, expect, it } from "vitest";

function sourceAt(path: string): string {
  return readFileSync(resolve(process.cwd(), path), "utf8");
}

describe("client-feedback interaction contracts", () => {
  it("keeps the Discord invitation behind exactly three accessible Haven knocks", () => {
    const doorway = sourceAt("src/components/haven/HavenDoor.vue");

    expect(doorway).toContain("const knocksRequired = 3");
    expect(doorway).toContain("Math.min(step.value + 1, knocksRequired)");
    expect(doorway).toContain('name: "First knock"');
    expect(doorway).toContain('name: "Second knock"');
    expect(doorway).toContain('name: "Third knock"');
    expect(doorway).toContain('aria-label="Your three knocks at the Haven door"');
    expect(doorway).toContain("environmentArtwork.havenDoorInterior");
    expect(doorway).toContain('v-if="isOpen" class="haven-threshold__gathering"');
    expect(doorway).toContain("object-fit: cover");
    expect(doorway).not.toContain("backdrop-filter: blur");

    const lockedState = doorway.slice(doorway.indexOf('<template v-if="!isOpen">'), doorway.indexOf("<template v-else>"));
    const openState = doorway.slice(doorway.indexOf("<template v-else>"));

    expect(lockedState).not.toContain(':href="discordUrl"');
    expect(openState).toContain(':href="discordUrl"');
    expect(openState).toContain('@click="closeDoor"');
  });

  it("routes Come sit with us directly into the Haven doorway", () => {
    const home = sourceAt("src/pages/HomePage.vue");
    const haven = sourceAt("src/pages/HavenPage.vue");

    expect(home).toContain('class="button button--ember haven-landing__haven-cta" href="/haven/#haven-door"');
    expect(home).not.toContain('import { twitchUrl } from "@/data/socials"');
    expect(haven).toContain('id="haven-door" class="haven-entry page-width section-pad"');
  });

  it("reduces the loose floorboard to one optional Easter-egg reveal", () => {
    const floorboard = sourceAt("src/components/haven/LooseFloorboard.vue");

    expect(floorboard).toContain("const isOpen = ref(false)");
    expect(floorboard).toContain(':aria-expanded="isOpen"');
    expect(floorboard).toContain('href="/the-prinny-cult/"');
    expect(floorboard).toContain("prinnyEasterEggArtwork");
    expect(floorboard).not.toContain("knocksRequired");
    expect(floorboard).not.toContain("answerPassword");
    expect(floorboard).not.toContain("DOOD");
    expect(floorboard).not.toContain("suppliedPrinnyArtwork");
  });

  it("keeps the hidden Prinny route tiny instead of restoring a cult system", () => {
    const cult = sourceAt("src/pages/PrinnyCultPage.vue");

    expect(cult).toContain("prinnyEasterEggArtwork");
    expect(cult).toContain("A suspicious little dood.");
    expect(cult.match(/href="\/haven\/#haven-door"/g)).toHaveLength(2);
    expect(cult).not.toContain("suppliedPrinnyArtwork");
    expect(cult).not.toContain("prinnyCultAssets");
    expect(cult).not.toContain("ritualStage");
    expect(cult).not.toContain("offerings");
    expect(cult).not.toContain("v-for");
  });

  it("keeps Work With Nari's directory native and Linktree-free", () => {
    const work = sourceAt("src/pages/WorkWithNariPage.vue");
    const links = sourceAt("src/data/socials.ts");

    expect(work).toContain('id="nari-links"');
    expect(work).toContain('v-for="(link, index) in nariLinks"');
    expect(work).toContain('aria-label="Nari\'s public links"');
    expect(work).not.toContain("Linktree");
    expect(links).toContain("export const nariLinks");
    expect(links).not.toContain("linktr.ee");
  });

  it("uses the shared registry for recognizable, accessible homepage social icons", () => {
    const dock = sourceAt("src/components/ui/SocialDock.vue");
    const links = sourceAt("src/data/socials.ts");

    expect(dock).toContain('v-for="link in nariLinks"');
    expect(dock).toContain('viewBox="0 0 24 24"');
    expect(dock).toContain(':aria-label="`${link.label} (opens in a new tab)`"');
    expect(dock).toContain(':title="link.label"');
    expect(dock).toContain('fill="currentColor"');
    expect(dock).not.toContain("social-dock__label");

    for (const platform of ["twitch", "youtube", "tiktok", "instagram", "x", "throne"]) {
      expect(links).toContain(`platform: "${platform}"`);
    }
  });

  it("renders clearly labelled Resources demonstration density from data", () => {
    const page = sourceAt("src/pages/ResourcesPage.vue");
    const data = sourceAt("src/data/resources.ts");

    expect(page).toContain("resourceDemoEntries");
    expect(page).toContain("Demo entry");
    expect(page).toContain("Demonstration only:");
    expect(data).toContain('layout: "compact"');
    expect(data).toContain('layout: "standard"');
    expect(data).toContain('layout: "wide"');
    expect(data).not.toContain("http://");
    expect(data).not.toContain("https://");
  });

  it("keeps icon buttons uniform and disables new motion when reduced motion is requested", () => {
    const polish = sourceAt("src/styles/_polish.scss");
    const feedback = sourceAt("src/styles/_feedback.scss");
    const socials = polish.slice(polish.indexOf("/* Recognizable, icon-only socials"), polish.indexOf("/* Home starts"));

    expect(socials).toContain("grid-template-columns: repeat(6, minmax(0, 1fr))");
    expect(socials).toContain("color: var(--story-copy)");
    expect(socials).toContain("border-radius: 50%");
    expect(socials).toContain("color: inherit");
    expect(feedback).toContain("@media (prefers-reduced-motion: reduce)");
    expect(feedback).toContain("transform: none");
  });
});
