// SSR-rendered markup verifies single-image roots, attribute fallthrough and native picture ordering; network candidate choice requires a browser.
import { createSSRApp, h } from "vue";
import { renderToString } from "vue/server-renderer";
import { describe, expect, it } from "vitest";
import ResponsiveArtwork from "@/components/art/ResponsiveArtwork.vue";
import { communityGhostieArtwork, environmentArtwork, storybookPostcards } from "@/data/artwork";
import { artworkSrc, heroSources } from "@/data/artworkDelivery";

describe("responsive artwork component delivery", () => {
  it("renders one image with intrinsic dimensions, safe defaults and inherited attributes", async () => {
    const html = await renderToString(createSSRApp({ render: () => h(ResponsiveArtwork, {
      artwork: communityGhostieArtwork.heart, alt: "A welcoming Ghostie", sizes: "48px", class: "brand-art", "aria-hidden": "true"
    }) }));
    expect(html).toContain('class="brand-art"');
    expect(html).toContain('aria-hidden="true"');
    expect(html).toContain('width="1254" height="1254"');
    expect(html).toContain('loading="lazy" decoding="async" fetchpriority="auto"');
    expect(html).toContain('alt="A welcoming Ghostie"');
    expect(html).toContain('sizes="48px"');
    expect(html.match(/<img\b/g)).toHaveLength(1);
    expect(html).not.toContain('<div');
  });

  it("caps the Home rail src and srcset while retaining decorative semantics", async () => {
    const html = await renderToString(createSSRApp({ render: () => h(ResponsiveArtwork, {
      artwork: storybookPostcards.streams, alt: "", sizes: "88px", maxWidth: 256, fallbackWidth: 768
    }) }));
    expect(html).toContain(`src="${artworkSrc(storybookPostcards.streams, 256)}"`);
    expect(html).toContain('256w');
    expect(html).not.toContain('480w');
    expect(html).not.toContain('768w');
    expect(html).toMatch(/\salt(?:="")?\s/);
  });

  it("keeps native media-band sources before an eager high-priority hero image", async () => {
    const html = await renderToString(createSSRApp({ render: () => h("picture", [
      ...heroSources(environmentArtwork.streams).map(({ media, srcset }) => h("source", { media, srcset })),
      h(ResponsiveArtwork, { artwork: environmentArtwork.streams, alt: "Nari at her desk", sizes: "100vw", loading: "eager", fetchpriority: "high", fallbackWidth: 1280 })
    ]) }));
    expect(html.match(/<source\b/g)).toHaveLength(3);
    expect(html.indexOf('<img')).toBeGreaterThan(html.lastIndexOf('<source'));
    expect(html).toContain('loading="eager" decoding="async" fetchpriority="high"');
    expect(html).toContain(`src="${artworkSrc(environmentArtwork.streams, 1280)}"`);
  });
});
