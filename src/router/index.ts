import { createRouter, createWebHistory, type RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw[] = [
  { path: "/", name: "home", component: () => import("@/pages/HomePage.vue") },
  { path: "/meet-nari/", name: "meet-nari", component: () => import("@/pages/MeetNariPage.vue") },
  { path: "/streams/", name: "streams", component: () => import("@/pages/StreamsPage.vue") },
  { path: "/nail-studio/", name: "nail-studio", component: () => import("@/pages/NailStudioPage.vue") },
  { path: "/haven/", name: "haven", component: () => import("@/pages/HavenPage.vue") },
  { path: "/resources/", name: "resources", component: () => import("@/pages/ResourcesPage.vue") },
  { path: "/work-with-nari/", name: "work-with-nari", component: () => import("@/pages/WorkWithNariPage.vue") },
  { path: "/support/", name: "support", component: () => import("@/pages/SupportPage.vue") },
  { path: "/stories/", name: "stories", component: () => import("@/pages/StoriesPage.vue") },
  {
    path: "/the-prinny-cult/",
    name: "prinny-cult",
    component: () => import("@/pages/PrinnyCultPage.vue"),
    meta: { secret: true }
  },
  { path: "/404.html", name: "not-found-document", component: () => import("@/pages/NotFoundPage.vue") },
  { path: "/:pathMatch(.*)*", name: "not-found", component: () => import("@/pages/NotFoundPage.vue") }
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior: () => ({ top: 0 })
});
