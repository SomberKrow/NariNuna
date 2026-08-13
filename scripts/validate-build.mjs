import { access, readFile } from "node:fs/promises";
import { resolve } from "node:path";

const pages = [
  "index.html",
  "meet-nari/index.html",
  "streams/index.html",
  "nail-studio/index.html",
  "haven/index.html",
  "resources/index.html",
  "work-with-nari/index.html",
  "support/index.html",
  "stories/index.html",
  "the-prinny-cult/index.html",
  "404.html"
];

for (const page of pages) {
  const output = resolve("dist", page);
  await access(output);
  const html = await readFile(output, "utf8");
  if (!html.includes('name="viewport"')) {
    throw new Error(`${page} is missing viewport metadata`);
  }
  if (!html.includes('name="theme-color"')) {
    throw new Error(`${page} is missing theme-color metadata`);
  }
  if (!html.includes("/assets/")) {
    throw new Error(`${page} is missing its compiled asset references`);
  }
}

console.log(`Validated ${pages.length} built HTML documents.`);
