<script setup lang="ts">
import { ArrowUpRight, Eye, Gift, Heart, Share2 } from "@lucide/vue";
import { throneUrl, twitchUrl } from "@/data/socials";

const ways = [
  { icon: Eye, title: "Be there", text: "Watch when you want, lurk when you need, and enjoy the room without performing for it." },
  { icon: Share2, title: "Share something you loved", text: "A clip sent to the right person can matter more than any algorithmic ritual." },
  { icon: Heart, title: "Treat the room well", text: "Kindness, respect, and healthy boundaries are real support for Nari and every Ghostie." }
];
</script>

<template>
  <section class="support-hero page-width section-pad">
    <img src="/media/generated/ghostie-512.webp" width="360" height="360" alt="A grateful lavender Ghostie holds its hands to its heart" />
    <div>
      <p class="eyebrow">Your presence is enough</p>
      <h1>Support is welcome.<br /><em>It is never a debt.</em></h1>
      <p class="page-hero__lede">You matter in the Haven whether you spend money or not. Watching, sharing, laughing, learning, lurking, and simply being kind are all real forms of support.</p>
    </div>
  </section>

  <section class="support-promise section-pad">
    <div class="support-promise__inner page-width">
      <Gift :size="38" aria-hidden="true" />
      <blockquote>Financial support does not create ownership, obligation, control over Nari's time, or special permission to cross her boundaries.</blockquote>
    </div>
  </section>

  <section class="section-pad page-width">
    <p class="eyebrow">The free ways count</p>
    <div class="support-grid">
      <article v-for="way in ways" :key="way.title">
        <component :is="way.icon" :size="28" aria-hidden="true" />
        <h2>{{ way.title }}</h2>
        <p>{{ way.text }}</p>
      </article>
    </div>
  </section>

  <section class="optional-support page-width section-pad">
    <div>
      <p class="eyebrow">If you genuinely want to</p>
      <h2>Nari's current public wishlist lives on Throne.</h2>
      <p>Wishlist contents and availability are managed on Throne and were not imported into this site. Review that external page on its own terms, with zero pressure from this one.</p>
      <div class="button-row">
        <a class="button button--emerald" :href="throneUrl" target="_blank" rel="noreferrer noopener">Open Throne <ArrowUpRight :size="18" aria-hidden="true" /></a>
        <a class="button button--outline" :href="twitchUrl" target="_blank" rel="noreferrer noopener">Just hang out on Twitch <ArrowUpRight :size="18" aria-hidden="true" /></a>
      </div>
    </div>
  </section>
</template>
