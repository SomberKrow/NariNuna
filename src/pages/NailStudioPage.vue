<script setup lang="ts">
import ResponsiveArtwork from "@/components/art/ResponsiveArtwork.vue";
import { heroStyle } from "@/data/artworkDelivery";
import { ArrowRight, Heart, Paintbrush, Sparkles } from "@lucide/vue";
import GhostieArt from "@/components/art/GhostieArt.vue";
import { environmentArtwork, storybookPostcards } from "@/data/artwork";
</script>

<template>
  <section class="studio-opening responsive-hero" :style="heroStyle(environmentArtwork.nails)">
    <div class="studio-opening__backdrop" aria-hidden="true" :style="{ backgroundImage: 'var(--responsive-hero-art)' }"></div>
    <div class="studio-opening__inner page-width">
      <div>
        <p class="eyebrow"><Paintbrush :size="16" aria-hidden="true" /> Chapter three · her favorite little desk</p>
        <h1>Tiny canvases.<br /><em>Big Nari energy.</em></h1>
        <p>Pretty colors, careful little details, and a self-taught creative who genuinely loves showing people what she's figuring out.</p>
        <div class="tag-row"><span><Heart :size="15" aria-hidden="true" /> Made with love</span><span><Sparkles :size="15" aria-hidden="true" /> Probably with glitter</span></div>
      </div>
    </div>
  </section>

  <section class="studio-workbench room-section page-width" aria-labelledby="workbench-title">
    <header class="room-heading"><div><p class="room-kicker">Polish · practice · a little patience</p><h2 id="workbench-title">Made slowly.<br /><em>Made her way.</em></h2></div><p>Color stories, tiny details, glitter experiments, and the occasional wonderful accident.</p></header>
    <div class="studio-workbench__spread">
      <figure class="studio-workbench__scene">
        <ResponsiveArtwork :artwork="storybookPostcards.nails" sizes="(min-width: 80rem) 760px, (min-width: 48rem) 58vw, calc(100vw - 32px)" alt="An illustrated view of Nari's nail workspace" />
        <figcaption>Inside the nail desk <span>Workspace illustration</span></figcaption>
      </figure>
      <div class="studio-workbench__notes">
        <article><p class="room-kicker">01 · The practice</p><h3>A little better, one set at a time.</h3><p>Nari is a self-taught artist exploring color, process, and details on her own nails.</p></article>
        <article><p class="room-kicker">02 · The learning</p><h3>Figuring it out is part of the fun.</h3><p>Honest little lessons, creative experiments, and the things she learns along the way.</p><a class="text-link" href="/resources/#nail-desk">Visit the nail desk shelf <ArrowRight :size="16" aria-hidden="true" /></a></article>
      </div>
    </div>
    <div class="studio-portfolio-hold">
      <GhostieArt variant="study" sizes="128px" />
      <div><p class="room-kicker">The real-work collection</p><h2>Her favorite sets are still being chosen.</h2><p>Nari's own photographs will live here when she's ready to share them. For now, enjoy a look around the desk.</p></div>
    </div>
    <p class="studio-scope">Self-taught nail art and personal practice. No salon services or bookings; educational content is not medical advice.</p>
  </section>
</template>

<style scoped lang="scss" src="@/styles/rooms/nails.scss"></style>
