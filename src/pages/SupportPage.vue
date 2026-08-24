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
      <article v-for="way in ways" :key="way.title">
        <GhostieArt class="ghostie-card-art" :variant="way.ghostie" :mirror="way.mirror" />
        <div><component :is="way.icon" :size="22" aria-hidden="true" /><h3>{{ way.title }}</h3><p>{{ way.text }}</p></div>
      </article>
    </div>
  </section>
  <section class="support-boundary page-width"><Gift :size="31" aria-hidden="true" /><div><p class="eyebrow">If you genuinely want to</p><h2>Nari's wishlist lives on Throne.</h2><p>Financial support never buys access, extra attention, ownership, permission to cross a boundary, or a claim on Nari's time. Ever.</p><div class="button-row"><a class="button button--emerald" :href="throneUrl" target="_blank" rel="noreferrer noopener">Visit Throne <ArrowUpRight :size="17" aria-hidden="true" /></a><a class="text-link" :href="twitchUrl" target="_blank" rel="noreferrer noopener">Or just come hang out <ArrowUpRight :size="15" aria-hidden="true" /></a></div></div></section>
</template>

<style scoped>
.support-kindness__grid--painted > article { grid-template-rows: 11.5rem 1fr; min-height: 100%; }
.ghostie-card-art { --ghostie-size: 11rem; height: 11.5rem; border-bottom: 1px solid var(--story-line); border-radius: 0; }
.support-kindness__grid--painted > article > div { min-height: 12rem; }
@media (min-width: 48rem) {
  .support-kindness__grid--painted > article { grid-template-rows: 12.5rem 1fr; }
  .ghostie-card-art { --ghostie-size: 12rem; height: 12.5rem; }
}
</style>
