import { existsSync, readFileSync } from "node:fs";
import { relative, resolve } from "node:path";
import { describe, expect, it } from "vitest";
import { pageEntries } from "../vite.config";

describe("multi-page document contracts", () => {
  it("keeps every real HTML entry inside the dedicated document root", () => {
    const projectRoot = process.cwd();
    const documentRoot = resolve(projectRoot, "pages");
    const documents = Object.values(pageEntries);

    expect(documents).toHaveLength(11);
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
