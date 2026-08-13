import { describe, expect, it } from "vitest";
import { readFileSync } from "node:fs";
import { featuredMoments } from "@/data/media";
import { footerNavigation, primaryNavigation } from "@/data/navigation";
import { discordUrl, socialLinks, throneUrl, twitchUrl } from "@/data/socials";

describe("content contracts", () => {
  it("keeps every public route unique and document-shaped", () => {
    const paths = [...primaryNavigation, ...footerNavigation].map((item) => item.href);

    expect(new Set(paths).size).toBe(paths.length);
    expect(paths).toContain("/");
    expect(paths.filter((path) => path !== "/").every((path) => path.endsWith("/"))).toBe(true);
  });

  it("uses unique secure URLs for verified social links", () => {
    const urls = socialLinks.map((social) => social.url);

    expect(new Set(urls).size).toBe(urls.length);
    expect(urls.every((url) => new URL(url).protocol === "https:")).toBe(true);
    expect(socialLinks.every((social) => /^\d{4}-\d{2}-\d{2}$/.test(social.verifiedAt))).toBe(true);
  });

  it("keeps community entry and support links secure", () => {
    expect([discordUrl, throneUrl, twitchUrl].every((url) => new URL(url).protocol === "https:")).toBe(true);
  });

  it("ships only explicit, traceable featured media", () => {
    const ids = featuredMoments.map((moment) => moment.id);

    expect(featuredMoments).toHaveLength(3);
    expect(new Set(ids).size).toBe(ids.length);
    expect(featuredMoments.every((moment) => moment.url.includes("youtube.com/shorts/"))).toBe(true);
    expect(featuredMoments.every((moment) => moment.thumbnailUrl?.startsWith("https://i.ytimg.com/"))).toBe(true);
    expect(featuredMoments.every((moment) => moment.contentRating === "general")).toBe(true);
  });

  it("keeps outbound media cards readable when a remote thumbnail fails", () => {
    const mediaCardSource = readFileSync(
      new URL("../src/components/ui/MediaCard.vue", import.meta.url),
      "utf8"
    );

    expect(mediaCardSource).toContain('@error="thumbnailFailed = true"');
    expect(mediaCardSource).toContain('class="media-card__fallback"');
  });
});
