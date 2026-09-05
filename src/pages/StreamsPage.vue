<script setup lang="ts">
import { artworkSrc, artworkSrcset, heroSources } from "@/data/artworkDelivery";
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
    <picture class="room-opening__art room-opening__art--streams">
      <source v-for="source in heroSources(environmentArtwork.streams)" :key="source.media" :media="source.media" :srcset="source.srcset" />
      <img :src="artworkSrc(environmentArtwork.streams, 1280)" width="1672" height="941" alt="Nari laughs at her hand-painted autumn streaming desk beside a little Ghostie wearing matching lavender headphones" fetchpriority="high" />
    </picture>
  </section>

  <section class="stream-hub page-width section-pad">
    <header class="world-heading"><p class="eyebrow">Two doors that are actually current</p><h2>Live there. Catch up here.</h2><p>Twitch is the live room. YouTube is where Nari's highlights, Shorts, and longer-lived creative pieces can keep breathing afterward.</p></header>
    <div class="stream-platform-grid">
      <a v-for="platform in platforms" :key="platform.title" :href="platform.href" target="_blank" rel="noreferrer noopener">
        <img :src="artworkSrc(platform.art, 256)" :srcset="artworkSrcset(platform.art)" sizes="(min-width: 64rem) 720px, (min-width: 48rem) 60vw, calc(100vw - 48px)" width="960" height="540" alt="" loading="lazy" />
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

<style scoped>
.stream-platform-grid > a {
  position: relative;
  transition:
    border-color var(--duration-fast) ease,
    transform var(--duration-fast) ease;
}
.stream-platform-grid > a:hover,
.stream-platform-grid > a:focus-visible {
  border-color: var(--story-accent);
  transform: translateY(-2px);
}
.stream-platform-grid > a:first-child::before {
  position: absolute;
  z-index: 2;
  top: 0.8rem;
  left: 0.8rem;
  padding: 0.3rem 0.5rem;
  color: var(--story-copy);
  background: color-mix(in srgb, var(--story-surface-deep) 84%, transparent);
  border: 1px solid var(--story-line);
  border-radius: 999px;
  font-family: var(--font-detail);
  font-size: 0.56rem;
  font-weight: 850;
  letter-spacing: 0.09em;
  text-transform: uppercase;
  content: "The live room";
  backdrop-filter: blur(8px);
}
.moment-shelf--final :deep(.media-card) {
  border-radius: 0.45rem;
}
@media (min-width: 48rem) {
  .stream-platform-grid {
    grid-template-columns: minmax(0, 1.35fr) minmax(15rem, 0.65fr);
    align-items: stretch;
  }
  .stream-platform-grid > a:first-child > img {
    height: clamp(18rem, 33vw, 25rem);
  }
  .stream-platform-grid > a:last-child {
    align-self: end;
  }
  .stream-platform-grid > a:last-child > img {
    height: clamp(11rem, 18vw, 14rem);
  }
  .moment-shelf--final .media-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    align-items: start;
  }
  .moment-shelf--final :deep(.media-card:first-child) {
    grid-row: span 2;
  }
  .moment-shelf--final :deep(.media-card:first-child .media-card__image) {
    aspect-ratio: 16 / 11;
  }
  .moment-shelf--final :deep(.media-card:not(:first-child) > a) {
    display: grid;
    grid-template-columns: minmax(9rem, 0.42fr) minmax(0, 0.58fr);
  }
  .moment-shelf--final :deep(.media-card:not(:first-child) .media-card__image) {
    height: 100%;
    min-height: 13rem;
    aspect-ratio: auto;
  }
}
@media (min-width: 72rem) {
  .stream-platform-grid {
    grid-template-columns: minmax(0, 1.45fr) minmax(18rem, 0.55fr);
    gap: clamp(1rem, 2.5vw, 2rem);
  }
  .moment-shelf--final .media-grid {
    grid-template-columns: minmax(0, 1.08fr) minmax(20rem, 0.92fr);
    gap: 1.2rem;
  }
}
@media (prefers-reduced-motion: reduce) {
  .stream-platform-grid > a { transition: none; }
  .stream-platform-grid > a:hover,
  .stream-platform-grid > a:focus-visible { transform: none; }
}
</style>
