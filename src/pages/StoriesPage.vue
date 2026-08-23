<script setup lang="ts">
import { ArrowUpRight, BookOpenText, Clock3 } from "@lucide/vue";
import MediaCard from "@/components/ui/MediaCard.vue";
import { environmentArtwork, ghostieArtwork, officialEmotes } from "@/data/artwork";
import { featuredMoments } from "@/data/media";
import { socialLinks } from "@/data/socials";

const vods = socialLinks.find((link) => link.label === "VOD Archive");
</script>

<template>
  <section class="story-opening story-opening--painted page-width" :style="{ '--chapter-painting': `url('${environmentArtwork.stories}')` }">
    <div><p class="eyebrow"><BookOpenText :size="16" aria-hidden="true" /> Chapter seven · lanterns, blankets, one more story</p><h1>Some moments<br /><em>deserve to stay.</em></h1><p>A little shelf for Nari's favorite stories, ridiculous stream memories, and moments that still make her laugh when chat is long gone.</p></div>
    <div class="story-opening__art"><img :src="ghostieArtwork.cozy" width="340" height="340" alt="A sleepy Ghostie is tucked under a lavender blanket for story time" fetchpriority="high" /><img :src="officialEmotes.comfy" width="115" height="115" alt="Nari's official cozy emote" loading="lazy" /><img :src="officialEmotes.bonk" width="105" height="105" alt="Nari's official bonk emote" loading="lazy" /></div>
  </section>

  <section class="moment-shelf"><div class="page-width section-pad"><header class="world-heading"><p class="eyebrow">Three little pieces of the chaos</p><h2>Start with something that actually happened.</h2></header><div class="media-grid"><MediaCard v-for="moment in featuredMoments" :key="moment.id" :moment="moment" /></div></div></section>

  <section class="gentle-hold page-width"><Clock3 :size="36" aria-hidden="true" /><div><p class="eyebrow">More stories, when they're hers to tell</p><h2>Nari decides what makes the shelf.</h2><p>Nothing private gets scraped, no community memory gets published without permission, and nobody has to become content to belong.</p></div><a v-if="vods" class="text-link" :href="vods.url" target="_blank" rel="noreferrer noopener">Browse the VODs <ArrowUpRight :size="16" aria-hidden="true" /></a></section>
</template>
