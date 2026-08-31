<script setup lang="ts">
import { ArrowRight, ArrowUpRight, Clapperboard, Handshake, MessageSquareMore, ShieldCheck, Sparkles } from "@lucide/vue";
import { environmentArtwork, storybookPostcards } from "@/data/artwork";
import { nariLinks } from "@/data/socials";

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
      <a class="button button--ember" href="#nari-links">Find Nari's current links <ArrowRight :size="17" aria-hidden="true" /></a>
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

  <section id="nari-links" class="nari-links page-width section-pad" aria-labelledby="nari-links-title">
    <header class="nari-links__intro">
      <p class="eyebrow"><MessageSquareMore :size="15" aria-hidden="true" /> Nari's public doors</p>
      <h2 id="nari-links-title">Stay inside the Haven until you choose where to go.</h2>
      <p>Nari's commonly used links live here now, in the same warm little world as the rest of the site. Pick the door you actually want instead of being dropped onto a disconnected link page.</p>
    </header>

    <nav class="nari-links__directory" aria-label="Nari's public links">
      <a
        v-for="(link, index) in nariLinks"
        :key="link.platform"
        :href="link.url"
        target="_blank"
        rel="noreferrer noopener"
      >
        <span class="nari-links__index" aria-hidden="true">{{ String(index + 1).padStart(2, "0") }}</span>
        <span class="nari-links__copy">
          <span><strong>{{ link.label }}</strong><small>{{ link.handle }}</small></span>
          <p>{{ link.purpose }}</p>
        </span>
        <ArrowUpRight :size="18" aria-hidden="true" />
        <span class="sr-only"> (opens in a new tab)</span>
      </a>
    </nav>
  </section>

  <section class="work-process section-pad">
    <div class="work-process__inner page-width">
      <div><p class="eyebrow">A good first conversation</p><h2>Be clear, be human,<br />and tell her why.</h2><p>We love an exciting idea. We love clear expectations even more.</p></div>
      <ol><li><span>01</span><div><strong>What are you making?</strong><p>Project, audience, platform, timing, and the people involved.</p></div></li><li><span>02</span><div><strong>What does the work involve?</strong><p>Deliverables, approval process, usage rights, deadlines, and compensation.</p></div></li><li><span>03</span><div><strong>Why Nari?</strong><p>Show that you understand her creative voice and the community she protects.</p></div></li></ol>
    </div>
    <div class="work-contact work-contact--storybook page-width">
      <img :src="storybookPostcards.work" width="320" height="180" alt="Painted detail of Nari's correspondence desk" loading="lazy" />
      <div><p class="eyebrow"><MessageSquareMore :size="15" aria-hidden="true" /> Say hello properly</p><h2>The dedicated business inbox isn't public yet.</h2><p>Until Nari chooses an approved business contact, use the public doors above and lead with the project, timing, deliverables, usage, and compensation.</p><div class="button-row"><a class="button button--ember" href="#nari-links">Back to Nari's links <ArrowRight :size="17" aria-hidden="true" /></a></div></div>
      <aside><ShieldCheck :size="22" aria-hidden="true" /><span>No invented audience numbers, brand deals, or performance claims.</span></aside>
    </div>
  </section>
</template>
