<script setup lang="ts">
import { ArrowRight, Eye, Gamepad2, Heart, MoonStar, Paintbrush, Shield, Sparkles } from "@lucide/vue";
import { environmentArtwork, storybookPostcards } from "@/data/artwork";
import { identityPillars } from "@/data/content";

const identityCards = identityPillars.map((pillar, index) => ({
  ...pillar,
  art: [storybookPostcards.haven, storybookPostcards.streams, storybookPostcards.nails][index]
}));
</script>

<template>
  <section
    class="character-intro character-intro--storybook character-intro--integrated page-width"
    :style="{ '--chapter-painting': `url('${environmentArtwork.meetNari}')` }"
  >
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
    <header class="world-heading">
      <p class="eyebrow">One Nari, three familiar corners</p>
      <h2>The warmth, the chaos, and the craft all belong together.</h2>
    </header>
    <div class="identity-rooms__grid identity-rooms__grid--painted">
      <article v-for="card in identityCards" :key="card.title">
        <img :src="card.art" width="640" height="360" alt="" loading="lazy" />
        <div>
          <p class="eyebrow">{{ card.eyebrow }}</p>
          <h3>{{ card.title }}</h3>
          <p>{{ card.text }}</p>
        </div>
      </article>
    </div>
  </section>

  <section class="nari-promise nari-promise--storybook page-width section-pad">
    <figure class="nari-promise__art">
      <img :src="storybookPostcards.meetNari" width="960" height="540" alt="Painted Meet Nari room with Nari and the Haven's soft storybook atmosphere" loading="lazy" />
      <figcaption>Same Haven. A little closer to Nari.</figcaption>
    </figure>
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
