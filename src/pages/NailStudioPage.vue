<script setup lang="ts">
import { ArrowRight, BookOpen, FlaskConical, Heart, Images, Paintbrush, Sparkles } from "@lucide/vue";
import { environmentArtwork, ghostieArtwork, officialEmotes } from "@/data/artwork";

const studioPieces = [
  { icon: Images, title: "Her real work", text: "Nari's own sets and photographs belong here when she chooses which ones to share.", art: "/media/nails/nails-polish-bottle-illustration.svg" },
  { icon: Paintbrush, title: "The fun part", text: "Color stories, tiny details, glitter experiments, and the occasional wonderful accident.", art: "/media/nails/nails-polish-ghostie.svg" },
  { icon: BookOpen, title: "What she's learning", text: "Honest little lessons from a self-taught artist figuring things out as she goes.", art: "/media/nails/nails-manicure-station-vignette.svg" }
];
</script>

<template>
  <section class="studio-opening">
    <div class="studio-opening__backdrop" aria-hidden="true" :style="{ backgroundImage: `url('${environmentArtwork.nails}')` }"></div>
    <div class="studio-opening__inner page-width">
      <div>
        <p class="eyebrow"><Paintbrush :size="16" aria-hidden="true" /> Welcome to the nail desk</p>
        <h1>Tiny canvases.<br /><em>Big Nari energy.</em></h1>
        <p>Pretty colors, careful little details, and a self-taught creative who genuinely loves showing people what she's figuring out.</p>
        <div class="tag-row"><span><Heart :size="15" aria-hidden="true" /> Made with love</span><span><Sparkles :size="15" aria-hidden="true" /> Probably with glitter</span></div>
      </div>
      <img class="studio-opening__ghostie" :src="ghostieArtwork.nails" width="380" height="380" alt="An excited Ghostie paints its nails beside a collection of pink and purple polish" fetchpriority="high" />
    </div>
  </section>

  <section class="studio-notes page-width section-pad">
    <header class="world-heading"><p class="eyebrow">A proper creative room</p><h2>Polish, practice, and doing it her way.</h2></header>
    <div class="studio-notes__grid">
      <article v-for="piece in studioPieces" :key="piece.title">
        <img :src="piece.art" width="280" height="190" alt="" loading="lazy" />
        <component :is="piece.icon" :size="19" aria-hidden="true" />
        <h3>{{ piece.title }}</h3>
        <p>{{ piece.text }}</p>
      </article>
    </div>
  </section>

  <section class="honest-gallery">
    <div class="honest-gallery__inner page-width">
      <img src="/media/states/state-empty-gallery.svg" width="320" height="270" alt="A Ghostie keeps the nail-gallery frames warm until Nari chooses real photographs" loading="lazy" />
      <div><p class="eyebrow">The gallery is getting its top coat</p><h2>Her actual work, or nothing.</h2><p>No stock nails. No generated hands. No pretending someone else's manicure is Nari's. Her own approved photos will live here when they're ready.</p></div>
      <img class="honest-gallery__emote" :src="officialEmotes.comfy" width="105" height="105" alt="" aria-hidden="true" loading="lazy" />
    </div>
  </section>

  <section class="studio-boundary page-width">
    <FlaskConical :size="30" aria-hidden="true" />
    <div><p class="eyebrow">Just so we're clear</p><h2>A creative desk, not a salon.</h2><p>Nari's nail work is self-taught and done on herself. This space is about art, learning, and enjoying the process—not services, bookings, medical advice, or invented credentials.</p><a class="text-link" href="/resources/">Visit the resource shelf <ArrowRight :size="16" aria-hidden="true" /></a></div>
  </section>
</template>
