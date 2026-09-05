import type { Plugin } from "vite";
import { environmentArtwork } from "../src/data/artwork";
import { heroSources } from "../src/data/artworkDelivery";

export const routeHeroArtwork: Record<string, string> = {
  "index.html": environmentArtwork.homeSunset,
  "meet-nari/index.html": environmentArtwork.meetNari,
  "streams/index.html": environmentArtwork.streams,
  "nail-studio/index.html": environmentArtwork.nails,
  "haven/index.html": environmentArtwork.commonRoom,
  "resources/index.html": environmentArtwork.resources,
  "work-with-nari/index.html": environmentArtwork.work,
  "stories/index.html": environmentArtwork.stories,
  "support/index.html": environmentArtwork.commonRoom
};

export function heroPreloads(): Plugin {
  return {
    name: "nari-route-hero-preloads",
    transformIndexHtml: {
      order: "pre",
      handler(_html, context) {
        const document = context.path.replace(/^\//, "");
        const source = routeHeroArtwork[document];
        if (!source) return [];
        return heroSources(source).map(({ media, src, srcset }) => ({
          tag: "link",
          attrs: { rel: "preload", as: "image", type: "image/webp", href: src, imagesrcset: srcset, media, fetchpriority: "high" },
          injectTo: "head" as const
        }));
      }
    }
  };
}
