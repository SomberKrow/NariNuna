<script setup lang="ts">
import { ArrowUpRight, BadgeCheck, BookMarked, ExternalLink, HeartHandshake, Scale } from "@lucide/vue";
import { environmentArtwork, ghostieArtwork } from "@/data/artwork";
import { resourceCategories } from "@/data/content";
import { socialLinks } from "@/data/socials";

const categoryArt = [
  "/media/resources/resources-section-icon-nails.svg",
  "/media/resources/resources-section-icon-creator.svg",
  "/media/resources/resources-section-icon-community.svg"
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
    <div class="room-opening__art room-opening__art--resources">
      <img :src="environmentArtwork.resources" width="1672" height="941" alt="An intricately hand-painted autumn library where little Ghosties keep watch over Nari's books, creative tools, lavender, and helpful shelves" fetchpriority="high" />
    </div>
  </section>

  <section class="resource-shelves page-width section-pad">
    <header class="world-heading"><p class="eyebrow">Currently being curated, very dramatically</p><h2>The shelves are ready for her favorites.</h2></header>
    <div class="resource-shelves__grid">
      <article v-for="(category, index) in resourceCategories" :key="category.title">
        <img :src="categoryArt[index]" width="90" height="90" alt="" loading="lazy" />
        <span><BadgeCheck :size="14" aria-hidden="true" /> {{ category.status }}</span>
        <h3>{{ category.title }}</h3>
        <p>{{ category.description }}</p>
        <ul><li v-for="example in category.examples" :key="example">{{ example }}</li></ul>
      </article>
    </div>
  </section>

  <section class="shelf-promise">
    <div class="shelf-promise__inner page-width"><Scale :size="38" aria-hidden="true" /><div><p class="eyebrow">The shelf rules</p><h2>No fake recommendations. No pressure.</h2><p>If something earns a link, Nari gets to explain why. Any material relationship gets disclosed, and nobody pretends a random product is essential.</p></div><img :src="ghostieArtwork.protective" width="130" height="130" alt="" loading="lazy" /></div>
  </section>

  <section class="social-directory page-width section-pad">
    <header class="world-heading"><p class="eyebrow">Looking for the real Nari?</p><h2>These doors already lead to her.</h2></header>
    <div class="social-directory__grid">
      <a v-for="link in socialLinks" :key="link.url" :href="link.url" target="_blank" rel="noreferrer noopener"><span><strong>{{ link.label }}</strong><small>{{ link.handle }}</small></span><ExternalLink :size="18" aria-hidden="true" /><p>{{ link.purpose }}</p><span class="sr-only"> (opens in a new tab)</span></a>
    </div>
    <p class="verification-note"><ArrowUpRight :size="16" aria-hidden="true" /> Public destinations were last recorded on August 13, 2026 and must be rechecked before launch.</p>
  </section>
</template>
