import { existsSync, readFileSync } from "node:fs";
import { resolve } from "node:path";
import { describe, expect, it } from "vitest";
import { environmentArtwork, ghostieArtwork, nariArtwork, officialEmotes, storybookPostcards } from "@/data/artwork";
import { prinnyRosterCapacity, suppliedPrinnyArtwork } from "@/data/prinnyCult";

function publicAssetExists(assetPath: string): boolean {
  return existsSync(resolve(process.cwd(), "public", assetPath.replace(/^\//, "")));
}

describe("approved-source artwork contracts", () => {
  it("preserves both owner-authorized storybook Nari and her untouched supplied identity", () => {
    expect(publicAssetExists(nariArtwork.fullbody)).toBe(true);
    expect(publicAssetExists(nariArtwork.portrait)).toBe(true);
    expect(publicAssetExists(nariArtwork.avatar)).toBe(true);
    expect(publicAssetExists(nariArtwork.suppliedModel)).toBe(true);
    expect(publicAssetExists(nariArtwork.suppliedPortrait)).toBe(true);
    expect(publicAssetExists(nariArtwork.cozy)).toBe(true);
    expect(nariArtwork.fullbody).toContain("/media/storybook/characters/");
    expect(nariArtwork.suppliedModel).toContain("/media/nari/");
    expect(Object.values(officialEmotes).every(publicAssetExists)).toBe(true);
  });

  it("gives every shared Ghostie and room illustration a real asset", () => {
    expect(Object.values(ghostieArtwork).every(publicAssetExists)).toBe(true);
    expect(Object.values(environmentArtwork).every(publicAssetExists)).toBe(true);
    expect(Object.values(storybookPostcards).every(publicAssetExists)).toBe(true);
  });

  it("retains all 27 supplied Prinny designs without fabricating roster lore", () => {
    expect(suppliedPrinnyArtwork).toHaveLength(prinnyRosterCapacity);
    expect(new Set(suppliedPrinnyArtwork.map(({ assetId }) => assetId)).size).toBe(prinnyRosterCapacity);
    expect(suppliedPrinnyArtwork.every(({ src }) => publicAssetExists(src))).toBe(true);
  });

  it("keeps the three physical Haven atmospheres connected to real room artwork", () => {
    const worldStyles = readFileSync(resolve(process.cwd(), "src/styles/_world.scss"), "utf8");
    expect(worldStyles).toContain(environmentArtwork.homeSunset);
    expect(worldStyles).toContain(environmentArtwork.homeNight);
    expect(worldStyles).toContain(environmentArtwork.homeDaylight);
  });

  it("keeps secret Prinny artwork out of indexing and ordinary primary navigation", () => {
    const secretDocument = readFileSync(resolve(process.cwd(), "the-prinny-cult/index.html"), "utf8");
    const primaryNavigation = readFileSync(resolve(process.cwd(), "src/data/navigation.ts"), "utf8");
    expect(secretDocument).toContain('content="noindex, nofollow"');
    expect(primaryNavigation).not.toContain("/the-prinny-cult/");
  });
});
