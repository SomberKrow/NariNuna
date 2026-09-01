<script setup lang="ts">
import { ArrowUpRight, Eye, Gift, Heart, Share2 } from "@lucide/vue";
import GhostieArt, { type GhostieArtVariant } from "@/components/art/GhostieArt.vue";
import { environmentArtwork } from "@/data/artwork";
import { throneUrl, twitchUrl } from "@/data/socials";

const ways: { icon: typeof Eye; title: string; text: string; ghostie: GhostieArtVariant; mirror?: boolean }[] = [
  { icon: Eye, title: "Just be here", text: "Watch, lurk, laugh, or take a break. You never need to perform to deserve your place.", ghostie: "blanket" },
  { icon: Share2, title: "Share a favorite moment", text: "Send a clip to somebody who needs a laugh. Genuine little moments mean a lot.", ghostie: "pointLeft", mirror: true },
  { icon: Heart, title: "Be good to the room", text: "Kindness, respect, and healthy boundaries help everyone in the Haven breathe.", ghostie: "heart" }
];
</script>

<template>
  <section class="support-welcome support-welcome--painted page-width" :style="{ '--chapter-painting': `url('${environmentArtwork.commonRoom}')` }">
    <div><p class="eyebrow"><Heart :size="15" aria-hidden="true" /> A gentle reminder, before anything else</p><h1>Your presence<br /><em>already counts.</em></h1><p>You matter here whether you spend money or not. Laughing, learning, lurking, checking in, and simply being kind are all real support.</p></div>
  </section>
  <section class="support-kindness page-width section-pad">
    <header class="world-heading"><p class="eyebrow">The things that cost absolutely nothing</p><h2>These are the big ones.</h2></header>
    <div class="support-kindness__grid support-kindness__grid--painted">
      <article v-for="(way, index) in ways" :key="way.title" :class="`support-kindness__chapter support-kindness__chapter--${index + 1}`">
        <GhostieArt class="ghostie-card-art" :variant="way.ghostie" :mirror="way.mirror" />
        <div><component :is="way.icon" :size="22" aria-hidden="true" /><h3>{{ way.title }}</h3><p>{{ way.text }}</p></div>
      </article>
    </div>
  </section>
  <section class="support-boundary page-width"><Gift :size="31" aria-hidden="true" /><div><p class="eyebrow">If you genuinely want to</p><h2>Nari's wishlist lives on Throne.</h2><p>Financial support never buys access, extra attention, ownership, permission to cross a boundary, or a claim on Nari's time. Ever.</p><div class="button-row"><a class="button button--emerald" :href="throneUrl" target="_blank" rel="noreferrer noopener">Visit Throne <ArrowUpRight :size="17" aria-hidden="true" /></a><a class="text-link" :href="twitchUrl" target="_blank" rel="noreferrer noopener">Or just come hang out <ArrowUpRight :size="15" aria-hidden="true" /></a></div></div></section>
</template>

<style scoped>
.support-kindness__grid--painted { position: relative; gap: 0.9rem; }
.support-kindness__chapter {
  min-height: 0;
  grid-template-columns: 7rem minmax(0, 1fr);
  grid-template-rows: 1fr;
  align-items: center;
  overflow: visible;
  border-radius: 0.35rem;
}
.ghostie-card-art {
  --ghostie-size: 8rem;
  width: 7.7rem;
  height: 9rem;
  margin-inline-start: -0.5rem;
  border: 0;
  filter: drop-shadow(0 0.75rem 1rem rgb(15 9 14 / 16%));
}
.support-kindness__chapter > div { min-height: 0; padding: 1.15rem 1.15rem 1.2rem 0.8rem; border-inline-start: 1px solid var(--story-line); }
@media (min-width: 48rem) {
  .support-kindness__grid--painted {
    grid-template-columns: repeat(12, minmax(0, 1fr));
    gap: 1.1rem;
    align-items: start;
    padding-block: 1rem;
  }
  .support-kindness__grid--painted > .support-kindness__chapter--1 {
    grid-column: 1 / 8;
    grid-row: 1 / span 2;
    grid-template-columns: minmax(10rem, 0.72fr) minmax(0, 1.28fr);
    min-height: 23rem;
  }
  .support-kindness__grid--painted > .support-kindness__chapter--2 { grid-column: 8 / 13; grid-row: 1; }
  .support-kindness__grid--painted > .support-kindness__chapter--3 { grid-column: 7 / 12; grid-row: 2; }
  .support-kindness__chapter--1 .ghostie-card-art { --ghostie-size: 14rem; width: 13rem; height: 15rem; margin-inline-start: -1rem; }
}
</style>
