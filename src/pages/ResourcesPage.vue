<script setup lang="ts">
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
    <div class="room-opening__art room-opening__art--resources">
      <img :src="environmentArtwork.resources" width="1672" height="941" alt="An intricately hand-painted autumn library where little Ghosties keep watch over Nari's books, creative tools, lavender, and helpful shelves" fetchpriority="high" />
    </div>
  </section>

  <section class="resource-shelves page-width section-pad">
    <header class="world-heading">
      <p class="eyebrow">Layout preview · recommendations still pending</p>
      <h2>The shelves finally have enough weight to judge.</h2>
      <p>The category cards remain honest curating states. The entries below are clearly marked demonstration content so Nari and Panda can evaluate density before final recommendations exist.</p>
    </header>

    <div class="resource-shelves__grid resource-shelves__grid--painted">
      <article v-for="(category, index) in resourceCategories" :key="category.title">
        <img :src="categoryArt[index]" width="640" height="360" alt="" loading="lazy" />
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
