import { fileURLToPath, URL } from "node:url";
import { resolve } from "node:path";
import vue from "@vitejs/plugin-vue";
import { defineConfig } from "vitest/config";

const root = import.meta.dirname;

export const pageEntries = {
  home: resolve(root, "index.html"),
  meetNari: resolve(root, "meet-nari/index.html"),
  streams: resolve(root, "streams/index.html"),
  nailStudio: resolve(root, "nail-studio/index.html"),
  haven: resolve(root, "haven/index.html"),
  resources: resolve(root, "resources/index.html"),
  workWithNari: resolve(root, "work-with-nari/index.html"),
  support: resolve(root, "support/index.html"),
  stories: resolve(root, "stories/index.html"),
  prinnyCult: resolve(root, "the-prinny-cult/index.html"),
  notFound: resolve(root, "404.html")
};

export default defineConfig({
  appType: "mpa",
  plugins: [vue()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url))
    }
  },
  server: {
    host: "0.0.0.0",
    allowedHosts: ["terminal.local"]
  },
  build: {
    target: "baseline-widely-available",
    rolldownOptions: {
      input: pageEntries
    }
  },
  test: {
    environment: "node",
    include: ["tests/**/*.test.ts"]
  }
});
