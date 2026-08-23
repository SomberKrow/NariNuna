<script setup lang="ts">
import { ArrowRight, Eye, Gamepad2, Heart, MoonStar, Paintbrush, Shield, Sparkles } from "@lucide/vue";
import { detailArtwork, ghostieArtwork, nariArtwork, officialEmotes } from "@/data/artwork";
import { identityPillars } from "@/data/content";

const expressions = [
  { image: officialEmotes.comfy, label: "Comfy" },
  { image: officialEmotes.panic, label: "Panic" },
  { image: officialEmotes.bonk, label: "Bonk" },
  { image: officialEmotes.shy, label: "Shy" },
  { image: officialEmotes.fire, label: "Chaos" }
];
</script>

<template>
  <section class="character-intro page-width">
    <div class="character-intro__copy">
      <p class="eyebrow"><Sparkles :size="16" aria-hidden="true" /> Your host, your hype woman, your bad influence</p>
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

    <div class="character-intro__portrait">
      <img class="character-intro__lavender" :src="detailArtwork.lavender" width="260" height="260" alt="" aria-hidden="true" />
      <img
        class="character-intro__model"
        :src="nariArtwork.portrait"
        width="883"
        height="1360"
        alt="Nari's real character model with emerald eyes, brown hair tipped in purple, and her lavender-and-black outfit"
        fetchpriority="high"
      />
      <img class="character-intro__ghostie" :src="ghostieArtwork.peekingRight" width="145" height="145" alt="" aria-hidden="true" />
    </div>
  </section>

  <section class="expression-ribbon">
    <div class="expression-ribbon__inner page-width">
      <p><span>Nari, in five</span> very predictable moods</p>
      <div class="expression-ribbon__emotes">
        <figure v-for="expression in expressions" :key="expression.label">
          <img :src="expression.image" width="90" height="90" :alt="`Nari's official ${expression.label.toLowerCase()} emote`" loading="lazy" />
          <figcaption>{{ expression.label }}</figcaption>
        </figure>
      </div>
    </div>
  </section>

  <section class="identity-rooms page-width section-pad">
    <header class="world-heading">
      <p class="eyebrow">One Nari, a whole bunch of little worlds</p>
      <h2>Everything I love lives in the same room.</h2>
    </header>
    <div class="identity-rooms__grid">
      <article v-for="(pillar, index) in identityPillars" :key="pillar.title">
        <img
          :src="[ghostieArtwork.heart, ghostieArtwork.chaotic, ghostieArtwork.nails][index]"
          width="144"
          height="144"
          alt=""
          loading="lazy"
        />
        <p class="eyebrow">{{ pillar.eyebrow }}</p>
        <h3>{{ pillar.title }}</h3>
        <p>{{ pillar.text }}</p>
      </article>
    </div>
  </section>

  <section class="meaningful-details">
    <div class="meaningful-details__inner page-width">
      <article>
        <Eye :size="31" aria-hidden="true" />
        <div><p class="eyebrow">A little glimpse</p><h2>Look for the emerald.</h2><p>Those bright green eyes are one of Nari's little signatures. Here, emerald is saved for the moments that matter.</p></div>
      </article>
      <article>
        <MoonStar :size="31" aria-hidden="true" />
        <div><p class="eyebrow">Held close</p><h2>Some stories stay hers.</h2><p>The sun, the moon, family, and heritage carry personal meaning. Nari gets to share those stories in her own words, on her own time.</p></div>
      </article>
    </div>
  </section>

  <section class="nari-promise page-width section-pad">
    <img :src="nariArtwork.cozy" width="270" height="270" alt="Nari's supplied cozy chibi artwork holding a warm drink" loading="lazy" />
    <div>
      <p class="eyebrow"><Shield :size="15" aria-hidden="true" /> Sweet doesn't mean spineless</p>
      <h2>We take care of our people here.</h2>
      <p>The jokes can be loud and the chaos can be legendary. But nobody has to earn basic respect, and nobody gets to mistake kindness for permission to cross a boundary.</p>
      <a class="text-link" href="/haven/">See what the Haven protects <ArrowRight :size="16" aria-hidden="true" /></a>
    </div>
  </section>
</template>
