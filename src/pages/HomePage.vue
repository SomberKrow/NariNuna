<script setup lang="ts">
import { ArrowRight, Gamepad2, Heart, MoonStar, Paintbrush, Sparkles } from "@lucide/vue";
import SocialDock from "@/components/ui/SocialDock.vue";
import { detailArtwork, storybookPostcards } from "@/data/artwork";
import { twitchUrl } from "@/data/socials";

const rooms = [
  { icon: Gamepad2, title: "The stream room", note: "Laughter comes with the furniture.", href: "/streams/", image: storybookPostcards.streams, number: "01" },
  { icon: Paintbrush, title: "The nail desk", note: "A little glitter gets everywhere.", href: "/nail-studio/", image: storybookPostcards.nails, number: "02" },
  { icon: Heart, title: "The Haven", note: "There's always room for you.", href: "/haven/", image: storybookPostcards.haven, number: "03" }
];
</script>

<template>
  <section class="haven-landing" aria-labelledby="landing-title">
    <div
      class="haven-landing__scene"
      role="img"
      aria-label="Nari, with emerald eyes, asymmetric cat-and-dog ears, lavender clothes, and her purple-tipped tail, welcomes a little Ghostie from the autumn window seat in her Haven."
    ></div>
    <div class="haven-landing__veil" aria-hidden="true"></div>
    <img class="haven-landing__sprig" :src="detailArtwork.lavender" width="290" height="290" alt="" aria-hidden="true" />
    <div class="haven-landing__margin-note" aria-hidden="true"><span>AUTUMN, AFTER HOURS</span><i></i><MoonStar :size="15" /></div>

    <div class="haven-landing__inner page-width">
      <div class="haven-landing__welcome">
        <p class="haven-landing__kicker"><Sparkles :size="15" aria-hidden="true" /> A little refuge for lovely weirdos</p>
        <h1 id="landing-title">
          <span>Nari</span>
          <em>Nuna</em>
        </h1>
        <p class="haven-landing__subtitle">Your favorite chaotic big sister.</p>
        <p class="haven-landing__intro">Somewhere between the late-night laughing, the tiny painted nails, and one more cup of cocoa, we made a place to belong.</p>

        <div class="haven-landing__divider" aria-hidden="true"><span></span><Heart :size="15" /><span></span></div>

        <SocialDock />

        <div class="haven-landing__actions">
          <a class="button button--ember" :href="twitchUrl" target="_blank" rel="noreferrer noopener">
            Come sit with us
            <ArrowRight :size="17" aria-hidden="true" />
            <span class="sr-only"> on Twitch (opens in a new tab)</span>
          </a>
          <a class="haven-landing__meet" href="/meet-nari/">Meet Nari <ArrowRight :size="15" aria-hidden="true" /></a>
        </div>
      </div>
    </div>

    <nav class="haven-landing__rooms page-width" aria-label="Explore Nari's rooms">
      <a v-for="room in rooms" :key="room.href" :href="room.href">
        <img :src="room.image" width="320" height="180" alt="" loading="lazy" />
        <span class="haven-landing__room-number">{{ room.number }}</span>
        <span class="haven-landing__room-copy"><strong>{{ room.title }}</strong><small>{{ room.note }}</small></span>
        <component :is="room.icon" :size="19" aria-hidden="true" />
      </a>
    </nav>
  </section>
</template>
