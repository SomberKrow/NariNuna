<script setup lang="ts">
import { heroStyle } from "@/data/artworkDelivery";
import { ArrowRight, Eye, Gamepad2, Heart, MoonStar, Paintbrush, Shield, Sparkles } from "@lucide/vue";
import GhostieArt, { type GhostieArtVariant } from "@/components/art/GhostieArt.vue";
import { environmentArtwork } from "@/data/artwork";
import { identityPillars } from "@/data/content";

const identityVariants: GhostieArtVariant[] = ["heart", "chaotic", "nailTech"];
const identityCards = identityPillars.map((pillar, index) => ({ ...pillar, ghostie: identityVariants[index] }));
</script>

<template>
  <section class="character-intro character-intro--storybook character-intro--integrated page-width responsive-hero" :style="heroStyle(environmentArtwork.meetNari)">
    <div class="character-intro__copy">
      <p class="eyebrow"><Sparkles :size="16" aria-hidden="true" /> Chapter one · the girl behind the door</p>
      <h1>Hi, I'm <em>Nari.</em></h1>
      <p class="character-intro__subtitle">Big-sister energy. Artist hands. Absolutely no volume control.</p>
      <p class="character-intro__text">I love making people laugh, finding pretty things, learning as I go, and turning strangers into the kind of people who remember to check on each other.</p>
      <div class="tag-row" aria-label="Nari's creative roles">
        <span><Gamepad2 :size="16" aria-hidden="true" /> VTuber & gamer</span>
        <span><Paintbrush :size="16" aria-hidden="true" /> Self-taught nail artist</span>
        <span><Heart :size="16" aria-hidden="true" /> Protective big sister</span>
      </div>
      <a class="button button--ember" href="/haven/">Come see the Haven <ArrowRight :size="18" aria-hidden="true" /></a>
    </div>
  </section>

  <section class="identity-rooms page-width section-pad">
    <header class="world-heading"><p class="eyebrow">One Nari, three familiar corners</p><h2>The warmth, the chaos, and the craft all belong together.</h2></header>
    <div class="identity-rooms__grid identity-rooms__grid--painted">
      <article v-for="(card, index) in identityCards" :key="card.title" :class="`identity-rooms__fragment identity-rooms__fragment--${index + 1}`">
        <GhostieArt class="ghostie-card-art" :sizes="index === 0 ? '(min-width: 48rem) 208px, 128px' : '(min-width: 48rem) 136px, 128px'" :variant="card.ghostie" />
        <div><p class="eyebrow">{{ card.eyebrow }}</p><h3>{{ card.title }}</h3><p>{{ card.text }}</p></div>
      </article>
    </div>
  </section>

  <section class="nari-promise nari-promise--storybook page-width section-pad">
    <GhostieArt class="nari-promise__ghostie" sizes="(min-width: 48rem) 352px, 288px" variant="protective" :decorative="false" label="A Nari Nuna Ghostie holding a heart shield, representing warmth with strong boundaries" />
    <div class="nari-promise__copy">
      <p class="eyebrow"><Shield :size="15" aria-hidden="true" /> Sweet doesn't mean spineless</p>
      <h2>We take care of our people here.</h2>
      <p>The jokes can be loud and the chaos can be legendary. But nobody has to earn basic respect, and nobody gets to mistake kindness for permission to cross a boundary.</p>
      <div class="nari-promise__details">
        <span><Eye :size="18" aria-hidden="true" /><strong>Look for the emerald.</strong> Her bright green eyes stay one of the little signatures that follows Nari through the whole site.</span>
        <span><MoonStar :size="18" aria-hidden="true" /><strong>Some stories stay hers.</strong> Family, heritage, sun, and moon symbolism are hers to share in her own words and timing.</span>
      </div>
      <a class="text-link" href="/haven/">See what the Haven protects <ArrowRight :size="16" aria-hidden="true" /></a>
    </div>
  </section>
</template>

<style scoped>
.identity-rooms__grid--painted {
  position: relative;
  gap: 1rem;
}
.identity-rooms__grid--painted::before {
  position: absolute;
  z-index: -1;
  inset: 1.5rem 0 auto;
  height: 1px;
  background: linear-gradient(90deg, transparent, var(--story-line) 16%, var(--story-accent) 50%, var(--story-line) 84%, transparent);
  content: "";
}
.identity-rooms__fragment {
  min-height: 0;
  grid-template-columns: 7.2rem minmax(0, 1fr);
  grid-template-rows: 1fr;
  align-items: center;
  overflow: visible;
  background: color-mix(in srgb, var(--story-surface) 86%, transparent);
  border-radius: 0.35rem;
}
.ghostie-card-art {
  --ghostie-size: 8.5rem;
  width: 8rem;
  height: 9rem;
  margin-inline-start: -0.65rem;
  border: 0;
  filter: drop-shadow(0 0.8rem 1rem rgb(15 9 14 / 18%));
}
.identity-rooms__fragment > div {
  min-height: 0;
  padding: 1.1rem 1.1rem 1.1rem 0.8rem;
  border-inline-start: 1px solid var(--story-line);
}
.identity-rooms__fragment--2 {
  margin-inline-start: clamp(0rem, 7vw, 2.5rem);
}
.identity-rooms__fragment--3 {
  margin-inline-end: clamp(0rem, 5vw, 1.75rem);
}
.nari-promise__ghostie {
  --ghostie-size: 18rem;
  min-height: 18rem;
  border: 0;
  border-radius: 0;
  background: radial-gradient(circle, color-mix(in srgb, var(--story-accent) 12%, transparent), transparent 67%);
  filter: drop-shadow(0 1rem 1.8rem rgb(15 9 14 / 16%));
  box-shadow: none;
}
@media (min-width: 48rem) {
  .identity-rooms__grid--painted {
    grid-template-columns: repeat(12, minmax(0, 1fr));
    gap: 1.25rem;
    align-items: start;
    padding-block: 1.5rem;
  }
  .identity-rooms__fragment {
    margin: 0;
  }
  .identity-rooms__grid--painted > .identity-rooms__fragment--1 {
    grid-column: 1 / 8;
    grid-row: 1 / span 2;
    grid-template-columns: minmax(10rem, 0.72fr) minmax(0, 1.28fr);
    min-height: 23rem;
  }
  .identity-rooms__grid--painted > .identity-rooms__fragment--2 {
    grid-column: 8 / 13;
    grid-row: 1;
  }
  .identity-rooms__grid--painted > .identity-rooms__fragment--3 {
    grid-column: 7 / 12;
    grid-row: 2;
  }
  .identity-rooms__fragment--1 .ghostie-card-art {
    --ghostie-size: 15rem;
    width: 13rem;
    height: 16rem;
    margin-inline-start: -1.25rem;
  }
  .identity-rooms__fragment--2 .ghostie-card-art,
  .identity-rooms__fragment--3 .ghostie-card-art {
    --ghostie-size: 9.5rem;
    width: 8.5rem;
    height: 10rem;
  }
  .identity-rooms__fragment > div {
    display: grid;
    align-content: center;
    min-height: 100%;
  }
  .nari-promise__ghostie { --ghostie-size: 22rem; height: 100%; min-height: 24rem; }
}
@media (prefers-reduced-motion: no-preference) {
  .identity-rooms__fragment:hover .ghostie-card-art { transform: translateY(-2px); }
  .ghostie-card-art { transition: transform 240ms ease; }
}
</style>
