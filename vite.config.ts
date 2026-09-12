// Build twelve registry-owned HTML entries from pages into dist. Keep aliases, preload plugin and manifest output aligned with validators.
import projectPages from "./src/data/projectPages.json" with { type: "json" };
import { resolve } from "node:path";
import { heroPreloads } from "./scripts/hero-preloads.ts";
import vue from "@vitejs/plugin-vue";
import { defineConfig } from "vitest/config";

const projectRoot = import.meta.dirname;
const documentRoot = resolve(projectRoot, "pages");
const sourceRoot = resolve(projectRoot, "src");

export const pageEntries = Object.fromEntries(
  projectPages.map(({ id, document }) => [id, resolve(documentRoot, document)])
);

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
