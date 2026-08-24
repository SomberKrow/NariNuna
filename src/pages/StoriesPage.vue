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

  <section class="moment-shelf moment-shelf--final page-width section-pad">
    <header class="world-heading"><p class="eyebrow">Three little pieces of the chaos</p><h2>Start with something that actually happened.</h2></header>
    <div class="media-grid"><MediaCard v-for="moment in featuredMoments" :key="moment.id" :moment="moment" /></div>
    <div class="story-shelf-note"><Clock3 :size="28" aria-hidden="true" /><div><strong>Nari decides what makes the shelf.</strong><p>Nothing private gets scraped, and nobody has to become content to belong.</p></div></div>
  </section>
</template>
