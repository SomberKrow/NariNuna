<script setup lang="ts">
import { ArrowRight, ArrowUpRight, Clapperboard, Handshake, MessageSquareMore, ShieldCheck, Sparkles } from "@lucide/vue";
import { environmentArtwork, storybookPostcards } from "@/data/artwork";
import { socialLinks } from "@/data/socials";

const linktree = socialLinks.find((link) => link.label === "Linktree");
const x = socialLinks.find((link) => link.label === "X");
const fits = [
  { icon: Clapperboard, title: "Creator collaborations", text: "Thoughtful streams, videos, and community projects with clear expectations.", art: storybookPostcards.streams },
  { icon: Sparkles, title: "Creative opportunities", text: "Projects with room for personality, color, and Nari's self-taught nail-art perspective.", art: storybookPostcards.nails },
  { icon: Handshake, title: "Brand partnerships", text: "Respectful ideas, transparent deliverables, and a genuine fit with her people.", art: storybookPostcards.work }
];
</script>

<template>
  <section class="room-opening room-opening--work page-width">
    <div class="room-opening__copy">
      <p class="eyebrow"><Handshake :size="16" aria-hidden="true" /> Chapter six · a note from the writing desk</p>
      <h1>Let's make<br /><em>something lovely.</em></h1>
      <p>Good work can be clear, professional, and well organized without asking Nari to become somebody else.</p>
      <a v-if="linktree" class="button button--ember" :href="linktree.url" target="_blank" rel="noreferrer noopener">Find Nari's current links <ArrowUpRight :size="17" aria-hidden="true" /><span class="sr-only"> (opens in a new tab)</span></a>
    </div>
    <div class="room-opening__art room-opening__art--work">
      <img :src="environmentArtwork.work" width="1672" height="941" alt="Nari sits at her beautifully illustrated autumn correspondence desk while a tiny Ghostie helps carry a letter" fetchpriority="high" />
    </div>
  </section>

  <section class="work-fit page-width section-pad">
    <header class="world-heading"><p class="eyebrow">Where the fit feels right</p><h2>Creative work with an actual heartbeat.</h2></header>
    <div class="work-fit__grid work-fit__grid--painted">
      <article v-for="fit in fits" :key="fit.title">
        <img :src="fit.art" width="640" height="360" alt="" loading="lazy" />
        <div><component :is="fit.icon" :size="24" aria-hidden="true" /><h3>{{ fit.title }}</h3><p>{{ fit.text }}</p></div>
      </article>
    </div>
  </section>

  <section class="work-process section-pad">
    <div class="work-process__inner page-width">
      <div><p class="eyebrow">A good first conversation</p><h2>Be clear, be human,<br />and tell her why.</h2><p>We love an exciting idea. We love clear expectations even more.</p></div>
      <ol><li><span>01</span><div><strong>What are you making?</strong><p>Project, audience, platform, timing, and the people involved.</p></div></li><li><span>02</span><div><strong>What does the work involve?</strong><p>Deliverables, approval process, usage rights, deadlines, and compensation.</p></div></li><li><span>03</span><div><strong>Why Nari?</strong><p>Show that you understand her creative voice and the community she protects.</p></div></li></ol>
    </div>
    <div class="work-contact work-contact--storybook page-width">
      <img :src="storybookPostcards.work" width="320" height="180" alt="Painted detail of Nari's correspondence desk" loading="lazy" />
      <div><p class="eyebrow"><MessageSquareMore :size="15" aria-hidden="true" /> Say hello properly</p><h2>The dedicated business inbox isn't public yet.</h2><p>Until Nari chooses an approved contact method, her verified public link hub is the honest way to find her.</p><div class="button-row"><a v-if="linktree" class="button button--ember" :href="linktree.url" target="_blank" rel="noreferrer noopener">Open Nari's links <ArrowRight :size="17" aria-hidden="true" /></a><a v-if="x" class="text-link" :href="x.url" target="_blank" rel="noreferrer noopener">Find her on X <ArrowUpRight :size="15" aria-hidden="true" /></a></div></div>
      <aside><ShieldCheck :size="22" aria-hidden="true" /><span>No invented audience numbers, brand deals, or performance claims.</span></aside>
    </div>
  </section>
</template>
