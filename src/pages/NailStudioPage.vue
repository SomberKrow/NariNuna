<script setup lang="ts">
import { ArrowRight, BookOpen, FlaskConical, Heart, Images, Paintbrush, Sparkles } from "@lucide/vue";
import GhostieArt, { type GhostieArtVariant } from "@/components/art/GhostieArt.vue";
import { environmentArtwork, storybookPostcards } from "@/data/artwork";

const studioPieces: { icon: typeof Images; title: string; text: string; ghostie: GhostieArtVariant }[] = [
  { icon: Images, title: "Her real work", text: "Nari's own sets and photographs belong here when she chooses which ones to share.", ghostie: "sign" },
  { icon: Paintbrush, title: "The fun part", text: "Color stories, tiny details, glitter experiments, and the occasional wonderful accident.", ghostie: "floating" },
  { icon: BookOpen, title: "What she's learning", text: "Honest little lessons from a self-taught artist figuring things out as she goes.", ghostie: "study" }
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
      <article v-for="(piece, index) in studioPieces" :key="piece.title" :class="`studio-notes__fragment studio-notes__fragment--${index + 1}`">
        <GhostieArt class="ghostie-card-art" :variant="piece.ghostie" />
        <div><component :is="piece.icon" :size="20" aria-hidden="true" /><h3>{{ piece.title }}</h3><p>{{ piece.text }}</p></div>
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

<style scoped>
.studio-notes__grid--painted { position: relative; align-items: stretch; }
.studio-notes__grid--painted::before {
  position: absolute;
  z-index: -1;
  inset: 1rem 0 auto;
  height: 1px;
  background: linear-gradient(90deg, transparent, var(--story-line) 12%, var(--story-accent) 46%, var(--story-line) 84%, transparent);
  content: "";
}
.studio-notes__fragment {
  min-height: 0;
  grid-template-columns: 7.5rem minmax(0, 1fr);
  grid-template-rows: 1fr;
  align-items: center;
  overflow: visible;
  border-radius: 0.35rem;
}
.ghostie-card-art {
  --ghostie-size: 8.5rem;
  width: 8rem;
  height: 9.5rem;
  margin-inline-start: -0.55rem;
  border: 0;
  filter: drop-shadow(0 0.8rem 1rem rgb(15 9 14 / 17%));
}
.studio-notes__fragment > div {
  min-height: 0;
  padding: 1.15rem 1.2rem 1.2rem 0.9rem;
  border-inline-start: 1px solid var(--story-line);
}
.studio-notes__fragment--2 { margin-inline-start: clamp(0rem, 6vw, 2rem); }
.studio-gallery-note { margin-block-start: clamp(2.75rem, 8vw, 4.75rem); }
@media (min-width: 48rem) {
  .studio-notes__grid--painted {
    grid-template-columns: repeat(12, minmax(0, 1fr));
    gap: 1.1rem;
    padding-block: 1.25rem;
  }
  .studio-notes__grid--painted > .studio-notes__fragment { margin: 0; }
  .studio-notes__grid--painted > .studio-notes__fragment--1 {
    grid-column: 1 / 7;
    grid-row: 1 / span 2;
    grid-template-columns: 1fr;
    grid-template-rows: 14rem 1fr;
  }
  .studio-notes__grid--painted > .studio-notes__fragment--2 {
    grid-column: 7 / 13;
    grid-row: 1;
  }
  .studio-notes__grid--painted > .studio-notes__fragment--3 {
    grid-column: 7 / 13;
    grid-row: 2;
  }
  .studio-notes__fragment--1 .ghostie-card-art {
    --ghostie-size: 14rem;
    width: 100%;
    height: 14rem;
    margin: -0.7rem 0 0;
  }
  .studio-notes__fragment--1 > div {
    min-height: 13rem;
    padding: 1.35rem;
    border-block-start: 1px solid var(--story-line);
    border-inline-start: 0;
  }
  .studio-gallery-note { margin-block-start: 5rem; }
}
@media (prefers-reduced-motion: no-preference) {
  .ghostie-card-art { transition: transform 240ms ease; }
  .studio-notes__fragment:hover .ghostie-card-art { transform: translateY(-2px); }
}
</style>
