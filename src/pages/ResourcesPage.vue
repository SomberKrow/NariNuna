<script setup lang="ts">
import { artworkSrc, artworkSrcset, heroSources } from "@/data/artworkDelivery";
import { BadgeCheck, BookMarked, HeartHandshake, Scale } from "@lucide/vue";
import { environmentArtwork, storybookPostcards } from "@/data/artwork";
import { resourceCategories } from "@/data/content";
import { resourceDemoEntries } from "@/data/resources";

const categoryArt = [storybookPostcards.nails, storybookPostcards.work, storybookPostcards.streams];
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
      <img :src="artworkSrc(environmentArtwork.resources, 1280)" width="1672" height="941" alt="An intricately hand-painted autumn library where little Ghosties keep watch over Nari's books, creative tools, lavender, and helpful shelves" fetchpriority="high" />
    </picture>
  </section>

  <section class="resource-shelves page-width section-pad">
    <header class="world-heading">
      <p class="eyebrow">Layout preview · recommendations still pending</p>
      <h2>The shelves finally have enough weight to judge.</h2>
      <p>The category cards remain honest curating states. The entries below are clearly marked demonstration content so Nari and Panda can evaluate density before final recommendations exist.</p>
    </header>

    <div class="resource-shelves__grid resource-shelves__grid--painted">
      <article v-for="(category, index) in resourceCategories" :key="category.title" :class="`resource-shelves__chapter resource-shelves__chapter--${index + 1}`">
        <img :src="artworkSrc(categoryArt[index], 256)" :srcset="artworkSrcset(categoryArt[index])" sizes="(min-width: 48rem) 40vw, calc(100vw - 48px)" width="640" height="360" alt="" loading="lazy" />
        <div>
          <span><BadgeCheck :size="14" aria-hidden="true" /> {{ category.status }}</span>
          <h3>{{ category.title }}</h3>
          <p>{{ category.description }}</p>
          <ul><li v-for="example in category.examples" :key="example">{{ example }}</li></ul>
        </div>
      </article>
    </div>

    <div class="resource-demo" aria-labelledby="resource-demo-title">
      <header class="resource-demo__heading">
        <p class="eyebrow"><BadgeCheck :size="14" aria-hidden="true" /> Demonstration shelf</p>
        <h2 id="resource-demo-title">What a genuinely populated page can feel like.</h2>
        <p>Different lengths, different rhythms, and enough repetition to expose awkward wrapping or empty space before real recommendations arrive.</p>
      </header>

      <div class="resource-demo__grid">
        <article
          v-for="entry in resourceDemoEntries"
          :key="entry.id"
          class="resource-demo__item"
          :class="`resource-demo__item--${entry.layout}`"
        >
          <div class="resource-demo__meta"><span>{{ entry.category }}</span><small>Demo entry</small></div>
          <h3>{{ entry.title }}</h3>
          <p>{{ entry.summary }}</p>
          <ul><li v-for="detail in entry.details" :key="detail">{{ detail }}</li></ul>
        </article>
      </div>

      <p class="resource-demo__disclosure"><Scale :size="18" aria-hidden="true" /> Demonstration only: these entries preview layout and content rhythm; they are not endorsements, sponsorships, or final Nari recommendations.</p>
    </div>

    <div class="resource-promise"><Scale :size="28" aria-hidden="true" /><div><strong>No fake recommendations. No pressure.</strong><p>If something earns a link, Nari gets to explain why. Any material relationship gets disclosed, and nobody pretends a random product is essential.</p></div></div>
  </section>
</template>

<style scoped>
.resource-shelves__grid--painted { position: relative; gap: 0.9rem; }
.resource-shelves__chapter { border-radius: 0.4rem; }
.resource-shelves__chapter > img { transition: filter 260ms ease, transform 420ms ease; }
.resource-shelves__chapter:hover > img { filter: saturate(1.06) contrast(1.03); transform: scale(1.025); }
.resource-demo__grid { align-items: start; }
.resource-demo__item {
  position: relative;
  overflow: hidden;
  border-radius: 0.35rem;
}
.resource-demo__item::before {
  position: absolute;
  top: 0;
  right: 1rem;
  left: 1rem;
  height: 1px;
  background: linear-gradient(90deg, transparent, var(--story-accent), transparent);
  opacity: 0.42;
  content: "";
}
@media (min-width: 48rem) {
  .resource-shelves__grid--painted {
    grid-template-columns: repeat(12, minmax(0, 1fr));
    gap: 1.15rem;
    align-items: start;
  }
  .resource-shelves__grid--painted > .resource-shelves__chapter--1 {
    grid-column: 1 / 8;
    grid-row: 1 / span 2;
  }
  .resource-shelves__grid--painted > .resource-shelves__chapter--1 > img { height: clamp(15rem, 28vw, 21rem); }
  .resource-shelves__grid--painted > .resource-shelves__chapter--2 { grid-column: 8 / 13; grid-row: 1; }
  .resource-shelves__grid--painted > .resource-shelves__chapter--3 { grid-column: 7 / 12; grid-row: 2; }
}
@media (min-width: 72rem) {
  .resource-demo__grid {
    grid-template-columns: repeat(12, minmax(0, 1fr));
    grid-auto-flow: dense;
    gap: 0.85rem;
  }
  .resource-demo__item--compact { grid-column: span 3; }
  .resource-demo__item--standard { grid-column: span 4; }
  .resource-demo__item--wide { grid-column: span 6; }
  .resource-demo__item:nth-child(4) { grid-column: span 5; }
  .resource-demo__item:nth-child(7) { grid-column: span 7; }
}
@media (prefers-reduced-motion: reduce) {
  .resource-shelves__chapter > img { transition: none; }
  .resource-shelves__chapter:hover > img { transform: none; }
}
</style>
