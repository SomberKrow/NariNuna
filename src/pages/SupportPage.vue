<script setup lang="ts">
import { ArrowUpRight, Eye, Gift, Heart, Share2 } from "@lucide/vue";
import { ghostieArtwork, nariArtwork, officialEmotes } from "@/data/artwork";
import { throneUrl, twitchUrl } from "@/data/socials";

const ways = [
  { icon: Eye, art: officialEmotes.comfy, title: "Just be here", text: "Watch, lurk, laugh, or take a break. You never need to perform to deserve your place." },
  { icon: Share2, art: officialEmotes.uwu, title: "Share a favorite moment", text: "Send a clip to somebody who needs a laugh. Genuine little moments mean a lot." },
  { icon: Heart, art: officialEmotes.shy, title: "Be good to the room", text: "Kindness, respect, and healthy boundaries help everyone in the Haven breathe." }
];
</script>

<template>
  <section class="support-welcome page-width">
    <img :src="nariArtwork.cozy" width="390" height="390" alt="Nari's genuine cozy character artwork, smiling over a warm mug" fetchpriority="high" />
    <div><p class="eyebrow"><Heart :size="15" aria-hidden="true" /> A gentle reminder from your big sister</p><h1>Your presence<br /><em>already counts.</em></h1><p>You matter here whether you spend money or not. Laughing, learning, lurking, checking in, and simply being kind are all real support.</p></div>
    <img class="support-welcome__ghostie" :src="ghostieArtwork.heart" width="150" height="150" alt="" aria-hidden="true" loading="lazy" />
  </section>

  <section class="support-kindness"><div class="page-width section-pad"><header class="world-heading"><p class="eyebrow">The things that cost absolutely nothing</p><h2>These are the big ones.</h2></header><div class="support-kindness__grid"><article v-for="way in ways" :key="way.title"><img :src="way.art" width="120" height="120" alt="" loading="lazy" /><component :is="way.icon" :size="18" aria-hidden="true" /><h3>{{ way.title }}</h3><p>{{ way.text }}</p></article></div></div></section>

  <section class="support-boundary page-width"><Gift :size="31" aria-hidden="true" /><div><p class="eyebrow">If you genuinely want to</p><h2>Nari's wishlist lives on Throne.</h2><p>Financial support never buys access, extra attention, ownership, permission to cross a boundary, or a claim on Nari's time. Ever.</p><div class="button-row"><a class="button button--emerald" :href="throneUrl" target="_blank" rel="noreferrer noopener">Visit Throne <ArrowUpRight :size="17" aria-hidden="true" /></a><a class="text-link" :href="twitchUrl" target="_blank" rel="noreferrer noopener">Or just come hang out <ArrowUpRight :size="15" aria-hidden="true" /></a></div></div></section>
</template>
