import { createHash } from "node:crypto";
import { readFileSync } from "node:fs";
import { describe, expect, it } from "vitest";
import manifest from "@/data/responsive-artwork.json";
import { artworkCandidates, artworkSrc, artworkSrcset, heroSources } from "@/data/artworkDelivery";
import { communityGhostieArtwork, detailArtwork, environmentArtwork, storybookPostcards } from "@/data/artwork";
import { routeHeroArtwork } from "../scripts/hero-preloads";

const hash = (bytes: Buffer) => createHash("sha256").update(bytes).digest("hex");

describe("responsive artwork delivery", () => {
  it("preserves source identity, alpha, dimensions and content-addressed byte budgets", () => {
    for (const [source, asset] of Object.entries(manifest)) {
      expect(hash(readFileSync(`public${source}`))).toBe(asset.sourceSha256);
      let lastWidth = 0;
      for (const candidate of asset.candidates) {
        const bytes = readFileSync(`public${candidate.src}`);
        expect(bytes.length).toBe(candidate.bytes);
        expect(bytes.length).toBeLessThanOrEqual(150_000);
        expect(hash(bytes)).toBe(candidate.sha256);
        expect(candidate.src).toContain(`.${candidate.sha256.slice(0, 16)}.webp`);
        expect(candidate.width).toBeGreaterThan(lastWidth);
        expect(candidate.width).toBeLessThanOrEqual(asset.width);
        expect(candidate.height).toBe(Math.round(asset.height * candidate.width / asset.width));
        expect(bytes.toString("ascii", 8, 12)).toBe("WEBP");
        expect(bytes.includes(Buffer.from("EXIF"))).toBe(false);
        expect(bytes.includes(Buffer.from("XMP "))).toBe(false);
        if (asset.alpha) {
          expect(bytes.toString("ascii", 12, 16)).toBe("VP8X");
          expect(bytes[20] & 0b00010000).toBeTruthy();
          expect(bytes.readUIntLE(24, 3) + 1).toBe(candidate.width);
          expect(bytes.readUIntLE(27, 3) + 1).toBe(candidate.height);
        }
        lastWidth = candidate.width;
      }
    }
  });

  it("provides small header images, capped candidates, and no original fallback", () => {
    expect(artworkSrc(communityGhostieArtwork.wave, 48)).toContain("-64.");
    expect(artworkSrc(communityGhostieArtwork.wave, 96)).toContain("-128.");
    expect(artworkSrc(environmentArtwork.homeSunset, 4000)).toContain("-1672.");
    expect(artworkSrcset(storybookPostcards.streams)).toContain("128w");
    expect(() => artworkCandidates("/missing.webp")).toThrow("Missing responsive artwork");
  });

  it("keeps the entire Home local image composition below 250 KB even at largest selected sizes", () => {
    const maximum = (source: string, maxWidth = Infinity) => Math.max(...artworkCandidates(source).filter((candidate) => candidate.width <= maxWidth).map((candidate) => candidate.bytes));
    const total = maximum(environmentArtwork.homeSunset) + maximum(communityGhostieArtwork.wave, 256)
      + maximum(detailArtwork.lavender)
      + [storybookPostcards.streams, storybookPostcards.nails, storybookPostcards.haven].reduce((bytes, source) => bytes + maximum(source, 256), 0);
    expect(total).toBeLessThanOrEqual(250_000);
    const home = readFileSync("src/pages/HomePage.vue", "utf8");
    expect(home).toContain("artworkSrcset(room.image, 256)");
  });

  it("gives all nine ordinary documents matching CSS/picture/preload candidates", () => {
    expect(Object.keys(routeHeroArtwork)).toHaveLength(9);
    expect(routeHeroArtwork["404.html"]).toBeUndefined();
    expect(routeHeroArtwork["the-prinny-cult/index.html"]).toBeUndefined();
    for (const source of Object.values(routeHeroArtwork)) {
      const sources = heroSources(source);
      expect(sources).toHaveLength(3);
      for (const band of sources) {
        for (const entry of band.srcset.split(", ")) {
          const [url, density] = entry.split(" ");
          expect(band.background).toContain(`url("${url}") ${density}`);
          expect(artworkCandidates(source).some((candidate) => candidate.src === url)).toBe(true);
        }
      }
    }
  });
});
