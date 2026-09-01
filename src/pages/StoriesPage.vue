<script setup lang="ts">
import { BookOpenText, Clock3 } from "@lucide/vue";
import MediaCard from "@/components/ui/MediaCard.vue";
import { environmentArtwork } from "@/data/artwork";
import { featuredMoments } from "@/data/media";
</script>

<template>
  <section class="story-opening story-opening--painted page-width" :style="{ '--chapter-painting': `url('${environmentArtwork.stories}')` }">
    <div><p class="eyebrow"><BookOpenText :size="16" aria-hidden="true" /> Chapter seven · lanterns, blankets, one more story</p><h1>Some moments<br /><em>deserve to stay.</em></h1><p>A little shelf for Nari's favorite stories, ridiculous stream memories, and moments that still make her laugh when chat is long gone.</p></div>
  </section>

  <section class="moment-shelf moment-shelf--final moment-shelf--stories page-width section-pad">
    <header class="world-heading"><p class="eyebrow">Three little pieces of the chaos</p><h2>Start with something that actually happened.</h2></header>
    <div class="media-grid"><MediaCard v-for="moment in featuredMoments" :key="moment.id" :moment="moment" /></div>
    <div class="story-shelf-note"><Clock3 :size="28" aria-hidden="true" /><div><strong>Nari decides what makes the shelf.</strong><p>Nothing private gets scraped, and nobody has to become content to belong.</p></div></div>
  </section>
</template>

<style scoped>
.moment-shelf--stories :deep(.media-card) { border-radius: 0.4rem; }
.story-shelf-note { margin-block-start: clamp(1.25rem, 4vw, 2.25rem); }
@media (min-width: 48rem) {
  .moment-shelf--stories .media-grid {
    grid-template-columns: repeat(12, minmax(0, 1fr));
    gap: 1.1rem;
    align-items: start;
  }
  .moment-shelf--stories :deep(.media-card:first-child) {
    grid-column: 1 / 8;
    grid-row: 1 / span 2;
  }
  .moment-shelf--stories :deep(.media-card:nth-child(2)) { grid-column: 8 / 13; grid-row: 1; }
  .moment-shelf--stories :deep(.media-card:nth-child(3)) { grid-column: 7 / 12; grid-row: 2; }
  .moment-shelf--stories :deep(.media-card:first-child .media-card__image) { aspect-ratio: 16 / 10; }
  .moment-shelf--stories :deep(.media-card:not(:first-child) > a) {
    display: grid;
    grid-template-columns: minmax(9rem, 0.42fr) minmax(0, 0.58fr);
  }
  .moment-shelf--stories :deep(.media-card:not(:first-child) .media-card__image) {
    height: 100%;
    min-height: 13rem;
    aspect-ratio: auto;
  }
}
</style>
