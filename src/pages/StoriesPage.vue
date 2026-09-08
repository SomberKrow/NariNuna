<script setup lang="ts">
import { heroStyle } from "@/data/artworkDelivery";
import { ArrowRight, BookOpenText } from "@lucide/vue";
import MediaCard from "@/components/ui/MediaCard.vue";
import { environmentArtwork } from "@/data/artwork";
import { featuredMoments } from "@/data/media";

const leadMemory = featuredMoments[0];
const albumMemories = featuredMoments.slice(1);
</script>

<template>
  <section class="story-opening story-opening--painted page-width responsive-hero" :style="heroStyle(environmentArtwork.stories)">
    <div><p class="eyebrow"><BookOpenText :size="16" aria-hidden="true" /> Chapter seven · lanterns, blankets, one more story</p><h1>Some moments<br /><em>deserve to stay.</em></h1><p>A little shelf for Nari's favorite stories, ridiculous stream memories, and moments that still make her laugh when chat is long gone.</p></div>
  </section>

  <section class="memory-album room-section page-width" aria-labelledby="album-title">
    <header class="room-heading"><div><p class="room-kicker">Saved from the stream room</p><h2 id="album-title">You had to be there.<br /><em>Or you can start here.</em></h2></div><p>A few familiar clips, kept together while Nari chooses the stories to share next.</p></header>
    <ol class="memory-album__pages">
      <li class="memory-album__lead">
        <div class="memory-album__folio"><span>Lead memory · 01</span><span aria-hidden="true">Nari's Haven</span></div>
        <MediaCard :moment="leadMemory" presentation="album" featured />
      </li>
      <li v-for="(moment, index) in albumMemories" :key="moment.id">
        <div class="memory-album__folio"><span>Moment 0{{ index + 2 }}</span><span aria-hidden="true">Nari's Haven</span></div>
        <MediaCard :moment="moment" presentation="album" />
      </li>
    </ol>
    <p class="memory-album__closing">Some memories are for sharing. Others belong to the people who made them. Nari decides what stays here.</p>
    <a class="memory-album__next text-link" href="/streams/">Back to the broadcast desk <ArrowRight :size="16" aria-hidden="true" /></a>
  </section>
</template>

<style scoped lang="scss" src="@/styles/rooms/stories.scss"></style>
