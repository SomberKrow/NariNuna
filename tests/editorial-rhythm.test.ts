import { readFileSync } from "node:fs";
import { describe, expect, it } from "vitest";

const feedbackStyles = readFileSync("src/styles/_feedback.scss", "utf8");

describe("de-cardification and route rhythm", () => {
  it("opens noninteractive chapter content while retaining interactive selectors", () => {
    expect(feedbackStyles).toMatch(/\.identity-rooms__fragment,[\s\S]*\.support-kindness__chapter[\s\S]*background: transparent;/);
    expect(feedbackStyles).toContain('body[data-route="work-with-nari"] .nari-links__directory > a:hover');
    expect(feedbackStyles).toContain('body[data-route="work-with-nari"] .nari-links__directory > a:focus-visible');
  });

  it.each([
    ["meet-nari", "identity-rooms"],
    ["streams", "stream-hub"],
    ["nail-studio", "studio-notes"],
    ["haven", "haven-values"],
    ["resources", "resource-shelves"],
    ["work-with-nari", "work-fit"],
    ["stories", "moment-shelf--stories"],
    ["support", "support-kindness"]
  ])("defines intentional pacing for %s", (route, section) => {
    expect(feedbackStyles).toMatch(new RegExp(`body\\[data-route="${route}"\\][\\s\\S]{0,180}\\.${section}`));
  });
});
