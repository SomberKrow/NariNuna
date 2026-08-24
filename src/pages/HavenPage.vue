<script setup lang="ts">
import { Heart, House, MoonStar, ShieldCheck, Users } from "@lucide/vue";
import HavenDoor from "@/components/haven/HavenDoor.vue";
import LooseFloorboard from "@/components/haven/LooseFloorboard.vue";
import { environmentArtwork, ghostieArtwork } from "@/data/artwork";
import { communityValues } from "@/data/content";

const valueGhosties = [ghostieArtwork.heart, ghostieArtwork.shy, ghostieArtwork.cozy, ghostieArtwork.chaotic];
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
        <img :src="valueGhosties[index]" width="154" height="154" alt="" loading="lazy" />
        <span>{{ String(index + 1).padStart(2, "0") }}</span>
        <h3>{{ value.title }}</h3>
        <p>{{ value.description }}</p>
      </article>
    </div>
    <div class="haven-values__principles" aria-label="Haven community principles">
      <span><Users :size="20" aria-hidden="true" /> Belonging without performance</span>
      <span><Heart :size="20" aria-hidden="true" /> Care without entitlement</span>
      <span><ShieldCheck :size="20" aria-hidden="true" /> Boundaries without apology</span>
      <span><MoonStar :size="20" aria-hidden="true" /> Your own kind of weird</span>
    </div>
  </section>

  <section class="haven-entry page-width section-pad">
    <HavenDoor />
    <LooseFloorboard />
  </section>
</template>
