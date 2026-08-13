<script setup lang="ts">
import { ArrowUpRight, MessageCircle, Radio, Smile, VolumeX } from "@lucide/vue";
import MediaCard from "@/components/ui/MediaCard.vue";
import SectionHeading from "@/components/ui/SectionHeading.vue";
import { featuredMoments } from "@/data/media";
import { socialLinks, twitchUrl } from "@/data/socials";

const youtube = socialLinks.find((link) => link.label === "YouTube");
const vods = socialLinks.find((link) => link.label === "VOD Archive");
</script>

<template>
  <section class="page-hero page-hero--stream page-width section-pad">
    <div class="page-hero__copy">
      <p class="eyebrow"><Radio :size="16" aria-hidden="true" /> The stream room</p>
      <h1>Come for the game.<br /><em>Stay for the yap.</em></h1>
      <p class="page-hero__lede">Nari's streams are equal parts playful chaos, honest reactions, big-sister warmth, community timing, and plans that survive contact with absolutely nothing.</p>
      <div class="button-row">
        <a class="button button--ember" :href="twitchUrl" target="_blank" rel="noreferrer noopener">Watch on Twitch <ArrowUpRight :size="18" aria-hidden="true" /></a>
        <a v-if="vods" class="button button--outline" :href="vods.url" target="_blank" rel="noreferrer noopener">Browse VODs <ArrowUpRight :size="18" aria-hidden="true" /></a>
      </div>
    </div>
    <div class="stream-signal" aria-label="What to expect in a Nari stream">
      <div><MessageCircle :size="24" aria-hidden="true" /><strong>Chat is part of the room</strong><span>Conversation, call-backs, and shared jokes.</span></div>
      <div><Smile :size="24" aria-hidden="true" /><strong>Failure is content</strong><span>Panic and laughter are allowed to be the point.</span></div>
      <div><VolumeX :size="24" aria-hidden="true" /><strong>No ambush audio here</strong><span>The website never autoplays a stream.</span></div>
    </div>
  </section>

  <section class="section-pad page-width">
    <SectionHeading eyebrow="Start with a moment" title="A fast way to understand the energy." text="These links open on Nari's own channel. No tracker-heavy feed is loaded into the page." />
    <div class="media-grid"><MediaCard v-for="moment in featuredMoments" :key="moment.id" :moment="moment" /></div>
  </section>

  <section class="stream-map section-pad">
    <div class="stream-map__inner page-width">
      <div>
        <p class="eyebrow">The content map</p>
        <h2>Games are the stage, not the whole show.</h2>
        <p>Public content currently spans funny gameplay, reactions, Just Chatting energy, nail-supply and nail-art content, vlogs, making, and community game nights. The site uses curated moments instead of pretending every upload suits every visitor.</p>
      </div>
      <ul>
        <li><strong>Live:</strong> Twitch is the real-time room.</li>
        <li><strong>Highlights:</strong> Main YouTube keeps the quick, chosen moments.</li>
        <li><strong>Long-form:</strong> The VOD channel contains archives, including adult-marked entries that remain opt-in.</li>
      </ul>
      <a v-if="youtube" class="button button--soft" :href="youtube.url" target="_blank" rel="noreferrer noopener">Open Nari's YouTube <ArrowUpRight :size="18" aria-hidden="true" /></a>
    </div>
  </section>

  <section class="schedule-hold page-width section-pad">
    <img src="/media/generated/ghostie-256.webp" width="180" height="180" alt="A Ghostie holds an empty calendar card" loading="lazy" />
    <div>
      <p class="eyebrow">Schedule</p>
      <h2>No fake clock on the wall.</h2>
      <p>A recurring schedule has not been approved for the website. Until Nari provides one, Twitch notifications and current social updates remain the accurate source.</p>
      <a class="text-link" :href="twitchUrl" target="_blank" rel="noreferrer noopener">Follow the live source <ArrowUpRight :size="16" aria-hidden="true" /></a>
    </div>
  </section>
</template>
