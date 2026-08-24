<script setup lang="ts">
import { computed } from "vue";
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

const positions = ["0%", "25%", "50%", "75%", "100%"] as const;
const frame = computed(() => frames[props.variant]);
const spriteStyle = computed(() => ({
  "--ghostie-image": `url('${frame.value.src}')`,
  "--ghostie-position": positions[frame.value.index]
}));
</script>

<template>
  <figure
    class="ghostie-art"
    :class="{ 'ghostie-art--mirrored': mirror }"
    :aria-hidden="decorative ? 'true' : undefined"
  >
    <span
      class="ghostie-art__sprite"
      :style="spriteStyle"
      :role="decorative ? undefined : 'img'"
      :aria-label="decorative ? undefined : label"
    ></span>
  </figure>
</template>

<style scoped>
.ghostie-art {
  display: grid;
  width: 100%;
  height: 100%;
  min-height: 0;
  place-items: center;
  margin: 0;
  overflow: hidden;
  background: #fffaf3;
  border-radius: inherit;
  isolation: isolate;
}

.ghostie-art__sprite {
  display: block;
  width: min(100%, var(--ghostie-size, 12rem));
  aspect-ratio: 1;
  background-image: var(--ghostie-image);
  background-repeat: no-repeat;
  background-position: var(--ghostie-position) center;
  background-size: 500% 100%;
  filter: saturate(0.98) contrast(1.015);
  transform: scaleX(var(--ghostie-mirror, 1));
  transform-origin: center;
}

.ghostie-art--mirrored {
  --ghostie-mirror: -1;
}
</style>
