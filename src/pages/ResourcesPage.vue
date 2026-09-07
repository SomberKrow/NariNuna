<script setup lang="ts">
import ResponsiveArtwork from "@/components/art/ResponsiveArtwork.vue";
import { heroSources } from "@/data/artworkDelivery";
import { BookMarked, HeartHandshake } from "@lucide/vue";
import { environmentArtwork, storybookPostcards } from "@/data/artwork";
import { resourceCategories } from "@/data/content";
import { resourceDemoEntries } from "@/data/resources";

const categoryArt = [storybookPostcards.nails, storybookPostcards.work, storybookPostcards.streams];
const shelfIds = ["nail-desk", "creator-shelf", "game-pile"];
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
    <aside class="resource-library__index">
      <p class="room-kicker">The collection</p>
      <h2 id="shelf-title">A little less searching.<br /><em>A little more making.</em></h2>
      <nav aria-label="Resource categories">
        <a v-for="(category, index) in resourceCategories" :key="category.title" :href="`#${shelfIds[index]}`">
          <span aria-hidden="true">0{{ index + 1 }}</span>{{ category.title }}
        </a>
      </nav>
      <p class="room-caption">Nari is choosing her first recommendations. Each one will include a reason it belongs here.</p>
    </aside>

    <div class="resource-library__shelves">
      <article v-for="(category, index) in resourceCategories" :id="shelfIds[index]" :key="category.title" class="resource-shelf">
        <div class="resource-shelf__heading">
          <span class="resource-shelf__number" aria-hidden="true">0{{ index + 1 }}</span>
          <div><p class="room-kicker">{{ category.status }}</p><h3>{{ category.title }}</h3></div>
          <ResponsiveArtwork :artwork="categoryArt[index]" sizes="(min-width: 40rem) 160px, 96px" alt="" />
        </div>
        <p>{{ category.description }}</p>
        <ul><li v-for="example in category.examples" :key="example">{{ example }}</li></ul>
      </article>
    </div>
  </section>

  <section class="resource-review page-width" aria-label="Recommendation policy and review samples">
    <div class="shelf-policy"><BookMarked :size="24" aria-hidden="true" /><div><h2>A recommendation should earn its place.</h2><p>Nari's picks will include her own context and clear disclosures for any paid or affiliate relationship.</p></div></div>
    <!-- Keep the existing client density samples available without presenting them as recommendations. -->
    <details class="resource-samples">
      <summary>Client preview: sample shelf entries <span>Demonstration content</span></summary>
      <p class="resource-samples__disclosure">Demonstration only: these entries preview layout and content rhythm; they are not endorsements, sponsorships, or final Nari recommendations.</p>
      <div class="resource-samples__list">
        <article v-for="entry in resourceDemoEntries" :key="entry.id">
          <p class="room-kicker">{{ entry.category }} · Demo entry</p>
          <h3>{{ entry.title }}</h3><p>{{ entry.summary }}</p>
          <ul><li v-for="detail in entry.details" :key="detail">{{ detail }}</li></ul>
        </article>
      </div>
    </details>
  </section>
</template>

<style scoped lang="scss" src="@/styles/rooms/resources.scss"></style>
