<script setup lang="ts">
import { ArrowUpRight, BookOpenText, Clock3 } from "@lucide/vue";
import MediaCard from "@/components/ui/MediaCard.vue";
import SectionHeading from "@/components/ui/SectionHeading.vue";
import { featuredMoments } from "@/data/media";
import { socialLinks } from "@/data/socials";

const vods = socialLinks.find((link) => link.label === "VOD Archive");
</script>

<template>
  <section class="page-hero page-hero--simple page-width section-pad">
    <div class="page-hero__copy">
      <p class="eyebrow"><BookOpenText :size="16" aria-hidden="true" /> Story Time</p>
      <h1>Moments worth keeping after the stream ends.</h1>
      <p class="page-hero__lede">A future home for Nari's chosen stories, community memories, and VOD-connected anecdotes—published intentionally, not scraped out of context.</p>
    </div>
  </section>

  <section class="section-pad page-width">
    <SectionHeading eyebrow="The current shelf" title="Three verified moments while the story archive gets its blankets." text="Each card points to Nari's own public channel and can be removed from data without editing the layout." />
    <div class="media-grid"><MediaCard v-for="moment in featuredMoments" :key="moment.id" :moment="moment" /></div>
  </section>

  <section class="story-system section-pad">
    <div class="story-system__inner page-width">
      <Clock3 :size="42" aria-hidden="true" />
      <div>
        <p class="eyebrow">Built to rotate</p>
        <h2>Story of the week, month, or whenever Nari has one worth telling.</h2>
        <p>The system is data-driven and privacy-aware. A story can carry a date, summary, optional public clip/VOD, permission note, content warning, and publish state. No private anecdote becomes permanent indexed content by accident.</p>
        <a v-if="vods" class="text-link" :href="vods.url" target="_blank" rel="noreferrer noopener">Browse the public VOD archive <ArrowUpRight :size="16" aria-hidden="true" /></a>
      </div>
    </div>
  </section>
</template>
