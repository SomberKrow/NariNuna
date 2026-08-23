<script setup lang="ts">
import { ArrowRight, Gamepad2, Heart, Paintbrush, Sparkles } from "@lucide/vue";
import SocialDock from "@/components/ui/SocialDock.vue";
import { detailArtwork, ghostieArtwork, nariArtwork } from "@/data/artwork";
import { twitchUrl } from "@/data/socials";

const rooms = [
  { icon: Gamepad2, title: "Streams", note: "Games, giggles & glorious panic", href: "/streams/" },
  { icon: Paintbrush, title: "Nail art", note: "Tiny canvases, big creativity", href: "/nail-studio/" },
  { icon: Heart, title: "The Haven", note: "A soft place to belong", href: "/haven/" }
];
</script>

<template>
  <section class="haven-landing" aria-labelledby="landing-title">
    <div class="haven-landing__scene" aria-hidden="true"></div>
    <div class="haven-landing__veil" aria-hidden="true"></div>
    <img class="haven-landing__sprig" :src="detailArtwork.lavender" width="290" height="290" alt="" aria-hidden="true" />

    <div class="haven-landing__inner page-width">
      <div class="haven-landing__welcome">
        <p class="haven-landing__kicker"><Sparkles :size="15" aria-hidden="true" /> Come in, Ghostie.</p>
        <h1 id="landing-title">
          <span>Nari</span>
          <em>Nuna</em>
        </h1>
        <p class="haven-landing__subtitle">Your chaotic big sister on the internet.</p>
        <p class="haven-landing__intro">Games, cute nails, loud laughs, and a cozy little corner where people get to feel like people.</p>

        <SocialDock />

        <div class="haven-landing__actions">
          <a class="button button--ember" :href="twitchUrl" target="_blank" rel="noreferrer noopener">
            Come hang out
            <ArrowRight :size="17" aria-hidden="true" />
            <span class="sr-only"> on Twitch (opens in a new tab)</span>
          </a>
          <a class="haven-landing__meet" href="/meet-nari/">Meet Nari <ArrowRight :size="15" aria-hidden="true" /></a>
        </div>
      </div>

      <div class="haven-landing__portrait">
        <img
          class="haven-landing__nari"
          :src="nariArtwork.fullbody"
          width="888"
          height="2400"
          alt="Nari Nuna's actual character model, with emerald eyes, dark hair, a lavender outfit, and a fluffy purple-tipped tail"
          fetchpriority="high"
        />
        <img class="haven-landing__ghostie haven-landing__ghostie--shy" :src="ghostieArtwork.shy" width="180" height="180" alt="" loading="lazy" />
        <img class="haven-landing__ghostie haven-landing__ghostie--hello" :src="ghostieArtwork.waving" width="136" height="136" alt="" loading="lazy" />
        <div class="haven-landing__note"><Heart :size="15" aria-hidden="true" /> You already belong.</div>
      </div>
    </div>

    <nav class="haven-landing__rooms page-width" aria-label="Explore Nari's rooms">
      <a v-for="room in rooms" :key="room.href" :href="room.href">
        <component :is="room.icon" :size="18" aria-hidden="true" />
        <span><strong>{{ room.title }}</strong><small>{{ room.note }}</small></span>
        <ArrowRight :size="15" aria-hidden="true" />
      </a>
    </nav>
  </section>
</template>
