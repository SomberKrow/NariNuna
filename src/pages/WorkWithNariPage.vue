<script setup lang="ts">
import { ArrowUpRight, Clapperboard, Handshake, MessageSquareMore, ShieldCheck, Sparkles } from "@lucide/vue";
import { socialLinks } from "@/data/socials";

const linktree = socialLinks.find((link) => link.label === "Linktree");
const x = socialLinks.find((link) => link.label === "X");

const fits = [
  { icon: Clapperboard, title: "Creator collaborations", text: "Streams, videos, community events, and projects whose expectations and audience fit are clear." },
  { icon: Sparkles, title: "Creative & nail-adjacent work", text: "Opportunities that respect Nari's self-taught scope and never fabricate services or credentials." },
  { icon: Handshake, title: "Brand partnerships", text: "Sponsor-safe ideas that still sound like Nari, with transparent deliverables and no invented performance claims." }
];
</script>

<template>
  <section class="work-hero page-width section-pad">
    <div>
      <p class="eyebrow">Creators, collaborators & brands</p>
      <h1>Professional enough to be clear.<br /><em>Still unmistakably Nari.</em></h1>
      <p class="page-hero__lede">The right work gives Nari room to be warm, funny, candid, creative, and protective of the community that trusts her.</p>
    </div>
    <aside>
      <ShieldCheck :size="32" aria-hidden="true" />
      <strong>Evidence before numbers</strong>
      <p>No follower counts, demographics, engagement rates, partnerships, or audience promises appear here until Nari supplies dated first-party data.</p>
    </aside>
  </section>

  <section class="work-fit section-pad page-width">
    <p class="eyebrow">Potential fit</p>
    <div class="work-fit__grid">
      <article v-for="fit in fits" :key="fit.title">
        <component :is="fit.icon" :size="28" aria-hidden="true" />
        <h2>{{ fit.title }}</h2>
        <p>{{ fit.text }}</p>
      </article>
    </div>
  </section>

  <section class="work-process section-pad">
    <div class="work-process__inner page-width">
      <div>
        <p class="eyebrow">A sane first conversation</p>
        <h2>Tell Nari what you are making, why she fits, and what you need.</h2>
      </div>
      <ol>
        <li><span>01</span><div><strong>Context</strong><p>Project, audience, timing, platform, and the people involved.</p></div></li>
        <li><span>02</span><div><strong>Scope</strong><p>Deliverables, usage rights, approvals, compensation, and deadlines.</p></div></li>
        <li><span>03</span><div><strong>Fit</strong><p>Why Nari specifically—and how the idea respects her voice and boundaries.</p></div></li>
      </ol>
    </div>
  </section>

  <section class="contact-hold page-width section-pad">
    <MessageSquareMore :size="42" aria-hidden="true" />
    <div>
      <p class="eyebrow">Professional contact</p>
      <h2>The dedicated inbox is not public yet.</h2>
      <p>Rather than invent an address or pretend a form works, this version points to Nari's verified public link hub. A business email or approved inquiry form can replace this path without redesigning the page.</p>
      <div class="button-row">
        <a v-if="linktree" class="button button--ember" :href="linktree.url" target="_blank" rel="noreferrer noopener">Open Nari's links <ArrowUpRight :size="18" aria-hidden="true" /></a>
        <a v-if="x" class="button button--outline" :href="x.url" target="_blank" rel="noreferrer noopener">Find Nari on X <ArrowUpRight :size="18" aria-hidden="true" /></a>
      </div>
    </div>
  </section>
</template>
