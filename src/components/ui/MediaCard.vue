<script setup lang="ts">
import { ArrowUpRight, Play } from "@lucide/vue";
import type { MediaMoment } from "@/types/content";

defineProps<{ moment: MediaMoment }>();
</script>

<template>
  <article class="media-card">
    <a :href="moment.url" target="_blank" rel="noreferrer noopener">
      <div class="media-card__image">
        <img
          v-if="moment.thumbnailUrl"
          :src="moment.thumbnailUrl"
          width="480"
          height="360"
          :alt="moment.alt ?? ''"
          loading="lazy"
          referrerpolicy="no-referrer"
        />
        <span class="media-card__play" aria-hidden="true"><Play :size="20" fill="currentColor" /></span>
      </div>
      <div class="media-card__body">
        <p class="eyebrow">{{ moment.platform }} moment</p>
        <h3>{{ moment.title }}</h3>
        <p>{{ moment.description }}</p>
        <span class="text-link">Watch the moment <ArrowUpRight :size="16" aria-hidden="true" /></span>
      </div>
      <span class="sr-only"> (opens in a new tab)</span>
    </a>
  </article>
</template>
