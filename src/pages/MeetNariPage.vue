<script setup lang="ts">
import { ArrowRight, Eye, Gamepad2, Heart, MoonStar, Paintbrush, Shield, Sparkles } from "@lucide/vue";
import GhostieIllustration, { type GhostieVariant } from "@/components/art/GhostieIllustration.vue";
import { environmentArtwork } from "@/data/artwork";
import { identityPillars } from "@/data/content";

const identityVariants: GhostieVariant[] = ["guardian", "chaos", "artist"];
const identityCards = identityPillars.map((pillar, index) => ({ ...pillar, ghostie: identityVariants[index] }));
</script>

<template>
  <section class="character-intro character-intro--storybook character-intro--integrated page-width" :style="{ '--chapter-painting': `url('${environmentArtwork.meetNari}')` }">
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
      <article v-for="card in identityCards" :key="card.title">
        <GhostieIllustration class="ghostie-card-art" :variant="card.ghostie" />
        <div><p class="eyebrow">{{ card.eyebrow }}</p><h3>{{ card.title }}</h3><p>{{ card.text }}</p></div>
      </article>
    </div>
  </section>

  <section class="nari-promise nari-promise--storybook page-width section-pad">
    <GhostieIllustration class="nari-promise__ghostie" variant="lantern" :decorative="false" label="A Haven Ghostie carrying an emerald lantern, representing Nari's warmth and boundaries" />
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
.identity-rooms__grid--painted > article { grid-template-rows: 12rem 1fr; min-height: 100%; }
.ghostie-card-art { height: 12rem; border-bottom: 1px solid var(--story-line); border-radius: 0; }
.identity-rooms__grid--painted > article > div { min-height: 12.5rem; }
.nari-promise__ghostie { min-height: 18rem; border: 1px solid var(--story-line); border-radius: 0.7rem; box-shadow: 0 0.8rem 2.1rem rgb(15 9 14 / 14%); }
@media (min-width: 48rem) {
  .identity-rooms__grid--painted > article { grid-template-rows: 13rem 1fr; }
  .ghostie-card-art { height: 13rem; }
  .identity-rooms__grid--painted > article > div { min-height: 14rem; }
  .nari-promise__ghostie { height: 100%; min-height: 24rem; }
}
</style>
