<script setup lang="ts">
import { ArrowRight, BookOpen, FlaskConical, Heart, Images, Paintbrush, Sparkles } from "@lucide/vue";
import { environmentArtwork, ghostieArtwork, storybookPostcards } from "@/data/artwork";

const studioPieces = [
  {
    icon: Images,
    title: "Her real work",
    text: "Nari's own sets and photographs belong here when she chooses which ones to share.",
    art: storybookPostcards.nails,
    alt: "Painted view of Nari's warm autumn nail desk"
  },
  {
    icon: Paintbrush,
    title: "The fun part",
    text: "Color stories, tiny details, glitter experiments, and the occasional wonderful accident.",
    art: ghostieArtwork.nails,
    alt: "Storybook Ghostie carrying a lavender nail-polish bottle"
  },
  {
    icon: BookOpen,
    title: "What she's learning",
    text: "Honest little lessons from a self-taught artist figuring things out as she goes.",
    art: environmentArtwork.nails,
    alt: "Hand-painted nail atelier filled with polish, tools, and warm autumn light"
  }
];
</script>

<template>
  <section class="studio-opening">
    <div class="studio-opening__backdrop" aria-hidden="true" :style="{ backgroundImage: `url('${environmentArtwork.nails}')` }"></div>
    <div class="studio-opening__inner page-width">
      <div>
        <p class="eyebrow"><Paintbrush :size="16" aria-hidden="true" /> Chapter three · her favorite little desk</p>
        <h1>Tiny canvases.<br /><em>Big Nari energy.</em></h1>
        <p>Pretty colors, careful little details, and a self-taught creative who genuinely loves showing people what she's figuring out.</p>
        <div class="tag-row"><span><Heart :size="15" aria-hidden="true" /> Made with love</span><span><Sparkles :size="15" aria-hidden="true" /> Probably with glitter</span></div>
      </div>
    </div>
  </section>

  <section class="studio-notes page-width section-pad">
    <header class="world-heading"><p class="eyebrow">A proper creative room</p><h2>Polish, practice, and doing it her way.</h2></header>
    <div class="studio-notes__grid studio-notes__grid--painted">
      <article v-for="piece in studioPieces" :key="piece.title">
        <img :src="piece.art" width="640" height="360" :alt="piece.alt" loading="lazy" />
        <div>
          <component :is="piece.icon" :size="20" aria-hidden="true" />
          <h3>{{ piece.title }}</h3>
          <p>{{ piece.text }}</p>
        </div>
      </article>
    </div>

    <div class="studio-gallery-note">
      <img :src="storybookPostcards.nails" width="960" height="540" alt="Painted detail of Nari's nail workspace while the real portfolio is being selected" loading="lazy" />
      <div><p class="eyebrow">Her actual work, or nothing</p><h2>The portfolio opens when Nari picks the sets.</h2><p>No stock nails. No generated hands. No borrowing somebody else's manicure to make the page look finished. Until her approved photos are ready, the studio itself carries the mood.</p></div>
    </div>
  </section>

  <section class="studio-boundary page-width">
    <FlaskConical :size="30" aria-hidden="true" />
    <div><p class="eyebrow">Just so we're clear</p><h2>A creative desk, not a salon.</h2><p>Nari's nail work is self-taught and done on herself. This space is about art, learning, and enjoying the process—not services, bookings, medical advice, or invented credentials.</p><a class="text-link" href="/resources/">Visit the resource shelf <ArrowRight :size="16" aria-hidden="true" /></a></div>
  </section>
</template>
