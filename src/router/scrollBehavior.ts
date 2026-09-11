// Restore history before handling fragments; named shelves and the Haven door must remain valid direct-entry destinations.
import type { RouterScrollBehavior } from "vue-router";

export const scrollBehavior: RouterScrollBehavior = (to, _from, savedPosition) => {
  if (savedPosition) return savedPosition;
  // Read the current preference at navigation time, including changes since mount.
  if (to.hash) {
    const reduceMotion = typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    return { el: to.hash, behavior: reduceMotion ? "instant" : "smooth" };
  }
  return { top: 0 };
};
