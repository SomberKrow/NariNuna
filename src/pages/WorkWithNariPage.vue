<script setup lang="ts">
import ResponsiveArtwork from "@/components/art/ResponsiveArtwork.vue";
import { heroSources } from "@/data/artworkDelivery";
import { ArrowRight, ArrowUpRight, Handshake } from "@lucide/vue";
import { environmentArtwork, storybookPostcards } from "@/data/artwork";
import { nariLinks } from "@/data/socials";

const fits = [
  { title: "Creator collaborations", text: "Thoughtful streams, videos, and community projects with clear expectations." },
  { title: "Creative opportunities", text: "Projects with room for personality, color, and Nari's self-taught nail-art perspective." },
  { title: "Brand partnerships", text: "Respectful ideas, transparent deliverables, and a genuine fit with her people." }
];
</script>

<template>
  <section class="room-opening room-opening--work page-width">
    <div class="room-opening__copy">
      <p class="eyebrow"><Handshake :size="16" aria-hidden="true" /> Chapter six · a note from the writing desk</p>
      <h1>Let's make<br /><em>something lovely.</em></h1>
      <p>Good work can be clear, professional, and well organized without asking Nari to become somebody else.</p>
      <a class="button button--ember" href="#collaboration-note">Read the collaboration note <ArrowRight :size="17" aria-hidden="true" /></a>
    </div>
    <picture class="room-opening__art room-opening__art--work">
      <source v-for="source in heroSources(environmentArtwork.work)" :key="source.media" :media="source.media" :srcset="source.srcset" />
      <ResponsiveArtwork :fallback-width="1280" sizes="100vw" loading="eager" :artwork="environmentArtwork.work" width="1672" height="941" alt="Nari sits at her beautifully illustrated autumn correspondence desk while a tiny Ghostie helps carry a letter" fetchpriority="high" />
    </picture>
  </section>

  <section id="collaboration-note" class="correspondence room-section page-width" aria-labelledby="letter-title">
    <div class="correspondence__margin">
      <p class="room-kicker">From the writing desk</p>
      <ResponsiveArtwork :artwork="storybookPostcards.work" :fallback-width="480" sizes="(min-width: 64rem) 336px, (min-width: 40rem) 224px, 112px" alt="Nari writing a letter at her warm autumn desk, with a little Ghostie beside her" />
      <p>Clear expectations.<br />Room for personality.</p>
      <span class="correspondence__signature" aria-hidden="true">Nari Nuna</span>
    </div>
    <div class="collaboration-letter">
      <div class="collaboration-letter__masthead"><span>Work with Nari</span><span>A good first conversation</span></div>
      <h2 id="letter-title">An idea worth<br /><em>pulling up a chair for.</em></h2>
      <p class="collaboration-letter__intro">Good projects start with people who understand the room. Here's where we might fit.</p>
      <dl class="collaboration-letter__fits">
        <div v-for="(fit, index) in fits" :key="fit.title">
          <dt><span aria-hidden="true">0{{ index + 1 }}</span>{{ fit.title }}</dt><dd>{{ fit.text }}</dd>
        </div>
      </dl>
      <div class="collaboration-letter__brief">
        <h3>Tell her what you have in mind.</h3>
        <ol>
          <li><strong>The idea.</strong> Project, audience, platform, timing, and who's involved.</li>
          <li><strong>The details.</strong> Deliverables, approvals, usage rights, deadlines, and compensation.</li>
          <li><strong>The fit.</strong> Why Nari, and what makes it right for her community.</li>
        </ol>
      </div>
      <p class="collaboration-letter__contact">A dedicated business inbox hasn't been published yet. You can find Nari through her public profiles below.</p>
      <a class="letter-link" href="#nari-links">Find Nari's public profiles <ArrowRight :size="18" aria-hidden="true" /></a>
    </div>
  </section>

  <section id="nari-links" class="public-directory room-section page-width" aria-labelledby="nari-links-title">
    <header class="room-heading"><div><p class="room-kicker">Elsewhere in the Haven</p><h2 id="nari-links-title">Find your way to Nari.</h2></div><p>Streams, creative work, and everyday updates.</p></header>
    <nav class="public-directory__links" aria-label="Nari's public links">
      <a v-for="(link, index) in nariLinks" :key="link.platform" :href="link.url" target="_blank" rel="noreferrer noopener">
        <span class="public-directory__number" aria-hidden="true">0{{ index + 1 }}</span>
        <span><strong>{{ link.label }}</strong><small>{{ link.handle }}</small><span class="public-directory__purpose">{{ link.purpose }}</span></span>
        <ArrowUpRight :size="18" aria-hidden="true" /><span class="sr-only"> (opens in a new tab)</span>
      </a>
    </nav>
  </section>
</template>

<style scoped lang="scss" src="@/styles/rooms/work.scss"></style>
