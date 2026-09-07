import { createSSRApp, h } from "vue";
import { renderToString } from "vue/server-renderer";
import { describe, expect, it } from "vitest";
import MeetPage from "@/pages/MeetNariPage.vue";
import StreamsPage from "@/pages/StreamsPage.vue";
import NailsPage from "@/pages/NailStudioPage.vue";
import ResourcesPage from "@/pages/ResourcesPage.vue";
import WorkPage from "@/pages/WorkWithNariPage.vue";
import StoriesPage from "@/pages/StoriesPage.vue";
import SupportPage from "@/pages/SupportPage.vue";

// Layout freedom must preserve semantic headings, sized art, and usable destinations.
describe("interior page semantics", () => {
  it.each([
    ["Meet Nari", MeetPage], ["Streams", StreamsPage], ["Nails", NailsPage],
    ["Resources", ResourcesPage], ["Work", WorkPage], ["Stories", StoriesPage], ["Support", SupportPage]
  ] as const)("keeps %s readable and navigable without decoration", async (_name, page) => {
    const html = await renderToString(createSSRApp({ render: () => h(page) }));
    expect(html.match(/<h1\b/g)).toHaveLength(1);
    expect(html).not.toMatch(/<h[123][^>]*>\s*<\/h[123]>/);
    for (const image of html.match(/<img\b[^>]*>/g) ?? []) {
      expect(image).toMatch(/\balt(?:=|\s|>)/);
      expect(image).toMatch(/\bwidth="\d+"/);
      expect(image).toMatch(/\bheight="\d+"/);
    }
    for (const link of html.match(/<a\b[^>]*target="_blank"[^>]*>/g) ?? []) {
      expect(link).toMatch(/rel="[^"]*noopener[^"]*"/);
      expect(link).toMatch(/rel="[^"]*noreferrer[^"]*"/);
    }
    for (const anchor of html.matchAll(/href="#([^"]+)"/g)) {
      expect(html).toContain(`id="${anchor[1]}"`);
    }
  });
});
