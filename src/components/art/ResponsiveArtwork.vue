<script setup lang="ts">
import { computed } from "vue";
import { artworkMetadata, artworkSrc, artworkSrcset, type ArtworkKey } from "@/data/artworkDelivery";

const props = withDefaults(defineProps<{
  artwork: ArtworkKey;
  alt: string;
  sizes: string;
  fallbackWidth?: number;
  maxWidth?: number;
  loading?: "eager" | "lazy";
  decoding?: "async" | "sync" | "auto";
  fetchpriority?: "high" | "low" | "auto";
}>(), {
  fallbackWidth: 256,
  maxWidth: Infinity,
  loading: "lazy",
  decoding: "async",
  fetchpriority: "auto"
});

const metadata = computed(() => artworkMetadata(props.artwork));
// One root img preserves picture sources, direct-child CSS and attribute fallthrough.
</script>

<template>
  <img
    :src="artworkSrc(artwork, Math.min(fallbackWidth, maxWidth))"
    :srcset="artworkSrcset(artwork, maxWidth)"
    :sizes="sizes"
    :width="metadata.width"
    :height="metadata.height"
    :alt="alt"
    :loading="loading"
    :decoding="decoding"
    :fetchpriority="fetchpriority"
  />
</template>
