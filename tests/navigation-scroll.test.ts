import { describe, expect, it } from "vitest";
import type { RouteLocationNormalized, RouteLocationNormalizedLoaded } from "vue-router";
import { scrollBehavior } from "@/router/scrollBehavior";

const route = (hash = "") => ({ hash }) as RouteLocationNormalized;
const loadedRoute = () => ({}) as RouteLocationNormalizedLoaded;

describe("document navigation scroll targets", () => {
  it("lands fragment links on their named section", () => {
    expect(scrollBehavior(route("#game-pile"), loadedRoute(), null)).toEqual({
      el: "#game-pile",
      behavior: "smooth"
    });
  });

  it("preserves browser history positions", () => {
    expect(scrollBehavior(route(), loadedRoute(), { left: 12, top: 640 })).toEqual({ left: 12, top: 640 });
  });

  it("starts ordinary document navigation at the top", () => {
    expect(scrollBehavior(route(), loadedRoute(), null)).toEqual({ top: 0 });
  });
});
