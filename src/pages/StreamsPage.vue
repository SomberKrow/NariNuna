<script setup lang="ts">
import { ArrowUpRight, Gamepad2, MessageCircle, Radio, Sparkles, Video } from "@lucide/vue";
import MediaCard from "@/components/ui/MediaCard.vue";
import { environmentArtwork, storybookPostcards } from "@/data/artwork";
import { featuredMoments } from "@/data/media";
import { socialLinks, twitchUrl } from "@/data/socials";

const youtube = socialLinks.find((link) => link.label === "YouTube");
const platforms = [
  {
    title: "Live on Twitch",
    note: "The full room: games, chat, panic, tangents, and whatever happens next.",
    art: storybookPostcards.streams,
    href: twitchUrl,
    action: "Open Twitch",
    icon: Radio
  },
  ...(youtube
    ? [{
        title: "Catch the good bits on YouTube",
        note: "Highlights, Shorts, nail content, and the moments worth keeping after stream ends.",
        art: storybookPostcards.stories,
        href: youtube.url,
        action: "Open YouTube",
        icon: Video
      }]
    : [])
];
</script>

<template>
  <section class="room-opening room-opening--streams page-width">
    <div class="room-opening__copy">
      <p class="eyebrow"><Radio :size="16" aria-hidden="true" /> Chapter two · somewhere after midnight</p>
      <h1>Come for the game.<br /><em>Stay for the yap.</em></h1>
      <p>Expect cozy chaos, wildly unnecessary panic, affectionate bullying, and a chat that somehow becomes half the show.</p>
      <div class="button-row">
        <a class="button button--ember" :href="twitchUrl" target="_blank" rel="noreferrer noopener">Watch live on Twitch <Radio :size="17" aria-hidden="true" /><span class="sr-only"> (opens in a new tab)</span></a>
        <a v-if="youtube" class="button button--outline" :href="youtube.url" target="_blank" rel="noreferrer noopener">Watch Nari on YouTube <Video :size="18" aria-hidden="true" /><span class="sr-only"> (opens in a new tab)</span></a>
      </div>
      <div class="room-opening__signals"><span><MessageCircle :size="15" aria-hidden="true" /> Chat welcome</span><span><Gamepad2 :size="15" aria-hidden="true" /> Plans optional</span></div>
    </div>
    <div class="room-opening__art room-opening__art--streams">
      <img :src="environmentArtwork.streams" width="1672" height="941" alt="Nari laughs at her hand-painted autumn streaming desk beside a little Ghostie wearing matching lavender headphones" fetchpriority="high" />
    </div>
  </section>

  <section class="stream-hub page-width section-pad">
    <header class="world-heading"><p class="eyebrow">Two doors that are actually current</p><h2>Live there. Catch up here.</h2><p>Twitch is the live room. YouTube is where Nari's highlights, Shorts, and longer-lived creative pieces can keep breathing afterward.</p></header>
    <div class="stream-platform-grid">
      <a v-for="platform in platforms" :key="platform.title" :href="platform.href" target="_blank" rel="noreferrer noopener">
        <img :src="platform.art" width="960" height="540" alt="" loading="lazy" />
        <div>
          <component :is="platform.icon" :size="22" aria-hidden="true" />
          <span><strong>{{ platform.title }}</strong><small>{{ platform.note }}</small></span>
          <ArrowUpRight :size="19" aria-hidden="true" />
        </div>
        <span class="sr-only">{{ platform.action }} (opens in a new tab)</span>
      </a>
    </div>
    <div class="stream-status-note"><Sparkles :size="20" aria-hidden="true" /><div><strong>No pretend live schedule.</strong><p>For current stream times, check Twitch or Nari's active socials. The old VOD archive is no longer treated as an active destination.</p></div></div>
  </section>

  <section class="moment-shelf moment-shelf--final page-width section-pad">
    <header class="world-heading"><p class="eyebrow"><Sparkles :size="15" aria-hidden="true" /> Start with the good stuff</p><h2>A few actual Nari moments.</h2><p>Chosen from Nari's own public channel. Nothing autoplays or sneaks into your speakers.</p></header>
    <div class="media-grid"><MediaCard v-for="moment in featuredMoments" :key="moment.id" :moment="moment" /></div>
  </section>
</template>
