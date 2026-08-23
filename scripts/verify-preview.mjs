import assert from "node:assert/strict";
import { spawn } from "node:child_process";
import { readdir } from "node:fs/promises";
import { setTimeout as delay } from "node:timers/promises";

const origin = process.env.NARI_PREVIEW_URL ?? "http://127.0.0.1:4173";
const managesPreview = !process.env.NARI_PREVIEW_URL;
let preview;

if (managesPreview) {
  preview = spawn(process.execPath, ["node_modules/vite/bin/vite.js", "preview", "--host", "127.0.0.1", "--port", "4173", "--strictPort"], {
    stdio: ["ignore", "ignore", "pipe"]
  });

  let startupError = "";
  preview.stderr.setEncoding("utf8");
  preview.stderr.on("data", (chunk) => {
    startupError += chunk;
  });

  let ready = false;
  for (let attempt = 0; attempt < 100; attempt += 1) {
    if (preview.exitCode !== null) break;
    try {
      const response = await fetch(origin);
      if (response.ok) {
        ready = true;
        break;
      }
    } catch {
      await delay(50);
    }
  }

  if (!ready) {
    preview.kill("SIGTERM");
    throw new Error(`The production preview could not start at ${origin}: ${startupError.trim()}`);
  }
}

try {
const routes = [
  ["/", "Nari Nuna's Haven", "/media/share/meta-og-home.png"],
  ["/meet-nari/", "Meet Nari", "/media/share/meta-og-default.png"],
  ["/streams/", "Streams", "/media/share/meta-og-streams.png"],
  ["/nail-studio/", "Nail Studio", "/media/share/meta-og-nails.png"],
  ["/haven/", "The Haven", "/media/share/meta-og-haven.png"],
  ["/resources/", "Resources", "/media/share/meta-og-default.png"],
  ["/work-with-nari/", "Work With Nari", "/media/share/meta-og-default.png"],
  ["/support/", "Support", "/media/share/meta-og-haven.png"],
  ["/stories/", "Story Time", "/media/share/meta-og-haven.png"],
  ["/the-prinny-cult/", "???", null],
  ["/404.html", "Room Not Found", null]
];

const requiredAssets = [
  "/media/nari/nari-model-fullbody.webp",
  "/media/nari/nari-model-portrait.webp",
  "/media/nari/nari-comfy-original.webp",
  "/media/emotes/nari-comfy.webp",
  "/media/emotes/nari-panic.webp",
  "/media/ghosties/ghostie-shy.webp",
  "/media/environments/haven-room-sunset.svg",
  "/media/environments/haven-room-night.svg",
  "/media/environments/haven-room-daylight.svg",
  "/media/environments/streams-room.svg",
  "/media/environments/haven-common-room.svg",
  "/media/share/meta-og-home.png",
  "/favicon.png"
];

for (const [route, expectedTitle, expectedPreview] of routes) {
  const response = await fetch(new URL(route, origin));
  assert.equal(response.status, 200, `${route} should direct-load successfully`);
  assert.match(response.headers.get("content-type") ?? "", /text\/html/, `${route} should be HTML`);

  const html = await response.text();
  assert.match(html, new RegExp(`<title>[^<]*${expectedTitle.replaceAll("?", "\\?")}`), `${route} needs its own title`);

  if (expectedPreview) {
    assert.match(html, new RegExp(`property="og:image" content="${expectedPreview}"`), `${route} needs the correct social preview`);
    assert.match(html, /name="twitter:card" content="summary_large_image"/, `${route} needs a Twitter card`);
  } else {
    assert.match(html, /name="robots" content="noindex/, `${route} must remain non-indexable`);
  }
}

for (const asset of requiredAssets) {
  const response = await fetch(new URL(asset, origin));
  assert.equal(response.status, 200, `Required real character or room asset is unavailable: ${asset}`);
  const content = await response.arrayBuffer();
  assert.ok(content.byteLength > 0, `Required asset is unexpectedly empty: ${asset}`);
}

const prinnyFiles = (await readdir(new URL("../public/media/prinny-cult/roster/", import.meta.url)))
  .filter((filename) => filename.endsWith(".webp"));
assert.equal(prinnyFiles.length, 27, "The supplied collection must retain exactly 27 original Prinny designs");

for (const filename of prinnyFiles) {
  const response = await fetch(new URL(`/media/prinny-cult/roster/${filename}`, origin));
  assert.equal(response.status, 200, `Supplied Prinny derivative is unavailable: ${filename}`);
}

console.log(`Verified ${routes.length} independently served HTML documents, ${requiredAssets.length} essential identity/environment assets, and all ${prinnyFiles.length} supplied Prinny designs.`);
} finally {
  if (preview && preview.exitCode === null) {
    preview.kill("SIGTERM");
  }
}
