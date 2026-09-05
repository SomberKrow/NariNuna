<script setup lang="ts">
import { heroStyle } from "@/data/artworkDelivery";
import { House } from "@lucide/vue";
import GhostieArt, { type GhostieArtVariant } from "@/components/art/GhostieArt.vue";
import HavenDoor from "@/components/haven/HavenDoor.vue";
import LooseFloorboard from "@/components/haven/LooseFloorboard.vue";
import { environmentArtwork } from "@/data/artwork";
import { communityValues } from "@/data/content";

const valueGhosties: GhostieArtVariant[] = ["support", "bonked", "protective", "wave"];
</script>

<template>
  <section class="haven-heart responsive-hero" :style="heroStyle(environmentArtwork.commonRoom)">
    <div class="haven-heart__environment" aria-hidden="true" :style="{ backgroundImage: 'var(--responsive-hero-art)' }"></div>
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
      <article v-for="(value, index) in communityValues" :key="value.title" :class="`haven-values__fragment haven-values__fragment--${index + 1}`">
        <GhostieArt class="haven-values__ghostie" sizes="(min-width: 48rem) 120px, 112px" :variant="valueGhosties[index]" />
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
.world-heading--center { margin-inline: 0; text-align: start; }
.world-heading--center .eyebrow { justify-content: flex-start; }
.haven-values__grid--storybook { position: relative; align-items: stretch; gap: 0.9rem; }
.haven-values__grid--storybook::before {
  position: absolute;
  z-index: -1;
  top: 0;
  bottom: 0;
  left: 2.4rem;
  width: 1px;
  background: linear-gradient(180deg, transparent, var(--story-line) 8% 92%, transparent);
  content: "";
}
.haven-values__fragment {
  min-height: 0;
  grid-template-columns: 6rem minmax(0, 1fr);
  grid-template-rows: 1fr;
  align-items: center;
  overflow: visible;
  background: color-mix(in srgb, var(--story-surface) 88%, transparent);
  border-radius: 0.35rem;
}
.haven-values__ghostie {
  --ghostie-size: 7.25rem;
  width: 7rem;
  height: 8.5rem;
  margin-inline-start: -0.55rem;
  border: 0;
  filter: drop-shadow(0 0.7rem 1rem rgb(15 9 14 / 16%));
}
.haven-values__copy { grid-template-rows: auto auto 1fr; align-content: center; min-height: 0; padding: 1.15rem 1.15rem 1.2rem; border-inline-start: 1px solid var(--story-line); }
.haven-values__copy > span { margin-block-end: 0.55rem; color: var(--story-accent); font-family: var(--font-detail); font-size: 0.66rem; font-weight: 850; letter-spacing: 0.12em; }
.haven-values__copy h3 { margin-block-end: 0.65rem; }
.haven-values__copy p { margin-block-end: 0; }
@media (min-width: 48rem) {
  .haven-values__grid--storybook {
    grid-template-columns: repeat(12, minmax(0, 1fr));
    gap: 1rem 1.2rem;
    padding-block: 1rem;
  }
  .haven-values__grid--storybook::before { top: 50%; right: 4%; bottom: auto; left: 4%; width: auto; height: 1px; }
  .haven-values__grid--storybook > .haven-values__fragment--1 { grid-column: 1 / 7; grid-row: 1; }
  .haven-values__grid--storybook > .haven-values__fragment--2 { grid-column: 7 / 13; grid-row: 1; transform: translateY(1.25rem); }
  .haven-values__grid--storybook > .haven-values__fragment--3 { grid-column: 2 / 8; grid-row: 2; }
  .haven-values__grid--storybook > .haven-values__fragment--4 { grid-column: 8 / 13; grid-row: 2; transform: translateY(1.25rem); }
  .haven-values__ghostie { --ghostie-size: 8.5rem; width: 7.5rem; height: 9.5rem; }
  .haven-values__copy { min-height: 12rem; }
}
</style>
