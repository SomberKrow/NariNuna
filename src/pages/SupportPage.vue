<script setup lang="ts">
import { ArrowUpRight, Eye, Gift, Heart, Share2 } from "@lucide/vue";
import { environmentArtwork } from "@/data/artwork";
import { throneUrl, twitchUrl } from "@/data/socials";

const ways = [
  { icon: Eye, title: "Just be here", text: "Watch, lurk, laugh, or take a break. You never need to perform to deserve your place." },
  { icon: Share2, title: "Share a favorite moment", text: "Send a clip to somebody who needs a laugh. Genuine little moments mean a lot." },
  { icon: Heart, title: "Be good to the room", text: "Kindness, respect, and healthy boundaries help everyone in the Haven breathe." }
];
</script>

<template>
  <section class="support-welcome support-welcome--painted page-width" :style="{ '--chapter-painting': `url('${environmentArtwork.commonRoom}')` }">
    <div><p class="eyebrow"><Heart :size="15" aria-hidden="true" /> A gentle reminder, before anything else</p><h1>Your presence<br /><em>already counts.</em></h1><p>You matter here whether you spend money or not. Laughing, learning, lurking, checking in, and simply being kind are all real support.</p></div>
  </section>

  <section class="support-kindness"><div class="page-width section-pad"><header class="world-heading"><p class="eyebrow">The things that cost absolutely nothing</p><h2>These are the big ones.</h2></header><div class="support-kindness__grid"><article v-for="way in ways" :key="way.title"><component :is="way.icon" :size="22" aria-hidden="true" /><h3>{{ way.title }}</h3><p>{{ way.text }}</p></article></div></div></section>

  <section class="support-boundary page-width"><Gift :size="31" aria-hidden="true" /><div><p class="eyebrow">If you genuinely want to</p><h2>Nari's wishlist lives on Throne.</h2><p>Financial support never buys access, extra attention, ownership, permission to cross a boundary, or a claim on Nari's time. Ever.</p><div class="button-row"><a class="button button--emerald" :href="throneUrl" target="_blank" rel="noreferrer noopener">Visit Throne <ArrowUpRight :size="17" aria-hidden="true" /></a><a class="text-link" :href="twitchUrl" target="_blank" rel="noreferrer noopener">Or just come hang out <ArrowUpRight :size="15" aria-hidden="true" /></a></div></div></section>
</template>
