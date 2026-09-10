import { createSSRApp, h } from "vue";
import { renderToString } from "vue/server-renderer";
import { describe, expect, it } from "vitest";
import WorkPage from "@/pages/WorkWithNariPage.vue";
import StreamsPage from "@/pages/StreamsPage.vue";
import ResourcesPage from "@/pages/ResourcesPage.vue";
import SupportPage from "@/pages/SupportPage.vue";

// Protect visitor journeys in rendered output, rather than historical CSS spellings.
describe("room reading order", () => {
  it("puts collaboration fit and the brief before the social directory", async () => {
    const html = await renderToString(createSSRApp({ render: () => h(WorkPage) }));
    expect(html.indexOf("Creator collaborations")).toBeLessThan(html.indexOf("Tell her what you have in mind."));
    expect(html.indexOf("Tell her what you have in mind.")).toBeLessThan(html.indexOf('id="nari-links"'));
    expect(html).toContain("A dedicated business inbox hasn&#39;t been published yet.");
    expect(html).not.toMatch(/<form|mailto:/);
  });

  it("leads with real clips after the stream opening", async () => {
    const html = await renderToString(createSSRApp({ render: () => h(StreamsPage) }));
    expect(html.indexOf("The Kim Possible moment")).toBeLessThan(html.indexOf("Want the whole evening?"));
    expect(html.match(/https:\/\/www.youtube.com\/shorts\//g)).toHaveLength(3);
    expect(html).not.toMatch(/<iframe|<video|autoplay|No pretend live schedule/);
  });

  it("omits client samples while retaining the honest curating state", async () => {
    const html = await renderToString(createSSRApp({ render: () => h(ResourcesPage) }));
    expect(html).not.toMatch(/Client preview|Demonstration only:|Demo entry|Practice-station reset/);
    expect(html).toContain("Nari is choosing her first recommendations");
    expect(html).toContain("A recommendation should earn its place.");
  });

  it("puts free support before the wishlist and preserves the boundary", async () => {
    const html = await renderToString(createSSRApp({ render: () => h(SupportPage) }));
    expect(html.indexOf("Just be here")).toBeLessThan(html.indexOf("There&#39;s a wishlist, too."));
    expect(html).toContain("Financial support never buys access");
    expect(html).not.toMatch(/<form|<iframe/);
  });
});
