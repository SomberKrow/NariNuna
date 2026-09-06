import projectPages from "../src/data/projectPages.json";
import type { Plugin } from "vite";
import { environmentArtwork } from "../src/data/artwork";
import { heroSources } from "../src/data/artworkDelivery";

export const routeHeroArtwork: Record<string, string> = Object.fromEntries(
  projectPages.filter(({ hero }) => hero !== null).map(({ document, hero }) => {
    if (!hero || !(hero in environmentArtwork)) throw new Error(`Unknown hero for ${document}: ${hero}`);
    return [document, environmentArtwork[hero as keyof typeof environmentArtwork]];
  })
);

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
