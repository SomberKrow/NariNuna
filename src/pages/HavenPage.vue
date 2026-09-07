<script setup lang="ts">
import { heroStyle } from "@/data/artworkDelivery";
import { House } from "@lucide/vue";
import GhostieArt from "@/components/art/GhostieArt.vue";
import HavenDoor from "@/components/haven/HavenDoor.vue";
import LooseFloorboard from "@/components/haven/LooseFloorboard.vue";
import { environmentArtwork } from "@/data/artwork";
import { communityValues } from "@/data/content";
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

  <section class="haven-charter room-section page-width" aria-labelledby="charter-title">
    <div class="haven-charter__welcome">
      <p class="room-kicker">What keeps this place a home</p>
      <h2 id="charter-title">Kindness<br /><em>has a backbone.</em></h2>
      <GhostieArt variant="support" sizes="(min-width: 48rem) 288px, 160px" />
      <p class="room-caption">Loud laughs. Quiet corners.<br />Room to be yourself.</p>
    </div>
    <ol class="haven-charter__values">
      <li v-for="(value, index) in communityValues" :key="value.title">
        <span class="haven-charter__number" aria-hidden="true">0{{ index + 1 }}</span>
        <div><h3>{{ value.title }}</h3><p>{{ value.description }}</p></div>
      </li>
    </ol>
  </section>

  <section id="haven-door" class="haven-entry page-width section-pad">
    <HavenDoor />
    <LooseFloorboard />
  </section>
</template>

<style scoped lang="scss" src="@/styles/rooms/haven.scss"></style>
