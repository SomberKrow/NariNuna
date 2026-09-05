import { readFileSync } from "node:fs";
import { gzipSync } from "node:zlib";
import { resolve } from "node:path";

const manifest = JSON.parse(readFileSync("dist/.vite/manifest.json", "utf8"));
const assets = JSON.parse(readFileSync("src/data/responsive-artwork.json", "utf8"));
const limit = (name, bytes, maximum) => {
  if (bytes > maximum) throw new Error(`${name}: ${bytes} bytes exceeds ${maximum}`);
  console.log(`${name}: ${(bytes / 1000).toFixed(2)} KB / ${maximum / 1000} KB`);
};
function graph(key, found = new Set()) {
  if (found.has(key)) return found;
  if (!manifest[key]) throw new Error(`Missing build dependency ${key}`);
  found.add(key);
  for (const dependency of manifest[key].imports ?? []) graph(dependency, found);
  return found;
}
function graphBytes(keys, includeCss) {
  const files = new Set();
  for (const key of keys) {
    files.add(manifest[key].file);
    if (includeCss) for (const css of manifest[key].css ?? []) files.add(css);
  }
  return [...files].filter((file) => /\.(js|css)$/.test(file))
    .reduce((total, file) => total + gzipSync(readFileSync(resolve("dist", file))).length, 0);
}
// Resolve the emitted document script rather than assuming an HTML manifest key;
// Vite may collapse identical MPA entries into one shared chunk.
const homeHtml = readFileSync("dist/index.html", "utf8");
const scripts = [...homeHtml.matchAll(/<script\b[^>]*src="\/([^"]+\.js)"/g)].map((match) => match[1]);
const shared = new Set();
if (!scripts.length) throw new Error("Home document has no compiled scripts");
for (const file of scripts) {
  const key = Object.keys(manifest).find((key) => manifest[key].file === file);
  if (!key) throw new Error(`Home script missing from build manifest: ${file}`);
  graph(key, shared);
}
limit("Shared JS + CSS (gzip)", graphBytes(shared, true), 120_000);
for (const [key, entry] of Object.entries(manifest)) {
  if (!entry.isDynamicEntry || !key.endsWith("Page.vue")) continue;
  const route = [...graph(key)].filter((dependency) => !shared.has(dependency));
  limit(`${key} JS (gzip)`, graphBytes(route, false), 35_000);
}
for (const [source, asset] of Object.entries(assets)) {
  for (const candidate of asset.candidates) {
    const bytes = readFileSync(`dist${candidate.src}`).length;
    const maximum = source.endsWith("scenes/haven-sunset.webp") ? 160_000 : 150_000;
    if (bytes !== candidate.bytes || bytes > maximum) throw new Error(`Artwork budget mismatch: ${candidate.src}`);
  }
}
const heroDocuments = ["index.html", "meet-nari/index.html", "streams/index.html", "nail-studio/index.html", "haven/index.html", "resources/index.html", "work-with-nari/index.html", "stories/index.html", "support/index.html"];
for (const document of heroDocuments) {
  const html = readFileSync(`dist/${document}`, "utf8");
  const preloads = [...html.matchAll(/<link\b[^>]*rel="preload"[^>]*>/g)].map(([tag]) => tag);
  if (preloads.length !== 3) throw new Error(`${document} requires three mutually exclusive hero bands`);
  for (const tag of preloads) {
    for (const attribute of ['as="image"', 'imagesrcset=', 'media=', 'fetchpriority="high"']) {
      if (!tag.includes(attribute)) throw new Error(`${document} missing ${attribute}`);
    }
    for (const [, url] of tag.matchAll(/(\/media\/responsive\/[^\s",]+\.webp)/g)) readFileSync(`dist${url}`);
  }
}
console.log("Validated served artwork budgets and nine route-specific hero preloads.");
