<script setup lang="ts">
import ResponsiveArtwork from "@/components/art/ResponsiveArtwork.vue";
import { heroSources } from "@/data/artworkDelivery";
import { ArrowUpRight, Gamepad2, MessageCircle, Radio, Video } from "@lucide/vue";
import MediaCard from "@/components/ui/MediaCard.vue";
import { environmentArtwork } from "@/data/artwork";
import { featuredMoments } from "@/data/media";
import { socialLinks, twitchUrl } from "@/data/socials";

const youtube = socialLinks.find((link) => link.label === "YouTube");
const leadMoment = featuredMoments[0];
const supportingMoments = featuredMoments.slice(1);
</script>

<template>
  <section class="room-opening room-opening--streams page-width">
    <div class="room-opening__copy">
      <p class="eyebrow"><Radio :size="16" aria-hidden="true" /> Chapter two · somewhere after midnight</p>
      <h1>Come for the game.<br /><em>Stay for the yap.</em></h1>
      <p>Expect cozy chaos, wildly unnecessary panic, affectionate bullying, and a chat that somehow becomes half the show.</p>
      <div class="button-row">
        <a class="button button--ember" :href="twitchUrl" target="_blank" rel="noreferrer noopener">Watch on Twitch <Radio :size="17" aria-hidden="true" /><span class="sr-only"> (opens in a new tab)</span></a>
        <a v-if="youtube" class="button button--outline" :href="youtube.url" target="_blank" rel="noreferrer noopener">Watch Nari on YouTube <Video :size="18" aria-hidden="true" /><span class="sr-only"> (opens in a new tab)</span></a>
      </div>
      <div class="room-opening__signals"><span><MessageCircle :size="15" aria-hidden="true" /> Chat welcome</span><span><Gamepad2 :size="15" aria-hidden="true" /> Plans optional</span></div>
    </div>
    <picture class="room-opening__art room-opening__art--streams">
      <source v-for="source in heroSources(environmentArtwork.streams)" :key="source.media" :media="source.media" :srcset="source.srcset" />
      <ResponsiveArtwork :fallback-width="1280" sizes="100vw" loading="eager" :artwork="environmentArtwork.streams" width="1672" height="941" alt="Nari laughs at her hand-painted autumn streaming desk beside a little Ghostie wearing matching lavender headphones" fetchpriority="high" />
    </picture>
  </section>

  <section class="clip-desk room-section page-width" aria-labelledby="moments-title">
    <header class="room-heading"><div><p class="room-kicker">A taste of the room</p><h2 id="moments-title">The bits we keep<br /><em>coming back to.</em></h2></div><p>Games, tangents, and plans that lasted about three seconds.</p></header>
    <div class="clip-desk__moments">
      <MediaCard class="clip-desk__lead" :moment="leadMoment" presentation="broadcast" featured />
      <div class="clip-desk__supporting">
        <MediaCard v-for="moment in supportingMoments" :key="moment.id" :moment="moment" presentation="broadcast" />
      </div>
    </div>
    <div class="broadcast-tuning">
      <div><Radio :size="25" aria-hidden="true" /><p><strong>Want the whole evening?</strong><span>Find current stream times on Twitch and Nari's socials.</span></p></div>
      <a class="text-link" :href="twitchUrl" target="_blank" rel="noreferrer noopener">Open Twitch <ArrowUpRight :size="18" aria-hidden="true" /><span class="sr-only"> (opens in a new tab)</span></a>
      <a v-if="youtube" class="text-link" :href="youtube.url" target="_blank" rel="noreferrer noopener">More on YouTube <ArrowUpRight :size="18" aria-hidden="true" /><span class="sr-only"> (opens in a new tab)</span></a>
    </div>
    <a class="clip-desk__next text-link" href="/stories/">Open the quieter memory album <ArrowUpRight :size="17" aria-hidden="true" /></a>
  </section>
</template>

<style scoped lang="scss" src="@/styles/rooms/streams.scss"></style>
