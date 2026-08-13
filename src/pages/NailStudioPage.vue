<script setup lang="ts">
import { BookOpen, FlaskConical, Images, Paintbrush, ShieldAlert } from "@lucide/vue";
import SectionHeading from "@/components/ui/SectionHeading.vue";

const studioRooms = [
  { icon: Images, title: "The gallery", text: "Approved photographs of Nari's own sets, presented with room to see the craft—not compressed into a disposable thumbnail wall." },
  { icon: BookOpen, title: "Process notes", text: "Self-taught learning, experiments, mistakes, and practical observations written in Nari's voice." },
  { icon: Paintbrush, title: "The tool cabinet", text: "Products and tools Nari has actually approved, with honest context and visible affiliate disclosure when relevant." }
];
</script>

<template>
  <section class="nail-hero">
    <picture aria-hidden="true">
      <source srcset="/media/generated/nari-nail-studio-640.webp 640w, /media/generated/nari-nail-studio-1024.webp 1024w, /media/generated/nari-nail-studio-1568.webp 1568w" sizes="100vw" type="image/webp" />
      <img src="/media/generated/nari-nail-studio-1568.webp" width="1568" height="1003" alt="" fetchpriority="high" />
    </picture>
    <div class="nail-hero__veil"></div>
    <div class="nail-hero__copy page-width">
      <p class="eyebrow eyebrow--light"><Paintbrush :size="16" aria-hidden="true" /> Nari's Nail Studio</p>
      <h1>Color is a language.<br /><em>The desk is open.</em></h1>
      <p>Nari's self-taught nail-art practice deserves a real creative room: beautiful, honest about scope, and built to teach through process rather than borrowed authority.</p>
    </div>
  </section>

  <section class="section-pad page-width">
    <SectionHeading eyebrow="A flagship room" title="The gallery will be real, or it will wait." text="Generated environment art sets the atmosphere. It is never presented as a manicure Nari made." />
    <div class="studio-grid">
      <article v-for="room in studioRooms" :key="room.title">
        <component :is="room.icon" :size="28" aria-hidden="true" />
        <h2>{{ room.title }}</h2>
        <p>{{ room.text }}</p>
        <span class="status-chip">Awaiting Nari's approved content</span>
      </article>
    </div>
  </section>

  <section class="gallery-hold section-pad">
    <div class="gallery-hold__inner page-width">
      <div class="gallery-hold__visual" aria-hidden="true">
        <span>01</span><span>02</span><span>03</span><span>04</span>
      </div>
      <div>
        <p class="eyebrow">Gallery intake</p>
        <h2>Four frames are ready. The photographs are not being guessed.</h2>
        <p>When Nari provides her canonical nail-photo set, each image will receive a subject label, crop review, alt text, metadata stripping, responsive exports, and an ownership note before it appears here.</p>
      </div>
    </div>
  </section>

  <section class="safety-note page-width section-pad">
    <ShieldAlert :size="34" aria-hidden="true" />
    <div>
      <p class="eyebrow">Clear scope</p>
      <h2>Creative learning, not medical advice.</h2>
      <p>Nari publicly describes her nail work as self-taught and performed on herself. The studio will not claim licensure, client services, or medical authority. Content involving allergies, infection, chemical exposure, or nail health must point readers toward qualified professional care.</p>
    </div>
    <FlaskConical :size="64" aria-hidden="true" />
  </section>
</template>
