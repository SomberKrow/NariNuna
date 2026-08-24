<script setup lang="ts">
import { computed, nextTick, onBeforeUnmount, onMounted, ref, watch } from "vue";
import { communityGhostieSprites } from "@/data/artwork";

export type GhostieArtVariant =
  | "sleeping"
  | "chaotic"
  | "protective"
  | "nailTech"
  | "gaming"
  | "cozy"
  | "study"
  | "peek"
  | "heart"
  | "bonked"
  | "shy"
  | "sign"
  | "blushing"
  | "pointLeft"
  | "wave"
  | "floating"
  | "blanket"
  | "support"
  | "panicked";

const props = withDefaults(
  defineProps<{
    variant: GhostieArtVariant;
    decorative?: boolean;
    label?: string;
    mirror?: boolean;
  }>(),
  {
    decorative: true,
    label: "A Nari Nuna community Ghostie",
    mirror: false
  }
);

type GhostieFrame = { src: string; index: 0 | 1 | 2 | 3 | 4 };
type Rgb = readonly [number, number, number];

const frames: Record<GhostieArtVariant, GhostieFrame> = {
  sleeping: { src: communityGhostieSprites.core, index: 0 },
  chaotic: { src: communityGhostieSprites.core, index: 1 },
  protective: { src: communityGhostieSprites.core, index: 2 },
  nailTech: { src: communityGhostieSprites.core, index: 3 },
  gaming: { src: communityGhostieSprites.core, index: 4 },
  cozy: { src: communityGhostieSprites.cozy, index: 0 },
  study: { src: communityGhostieSprites.cozy, index: 1 },
  peek: { src: communityGhostieSprites.cozy, index: 2 },
  heart: { src: communityGhostieSprites.cozy, index: 3 },
  bonked: { src: communityGhostieSprites.cozy, index: 4 },
  shy: { src: communityGhostieSprites.utility, index: 0 },
  sign: { src: communityGhostieSprites.utility, index: 1 },
  blushing: { src: communityGhostieSprites.utility, index: 2 },
  pointLeft: { src: communityGhostieSprites.utility, index: 3 },
  wave: { src: communityGhostieSprites.utility, index: 4 },
  floating: { src: communityGhostieSprites.extras, index: 0 },
  blanket: { src: communityGhostieSprites.extras, index: 1 },
  support: { src: communityGhostieSprites.extras, index: 2 },
  panicked: { src: communityGhostieSprites.extras, index: 3 }
};

const RENDER_SIZE = 384;
const canvas = ref<HTMLCanvasElement | null>(null);
const frame = computed(() => frames[props.variant]);
const imageCache = new Map<string, Promise<HTMLImageElement>>();
const renderedFrameCache = new Map<string, HTMLCanvasElement>();
let renderToken = 0;

function loadImage(src: string): Promise<HTMLImageElement> {
  const cached = imageCache.get(src);
  if (cached) return cached;

  const promise = new Promise<HTMLImageElement>((resolve, reject) => {
    const image = new Image();
    image.decoding = "async";
    image.onload = () => resolve(image);
    image.onerror = () => reject(new Error(`Unable to load Ghostie artwork: ${src}`));
    image.src = src;
  });

  imageCache.set(src, promise);
  return promise;
}

function sampleBackground(data: Uint8ClampedArray, size: number): Rgb {
  const points = [
    [2, 2],
    [size - 3, 2],
    [2, size - 3],
    [size - 3, size - 3],
    [Math.floor(size / 2), 2],
    [Math.floor(size / 2), size - 3]
  ] as const;

  const sums = [0, 0, 0];
  for (const [x, y] of points) {
    const offset = (y * size + x) * 4;
    sums[0] += data[offset];
    sums[1] += data[offset + 1];
    sums[2] += data[offset + 2];
  }

  return [
    Math.round(sums[0] / points.length),
    Math.round(sums[1] / points.length),
    Math.round(sums[2] / points.length)
  ];
}

function isPaperPixel(data: Uint8ClampedArray, pixel: number, background: Rgb): boolean {
  const offset = pixel * 4;
  if (data[offset + 3] === 0) return true;

  const red = data[offset];
  const green = data[offset + 1];
  const blue = data[offset + 2];
  const redDelta = red - background[0];
  const greenDelta = green - background[1];
  const blueDelta = blue - background[2];
  const distance = Math.sqrt(redDelta * redDelta + greenDelta * greenDelta + blueDelta * blueDelta);

  return distance < 58 && red > 218 && green > 207 && blue > 198;
}

function removeConnectedPaper(context: CanvasRenderingContext2D, size: number): void {
  const imageData = context.getImageData(0, 0, size, size);
  const { data } = imageData;
  const background = sampleBackground(data, size);
  const visited = new Uint8Array(size * size);
  const queue = new Int32Array(size * size);
  let head = 0;
  let tail = 0;

  const enqueue = (pixel: number) => {
    if (visited[pixel]) return;
    visited[pixel] = 1;
    if (isPaperPixel(data, pixel, background)) queue[tail++] = pixel;
  };

  for (let x = 0; x < size; x += 1) {
    enqueue(x);
    enqueue((size - 1) * size + x);
  }
  for (let y = 1; y < size - 1; y += 1) {
    enqueue(y * size);
    enqueue(y * size + size - 1);
  }

  while (head < tail) {
    const pixel = queue[head++];
    const x = pixel % size;
    const y = Math.floor(pixel / size);
    data[pixel * 4 + 3] = 0;

    if (x > 0) enqueue(pixel - 1);
    if (x < size - 1) enqueue(pixel + 1);
    if (y > 0) enqueue(pixel - size);
    if (y < size - 1) enqueue(pixel + size);
  }

  context.putImageData(imageData, 0, 0);
}

async function buildTransparentFrame(source: GhostieFrame): Promise<HTMLCanvasElement> {
  const key = `${source.src}#${source.index}`;
  const cached = renderedFrameCache.get(key);
  if (cached) return cached;

  const image = await loadImage(source.src);
  const output = document.createElement("canvas");
  output.width = RENDER_SIZE;
  output.height = RENDER_SIZE;
  const context = output.getContext("2d", { willReadFrequently: true });
  if (!context) throw new Error("Canvas rendering is unavailable for Ghostie artwork.");

  const sourceFrameWidth = image.naturalWidth / 5;
  context.drawImage(
    image,
    source.index * sourceFrameWidth,
    0,
    sourceFrameWidth,
    image.naturalHeight,
    0,
    0,
    RENDER_SIZE,
    RENDER_SIZE
  );
  removeConnectedPaper(context, RENDER_SIZE);
  renderedFrameCache.set(key, output);
  return output;
}

async function renderGhostie(): Promise<void> {
  const target = canvas.value;
  if (!target) return;

  const token = ++renderToken;
  try {
    const source = await buildTransparentFrame(frame.value);
    if (token !== renderToken || !canvas.value) return;

    target.width = RENDER_SIZE;
    target.height = RENDER_SIZE;
    const context = target.getContext("2d");
    if (!context) return;
    context.clearRect(0, 0, RENDER_SIZE, RENDER_SIZE);
    context.drawImage(source, 0, 0);
  } catch (error) {
    console.warn(error);
  }
}

onMounted(() => {
  void renderGhostie();
});

watch(frame, async () => {
  await nextTick();
  void renderGhostie();
});

onBeforeUnmount(() => {
  renderToken += 1;
});
</script>

<template>
  <figure
    class="ghostie-art"
    :class="{ 'ghostie-art--mirrored': mirror }"
    :aria-hidden="decorative ? 'true' : undefined"
  >
    <canvas
      ref="canvas"
      class="ghostie-art__canvas"
      :role="decorative ? undefined : 'img'"
      :aria-label="decorative ? undefined : label"
    ></canvas>
  </figure>
</template>

<style scoped>
.ghostie-art {
  --ghostie-mirror: 1;
  position: relative;
  display: grid;
  width: 100%;
  height: 100%;
  min-height: 0;
  place-items: center;
  margin: 0;
  overflow: hidden;
  background: transparent;
  border-radius: inherit;
  isolation: isolate;
}

.ghostie-art::before,
.ghostie-art::after {
  position: absolute;
  z-index: -1;
  border-radius: 50%;
  pointer-events: none;
  content: "";
}

.ghostie-art::before {
  inset: 12% 9% 5%;
  background: radial-gradient(
    ellipse at 50% 58%,
    color-mix(in srgb, var(--story-accent) 18%, transparent) 0%,
    color-mix(in srgb, var(--story-accent) 7%, transparent) 48%,
    transparent 74%
  );
  filter: blur(0.42rem);
  opacity: 0.9;
}

.ghostie-art::after {
  width: 38%;
  aspect-ratio: 1;
  top: 8%;
  right: 8%;
  background: radial-gradient(circle, rgb(236 183 119 / 15%), transparent 70%);
  filter: blur(0.55rem);
}

.ghostie-art__canvas {
  position: relative;
  z-index: 1;
  display: block;
  width: min(94%, var(--ghostie-size, 12rem));
  max-width: 100%;
  height: auto;
  aspect-ratio: 1;
  filter: saturate(0.99) contrast(1.01) drop-shadow(0 0.65rem 0.9rem rgb(32 17 28 / 16%));
  transform: scaleX(var(--ghostie-mirror));
  transform-origin: center;
}

.ghostie-art--mirrored {
  --ghostie-mirror: -1;
}

.ghostie-art.haven-threshold__ghostie {
  overflow: visible;
  border: 0;
  box-shadow: none;
}

.ghostie-art.haven-threshold__ghostie::before,
.ghostie-art.haven-threshold__ghostie::after {
  display: none;
}
</style>
