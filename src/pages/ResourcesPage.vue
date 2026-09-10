<script setup lang="ts">
import ResponsiveArtwork from "@/components/art/ResponsiveArtwork.vue";
import { heroSources } from "@/data/artworkDelivery";
import { BookMarked, HeartHandshake } from "@lucide/vue";
import { environmentArtwork, storybookPostcards } from "@/data/artwork";
import { resourceCategories } from "@/data/content";

const resourceShelves = [
  { id: "nail-desk", category: resourceCategories[0], art: storybookPostcards.nails },
  { id: "creator-shelf", category: resourceCategories[1], art: storybookPostcards.work },
  { id: "game-pile", category: resourceCategories[2], art: storybookPostcards.streams }
];
</script>

<template>
  <section class="room-opening room-opening--resources page-width">
    <div class="room-opening__copy">
      <p class="eyebrow"><BookMarked :size="16" aria-hidden="true" /> Chapter five · the very helpful shelf</p>
      <h1>Useful things.<br /><em>Chosen with care.</em></h1>
      <p>Helpful finds, creator tools, and nail-desk favorites only get a spot if Nari actually wants to share them.</p>
      <div class="room-opening__signals"><span><HeartHandshake :size="15" aria-hidden="true" /> People before products</span></div>
    </div>
    <picture class="room-opening__art room-opening__art--resources">
      <source v-for="source in heroSources(environmentArtwork.resources)" :key="source.media" :media="source.media" :srcset="source.srcset" />
      <ResponsiveArtwork :fallback-width="1280" sizes="100vw" loading="eager" :artwork="environmentArtwork.resources" width="1672" height="941" alt="An intricately hand-painted autumn library where little Ghosties keep watch over Nari's books, creative tools, lavender, and helpful shelves" fetchpriority="high" />
    </picture>
  </section>

  <section class="resource-library room-section page-width" aria-labelledby="shelf-title">
    <header class="resource-library__index">
      <p class="room-kicker">The collection</p>
      <h2 id="shelf-title">A little less searching.<br /><em>A little more making.</em></h2>
      <p class="room-caption">Nari is choosing her first recommendations. Each one will include a reason it belongs here.</p>
    </header>

    <div class="resource-library__shelves">
      <article v-for="(shelf, index) in resourceShelves" :id="shelf.id" :key="shelf.id" class="resource-shelf">
        <div class="resource-shelf__heading">
          <span class="resource-shelf__number" aria-hidden="true">0{{ index + 1 }}</span>
          <div><p class="room-kicker">{{ shelf.category.status }}</p><h3>{{ shelf.category.title }}</h3></div>
          <ResponsiveArtwork :artwork="shelf.art" sizes="(min-width: 64rem) 160px, (min-width: 40rem) 128px, 96px" alt="" />
        </div>
        <p>{{ shelf.category.description }}</p>
        <ul><li v-for="example in shelf.category.examples" :key="example">{{ example }}</li></ul>
      </article>
    </div>
  </section>

  <section class="resource-review page-width" aria-label="Recommendation policy">
    <div class="shelf-policy"><BookMarked :size="24" aria-hidden="true" /><div><h2>A recommendation should earn its place.</h2><p>Nari's picks will include her own context and clear disclosures for any paid or affiliate relationship.</p></div></div>
  </section>
</template>

<style scoped lang="scss" src="@/styles/rooms/resources.scss"></style>
