import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { describe, expect, it } from "vitest";

function sourceAt(path: string): string {
  return readFileSync(resolve(process.cwd(), path), "utf8");
}

describe("Haven doorway and social interaction contracts", () => {
  it("keeps the Discord invitation behind exactly three accessible roleplay knocks", () => {
    const doorway = sourceAt("src/components/haven/HavenDoor.vue");

    expect(doorway).toContain("const knocksRequired = 3");
    expect(doorway).toContain("Math.min(step.value + 1, knocksRequired)");
    expect(doorway).toContain('name: "First knock"');
    expect(doorway).toContain('name: "Second knock"');
    expect(doorway).toContain('name: "Third knock"');
    expect(doorway).toContain('aria-label="Your three knocks at the Haven door"');
    expect(doorway).toContain("environmentArtwork.havenDoorInterior");
    expect(doorway).toContain('v-if="isOpen" class="haven-threshold__gathering"');
    expect(doorway).toContain('width="1024"');
    expect(doorway).toContain('height="1536"');
    expect(doorway).toContain("object-fit: cover");
    expect(doorway).not.toContain("backdrop-filter: blur");
    expect(doorway).not.toContain(".haven-threshold__gathering::before");
    expect(doorway).not.toContain("GhostieArt");

    const archOpening = doorway.indexOf('<div class="haven-threshold__arch">');
    const gathering = doorway.indexOf('v-if="isOpen" class="haven-threshold__gathering"');
    const physicalDoor = doorway.indexOf('class="haven-threshold__door"');

    expect(gathering).toBeGreaterThan(archOpening);
    expect(gathering).toBeLessThan(physicalDoor);
    expect(doorway).not.toContain(".haven-threshold--open {\n    grid-template-columns: 1fr");
    expect(doorway).toContain("haven-threshold__ivy");
    expect(doorway).toContain("haven-threshold__keystone");
    expect(doorway).toContain("haven-threshold__door-inlay");

    const lockedState = doorway.slice(doorway.indexOf('<template v-if="!isOpen">'), doorway.indexOf("<template v-else>"));
    const openState = doorway.slice(doorway.indexOf("<template v-else>"));

    expect(lockedState).not.toContain(':href="discordUrl"');
    expect(openState).toContain(':href="discordUrl"');
    expect(openState).toContain('@click="closeDoor"');
  });

  it("hides the Prinny chamber behind three floorboard knocks and the visible dood password", () => {
    const floorboard = sourceAt("src/components/haven/LooseFloorboard.vue");

    expect(floorboard).toContain("const knocksRequired = 3");
    expect(floorboard).toContain("Math.min(knocks.value + 1, knocksRequired)");
    expect(floorboard).toContain('assetId === "original"');
    expect(floorboard).toContain('aria-label="Choose the sacred password"');
    expect(floorboard).toContain("@click=\"answerPassword('DOOD')\"");
    expect(floorboard).toContain('aria-live="polite"');
    expect(floorboard).toContain("@media (prefers-reduced-motion: reduce)");

    const passwordChoice = floorboard.indexOf('<template v-else-if="!isOpen">');
    const unlockedState = floorboard.indexOf("<template v-else>", passwordChoice);

    expect(floorboard.slice(passwordChoice, unlockedState)).not.toContain('href="/the-prinny-cult/"');
    expect(floorboard.slice(unlockedState)).toContain('href="/the-prinny-cult/"');
  });

  it("makes the cult roleplay accessible without inventing identities for the 27 supplied Prinnies", () => {
    const cult = sourceAt("src/pages/PrinnyCultPage.vue");

    expect(cult).toContain("const maxOfferings = 11");
    expect(cult).toContain("Math.min(ritualStage.value + 1, rites.length)");
    expect(cult).toContain("Math.min(offerings.value + 1, maxOfferings)");
    expect(cult).toContain('title: "Wake the candle"');
    expect(cult).toContain('title: "Make the offering"');
    expect(cult).toContain('title: "Speak the sacred word"');
    expect(cult).toContain('aria-label="Three ceremonial initiation rites"');
    expect(cult).toContain('v-else-if="!oathAccepted"');
    expect(cult).toContain('v-for="(prinny, index) in suppliedPrinnyArtwork"');
    expect(cult).toContain(':alt="prinny.alt"');
    expect(cult).toContain("prinnyCultAssets.sanctumPainting");
    expect(cult).toContain("prinnyCultAssets.altarPainting");
    expect(cult).toContain('aria-label="Painted ceremonial altar with three interactive ritual objects"');
    expect(cult).toContain(':disabled="ritualStage !== index"');
    expect(cult).toContain('@click="touchAltar(index)"');
    expect(cult).toContain(':aria-pressed="selectedWitness === index"');
    expect(cult).toContain("prinnyRosterCapacity");
    expect(cult).toContain('aria-live="polite"');
    expect(cult).toContain("@media (prefers-reduced-motion: reduce)");
    expect(cult.match(/href="\/haven\/"/g)).toHaveLength(2);
    expect(cult).not.toContain("prinny.cultTitle");
    expect(cult).not.toContain("prinny.bio");
  });

  it("uses recognizable, accessible icon-only logos for every homepage social link", () => {
    const dock = sourceAt("src/components/ui/SocialDock.vue");

    for (const platform of ["twitch", "youtube", "tiktok", "instagram", "x", "throne"]) {
      expect(dock).toContain(`platform: "${platform}"`);
    }

    expect(dock).toContain('viewBox="0 0 24 24"');
    expect(dock).toContain(':aria-label="`${link.label} (opens in a new tab)`"');
    expect(dock).toContain(':title="link.label"');
    expect(dock).toContain('fill="currentColor"');
    expect(dock).not.toContain("social-dock__label");
    expect(dock).not.toContain("@lucide/vue");
  });

  it("keeps icon buttons uniform and visible in Nari, Dark, and Light themes", () => {
    const styles = sourceAt("src/styles/_polish.scss");
    const socials = styles.slice(styles.indexOf("/* Recognizable, icon-only socials"), styles.indexOf("/* Home starts"));

    expect(socials).toContain("grid-template-columns: repeat(6, minmax(0, 1fr))");
    expect(socials).toContain("color: var(--story-copy)");
    expect(socials).toContain("border-radius: 50%");
    expect(socials).toContain("color: inherit");
    expect(socials).toContain(':root[data-theme="light"] .social-dock__icon');
    expect(socials).not.toContain("social-dock__label");
  });
});
