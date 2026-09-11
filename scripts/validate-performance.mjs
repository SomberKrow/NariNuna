// Run from repository root on dist. Count each emitted file once per transitive static-import graph using Node default gzip; lazy routes are measured separately.
import projectPages from "../src/data/projectPages.json" with { type: "json" };
import { readFileSync } from "node:fs";
import { gzipSync } from "node:zlib";
import { resolve } from "node:path";

const manifest = JSON.parse(readFileSync("dist/.vite/manifest.json", "utf8"));
const assets = JSON.parse(readFileSync("src/data/responsive-artwork.json", "utf8")).artworks;
const limits = {
  shared: 120_000,
  routeJs: 35_000,
  routeCss: 12_000
};
const limit = (name, bytes, maximum) => {
  if (bytes > maximum) throw new Error(`${name}: ${bytes} bytes exceeds ${maximum}`);
  console.log(`${name}: ${(bytes / 1000).toFixed(2)} KB / ${maximum / 1000} KB`);
};
// Follow static imports only: dynamic page modules are independent entry graphs, not shared payload.
function graph(key, found = new Set()) {
  if (found.has(key)) return found;
  if (!manifest[key]) throw new Error(`Missing build dependency ${key}`);
  found.add(key);
  for (const dependency of manifest[key].imports ?? []) graph(dependency, found);
  return found;
}
// Deduplicate filenames across chunks, including CSS emitted for more than one import owner.
function graphFiles(keys) {
  const files = new Set();
  for (const key of keys) {
    files.add(manifest[key].file);
    for (const css of manifest[key].css ?? []) files.add(css);
  }
  return files;
}
// This exact compression method is the before/after metric; do not mix it with Vite console estimates.
function gzipBytes(files, extensionPattern) {
  return [...files].filter((file) => extensionPattern.test(file))
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
const sharedFiles = graphFiles(shared);
// Catch accidental re-imports of provenance even when broad gzip budgets still pass.
for (const file of sharedFiles) {
  if (file.endsWith(".js") && /sourceFile|sourceSha256|GENERATED FILE/.test(readFileSync(resolve("dist", file), "utf8"))) {
    throw new Error(`Artwork provenance leaked into shared runtime: ${file}`);
  }
}
limit("Shared JS + CSS (gzip)", gzipBytes(sharedFiles, /\.(js|css)$/), limits.shared);
for (const [key, entry] of Object.entries(manifest)) {
  if (!entry.isDynamicEntry || !key.endsWith("Page.vue")) continue;
  const route = [...graph(key)].filter((dependency) => !shared.has(dependency));
  const routeFiles = graphFiles(route);
  const routeJs = gzipBytes(routeFiles, /\.js$/);
  const routeCss = gzipBytes(routeFiles, /\.css$/);
  const combinedFiles = new Set([...sharedFiles, ...routeFiles]);
  limit(`${key} JS (gzip)`, routeJs, limits.routeJs);
  limit(`${key} CSS (gzip)`, routeCss, limits.routeCss);
  console.log(`${key} combined JS + CSS graph (gzip): ${(gzipBytes(combinedFiles, /\.(js|css)$/) / 1000).toFixed(2)} KB`);
}
for (const [source, asset] of Object.entries(assets)) {
  for (const candidate of asset.candidates) {
    const bytes = readFileSync(`dist${candidate.src}`).length;
    const maximum = source.endsWith("scenes/haven-sunset.webp") ? 160_000 : 150_000;
    if (bytes !== candidate.bytes || bytes > maximum) throw new Error(`Artwork budget mismatch: ${candidate.src}`);
  }
}
const heroDocuments = projectPages.filter(({ hero }) => hero !== null).map(({ document }) => document);
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
