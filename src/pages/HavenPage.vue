<script setup lang="ts">
import { Heart, House, MoonStar, ShieldCheck, Users } from "@lucide/vue";
import HavenDoor from "@/components/haven/HavenDoor.vue";
import LooseFloorboard from "@/components/haven/LooseFloorboard.vue";
import SectionHeading from "@/components/ui/SectionHeading.vue";
import { communityValues } from "@/data/content";
</script>

<template>
  <section class="haven-hero page-width section-pad">
    <div class="haven-hero__copy">
      <p class="eyebrow"><House :size="16" aria-hidden="true" /> The emotional center</p>
      <h1>The Haven is not a server name.<br /><em>It is how the room behaves.</em></h1>
      <p class="page-hero__lede">Cool fall air outside. Lavender in the room. Pajamas, movies, pillow forts, loud laughter, and enough trust to let people be real without letting cruelty become the entertainment.</p>
    </div>
    <img src="/media/generated/ghostie-512.webp" width="420" height="420" alt="A lavender Ghostie welcomes visitors into the Haven" />
  </section>

  <section class="section-pad page-width">
    <SectionHeading eyebrow="The house rules, without the laminated sign" title="Kind is not the same as passive." />
    <div class="values-grid">
      <article v-for="(value, index) in communityValues" :key="value.title">
        <span>{{ String(index + 1).padStart(2, "0") }}</span>
        <h2>{{ value.title }}</h2>
        <p>{{ value.description }}</p>
      </article>
    </div>
  </section>

  <section class="found-family section-pad">
    <div class="found-family__inner page-width">
      <div>
        <p class="eyebrow">Found-family energy</p>
        <h2>Strong personalities. Shared jokes. Fierce loyalty. No borrowed anime branding.</h2>
        <p>The emotional reference is a chaotic guild that shows up for its people—not a copy of Fairy Tail's logos, marks, characters, or visual identity. The Haven earns its own symbols through Nari, the Ghosties, and the memories made here.</p>
      </div>
      <div class="found-family__signals" aria-label="Haven community principles">
        <span><Users :size="22" aria-hidden="true" /> Belonging</span>
        <span><Heart :size="22" aria-hidden="true" /> Care</span>
        <span><ShieldCheck :size="22" aria-hidden="true" /> Boundaries</span>
        <span><MoonStar :size="22" aria-hidden="true" /> Room to be strange</span>
      </div>
    </div>
  </section>

  <div class="page-width section-pad"><HavenDoor /></div>
  <div class="page-width"><LooseFloorboard /></div>
</template>
