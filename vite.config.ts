import { resolve } from "node:path";
import { heroPreloads } from "./scripts/hero-preloads";
import vue from "@vitejs/plugin-vue";
import { defineConfig } from "vitest/config";

const projectRoot = import.meta.dirname;
const documentRoot = resolve(projectRoot, "pages");
const sourceRoot = resolve(projectRoot, "src");

export const pageEntries = {
  home: resolve(documentRoot, "index.html"),
  meetNari: resolve(documentRoot, "meet-nari/index.html"),
  streams: resolve(documentRoot, "streams/index.html"),
  nailStudio: resolve(documentRoot, "nail-studio/index.html"),
  haven: resolve(documentRoot, "haven/index.html"),
  resources: resolve(documentRoot, "resources/index.html"),
  workWithNari: resolve(documentRoot, "work-with-nari/index.html"),
  support: resolve(documentRoot, "support/index.html"),
  stories: resolve(documentRoot, "stories/index.html"),
  prinnyCult: resolve(documentRoot, "the-prinny-cult/index.html"),
  notFound: resolve(documentRoot, "404.html")
};

export default defineConfig({
  root: documentRoot,
  publicDir: resolve(projectRoot, "public"),
  appType: "mpa",
  plugins: [vue(), heroPreloads()],
  resolve: {
    alias: {
      "@": sourceRoot,
      "/src": sourceRoot
    }
  },
  server: {
    host: "0.0.0.0",
    allowedHosts: ["terminal.local"]
  },
  build: {
    outDir: resolve(projectRoot, "dist"),
    emptyOutDir: true,
    manifest: true,
    target: "baseline-widely-available",
    rolldownOptions: {
      input: pageEntries
    }
  },
  test: {
    root: projectRoot,
    environment: "node",
    include: ["tests/**/*.test.ts"]
  }
});
