// Use browser history to resolve the current MPA document; top-level links remain ordinary anchors.
import { createRouter, createWebHistory } from "vue-router";
import { routes } from "./routes";
import { scrollBehavior } from "./scrollBehavior";

export const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior
});
