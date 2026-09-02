import { readFileSync } from "node:fs";
import { describe, expect, it } from "vitest";

const feedbackStyles = readFileSync("src/styles/_feedback.scss", "utf8");

describe("page signature devices", () => {
  it.each([
    ["meet-nari", "identity-rooms__fragment"],
    ["streams", "stream-platform-grid"],
    ["nail-studio", "studio-notes__grid--painted"],
    ["haven", "haven-values__grid--storybook"],
    ["resources", "resource-shelves__grid--painted"],
    ["work-with-nari", "nari-links__directory"],
    ["stories", "moment-shelf--stories"],
    ["support", "support-kindness"]
  ])("gives %s one route-owned visual device", (route, signature) => {
    expect(feedbackStyles).toContain(`body[data-route="${route}"] .${signature}`);
  });

  it("keeps signature devices decorative and motion-independent", () => {
    expect(feedbackStyles).toMatch(/none of\s+\* them carries meaning/);
    expect(feedbackStyles).not.toMatch(/animation(?:-name)?:/);
  });
});
