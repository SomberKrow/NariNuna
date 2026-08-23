<script setup lang="ts">
import { ArrowRight, ArrowUpRight, Gamepad2, MessageCircle, Radio, Sparkles, Video } from "@lucide/vue";
import MediaCard from "@/components/ui/MediaCard.vue";
import { environmentArtwork, ghostieArtwork, officialEmotes } from "@/data/artwork";
import { featuredMoments } from "@/data/media";
import { socialLinks, twitchUrl } from "@/data/socials";

const youtube = socialLinks.find((link) => link.label === "YouTube");
const vods = socialLinks.find((link) => link.label === "VOD Archive");
const streamDoors = [
  { title: "Clips", note: "Tiny disasters, excellent timing.", art: "/media/streams/streams-card-clips.svg", href: youtube?.url ?? twitchUrl },
  { title: "Highlights", note: "The good bits, with context.", art: "/media/streams/streams-card-highlights.svg", href: youtube?.url ?? twitchUrl },
  { title: "VODs", note: "Settle in for the long version.", art: "/media/streams/streams-card-vods.svg", href: vods?.url ?? twitchUrl }
];
</script>

<template>
  <section class="room-opening room-opening--streams page-width">
    <div class="room-opening__copy">
      <p class="eyebrow"><Radio :size="16" aria-hidden="true" /> The stream room</p>
      <h1>Come for the game.<br /><em>Stay for the yap.</em></h1>
      <p>Expect cozy chaos, wildly unnecessary panic, affectionate bullying, and a chat that somehow becomes half the show.</p>
      <div class="button-row">
        <a class="button button--ember" :href="twitchUrl" target="_blank" rel="noreferrer noopener">Hang out on Twitch <ArrowUpRight :size="17" aria-hidden="true" /><span class="sr-only"> (opens in a new tab)</span></a>
        <a v-if="vods" class="button button--outline" :href="vods.url" target="_blank" rel="noreferrer noopener">Find the VODs <ArrowUpRight :size="17" aria-hidden="true" /><span class="sr-only"> (opens in a new tab)</span></a>
      </div>
      <div class="room-opening__signals"><span><MessageCircle :size="15" aria-hidden="true" /> Chat welcome</span><span><Gamepad2 :size="15" aria-hidden="true" /> Plans optional</span></div>
    </div>
    <div class="room-opening__art room-opening__art--streams">
      <img :src="environmentArtwork.streams" width="1600" height="900" alt="Illustrated cozy streaming desk with two monitors, string lights, and a Ghostie in headphones" fetchpriority="high" />
      <img class="room-opening__companion" :src="officialEmotes.panic" width="130" height="130" alt="Nari's official panic emote" loading="lazy" />
    </div>
  </section>

  <section class="stream-door-section page-width section-pad">
    <header class="world-heading"><p class="eyebrow"><Video :size="15" aria-hidden="true" /> Pick your kind of chaos</p><h2>Three ways into the stream room.</h2></header>
    <div class="stream-door-grid">
      <a v-for="door in streamDoors" :key="door.title" :href="door.href" target="_blank" rel="noreferrer noopener">
        <img :src="door.art" width="960" height="540" alt="" loading="lazy" />
        <div><span><strong>{{ door.title }}</strong><small>{{ door.note }}</small></span><ArrowRight :size="19" aria-hidden="true" /></div>
        <span class="sr-only"> (opens in a new tab)</span>
      </a>
    </div>
  </section>

  <section class="moment-shelf">
    <div class="page-width section-pad">
      <header class="world-heading"><p class="eyebrow"><Sparkles :size="15" aria-hidden="true" /> Start with the good stuff</p><h2>A few actual Nari moments.</h2><p>Chosen from Nari's own public channel. Nothing autoplays or sneaks into your speakers.</p></header>
      <div class="media-grid"><MediaCard v-for="moment in featuredMoments" :key="moment.id" :moment="moment" /></div>
    </div>
  </section>

  <section class="gentle-hold page-width">
    <img :src="ghostieArtwork.cozy" width="170" height="170" alt="A cozy Ghostie settles in with a blanket" loading="lazy" />
    <div><p class="eyebrow">When's the next stream?</p><h2>No made-up schedule here.</h2><p>Check Nari's Twitch and current socials for the real updates. The Ghosties refuse to invent a clock.</p></div>
    <a class="text-link" :href="twitchUrl" target="_blank" rel="noreferrer noopener">Check Twitch <ArrowUpRight :size="16" aria-hidden="true" /></a>
  </section>
</template>
