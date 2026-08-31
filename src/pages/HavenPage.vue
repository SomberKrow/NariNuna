<script setup lang="ts">
import { House } from "@lucide/vue";
import GhostieArt, { type GhostieArtVariant } from "@/components/art/GhostieArt.vue";
import HavenDoor from "@/components/haven/HavenDoor.vue";
import LooseFloorboard from "@/components/haven/LooseFloorboard.vue";
import { environmentArtwork } from "@/data/artwork";
import { communityValues } from "@/data/content";

const valueGhosties: GhostieArtVariant[] = ["support", "bonked", "protective", "wave"];
</script>

<template>
  <section class="haven-heart">
    <div class="haven-heart__environment" aria-hidden="true" :style="{ backgroundImage: `url('${environmentArtwork.commonRoom}')` }"></div>
    <div class="haven-heart__inner page-width">
      <div>
        <p class="eyebrow"><House :size="16" aria-hidden="true" /> Chapter four · the room that feels like exhaling</p>
        <h1>You don't have to<br /><em>earn your place here.</em></h1>
        <p>A warm little refuge for big personalities, quiet lurkers, tired people, weird jokes, and anyone who remembers that there are real humans on the other side of the screen.</p>
      </div>
    </div>
  </section>

  <section class="haven-values page-width section-pad">
    <header class="world-heading world-heading--center"><p class="eyebrow">What keeps the room feeling like home</p><h2>Kindness has a backbone.</h2></header>
    <div class="haven-values__grid haven-values__grid--storybook">
      <article v-for="(value, index) in communityValues" :key="value.title">
        <GhostieArt class="haven-values__ghostie" :variant="valueGhosties[index]" />
        <div class="haven-values__copy"><span>{{ String(index + 1).padStart(2, "0") }}</span><h3>{{ value.title }}</h3><p>{{ value.description }}</p></div>
      </article>
    </div>
  </section>

  <section id="haven-door" class="haven-entry page-width section-pad">
    <HavenDoor />
    <LooseFloorboard />
  </section>
</template>

<style scoped>
.haven-values__grid--storybook { align-items: stretch; }
.haven-values__grid--storybook > article { grid-template-rows: 11.5rem 1fr; min-height: 100%; }
.haven-values__ghostie { --ghostie-size: 11rem; height: 11.5rem; border-bottom: 1px solid var(--story-line); border-radius: 0; }
.haven-values__copy { grid-template-rows: auto minmax(3.15rem, auto) 1fr; align-content: start; min-height: 12.5rem; }
.haven-values__copy > span { margin-block-end: 0.55rem; color: var(--story-accent); font-family: var(--font-detail); font-size: 0.66rem; font-weight: 850; letter-spacing: 0.12em; }
.haven-values__copy h3 { margin-block-end: 0.65rem; }
.haven-values__copy p { margin-block-end: 0; }
@media (min-width: 48rem) {
  .haven-values__grid--storybook > article { grid-template-rows: 12.5rem 1fr; }
  .haven-values__ghostie { --ghostie-size: 12rem; height: 12.5rem; }
  .haven-values__copy { min-height: 14rem; }
}
</style>
