// Inspect every real HTML entry and registry to prevent metadata drift and accidental SPA collapse; serving is checked separately.
import { existsSync, readFileSync } from "node:fs";
import { relative, resolve } from "node:path";
import { describe, expect, it } from "vitest";
import { pageEntries } from "../vite.config";
import projectPages from "@/data/projectPages.json";
import { routes } from "@/router/routes";
import { primaryNavigation, footerNavigation } from "@/data/navigation";

describe("multi-page document contracts", () => {
  it("keeps explicit lazy routes and visible navigation synchronized with document ownership", () => {
    const paths = projectPages.map(({ path }) => path);
    expect(new Set(paths).size).toBe(paths.length);
    expect(new Set(projectPages.map(({ id }) => id)).size).toBe(paths.length);
    expect(routes.filter(({ path }) => !path.includes(":")).map(({ path }) => path).sort()).toEqual([...paths].sort());
    expect(routes.every((route) => typeof route.component === "function")).toBe(true);
    for (const { href } of [...primaryNavigation, ...footerNavigation]) expect(paths).toContain(href);
    for (const page of projectPages) {
      expect(page.document).toBe(page.path === "/" ? "index.html" : page.path.endsWith("/") ? `${page.path.slice(1)}index.html` : page.path.slice(1));
      const html = readFileSync(resolve("pages", page.document), "utf8");
      expect(html).toContain(`<title>${page.title}`);
      if (page.socialImage) expect(html).toContain(`property="og:image" content="${page.socialImage}"`);
      else expect(html).toContain('content="noindex');
    }
  });
  it("keeps every real HTML entry inside the dedicated document root", () => {
    const projectRoot = process.cwd();
    const documentRoot = resolve(projectRoot, "pages");
    const documents = Object.values(pageEntries);

    expect(documents).toHaveLength(12);
    expect(new Set(documents).size).toBe(documents.length);

    for (const document of documents) {
      const documentPath = relative(documentRoot, document);

      expect(documentPath.startsWith("..")).toBe(false);
      expect(existsSync(document)).toBe(true);
      expect(existsSync(resolve(projectRoot, documentPath))).toBe(false);
      expect(readFileSync(document, "utf8")).toContain('src="/src/main.ts"');
    }
  });
});
