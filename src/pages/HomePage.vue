<script setup lang="ts">
import { ArrowRight, Gamepad2, Heart, MoonStar, Paintbrush, Sparkles } from "@lucide/vue";
import SocialDock from "@/components/ui/SocialDock.vue";
import { detailArtwork, storybookPostcards } from "@/data/artwork";

const rooms = [
  { icon: Gamepad2, title: "The stream room", note: "Laughter comes with the furniture.", href: "/streams/", image: storybookPostcards.streams, number: "01" },
  { icon: Paintbrush, title: "The nail desk", note: "A little glitter gets everywhere.", href: "/nail-studio/", image: storybookPostcards.nails, number: "02" },
  { icon: Heart, title: "The Haven", note: "There's always room for you.", href: "/haven/", image: storybookPostcards.haven, number: "03" }
];
</script>

<template>
  <section class="haven-landing" aria-labelledby="landing-title">
    <div
      class="haven-landing__scene"
      role="img"
      aria-label="Nari, with emerald eyes, asymmetric cat-and-dog ears, lavender clothes, and her purple-tipped tail, welcomes a little Ghostie from the autumn window seat in her Haven."
    ></div>
    <div class="haven-landing__veil" aria-hidden="true"></div>
    <img class="haven-landing__sprig" :src="detailArtwork.lavender" width="290" height="290" alt="" aria-hidden="true" />
    <div class="haven-landing__margin-note" aria-hidden="true"><span>AUTUMN, AFTER HOURS</span><i></i><MoonStar :size="15" /></div>

    <div class="haven-landing__inner page-width">
      <div class="haven-landing__welcome">
        <p class="haven-landing__kicker"><Sparkles :size="15" aria-hidden="true" /> A little refuge for lovely weirdos</p>
        <h1 id="landing-title">
          <span>Nari</span>
          <em>Nuna</em>
        </h1>
        <p class="haven-landing__subtitle">Your favorite chaotic big sister.</p>
        <p class="haven-landing__intro">Somewhere between the late-night laughing, the tiny painted nails, and one more cup of cocoa, we made a place to belong.</p>

        <div class="haven-landing__divider" aria-hidden="true"><span></span><Heart :size="15" /><span></span></div>

        <SocialDock />

        <div class="haven-landing__actions">
          <a class="button button--ember haven-landing__haven-cta" href="/haven/#haven-door">
            Come sit with us
            <ArrowRight :size="17" aria-hidden="true" />
          </a>
          <a class="haven-landing__meet" href="/meet-nari/">Meet Nari <ArrowRight :size="15" aria-hidden="true" /></a>
        </div>
      </div>
    </div>

    <nav class="haven-landing__rooms page-width" aria-label="Explore Nari's rooms">
      <a v-for="room in rooms" :key="room.href" :href="room.href">
        <img :src="room.image" width="320" height="180" alt="" loading="lazy" />
        <span class="haven-landing__room-number">{{ room.number }}</span>
        <span class="haven-landing__room-copy"><strong>{{ room.title }}</strong><small>{{ room.note }}</small></span>
        <component :is="room.icon" :size="19" aria-hidden="true" />
      </a>
    </nav>
  </section>
</template>

<style scoped>
.haven-landing__rooms > a {
  isolation: isolate;
  overflow: hidden;
  background: color-mix(in srgb, var(--story-surface-deep) 82%, transparent);
  border-color: color-mix(in srgb, var(--story-line) 78%, var(--story-accent));
  box-shadow: 0 0.55rem 1.35rem rgb(15 9 14 / 14%);
  transition:
    border-color var(--duration-fast) ease,
    background-color var(--duration-fast) ease,
    transform var(--duration-fast) ease;
}
.haven-landing__rooms > a::after {
  position: absolute;
  z-index: -1;
  inset: 0;
  background: linear-gradient(105deg, color-mix(in srgb, var(--story-surface-deep) 96%, transparent) 0 46%, color-mix(in srgb, var(--story-surface) 78%, transparent) 78%, transparent);
  content: "";
  pointer-events: none;
}
.haven-landing__rooms > a:nth-child(2) {
  border-color: color-mix(in srgb, var(--story-line) 66%, var(--lavender));
}
.haven-landing__rooms > a:nth-child(3) {
  border-color: color-mix(in srgb, var(--story-line) 70%, var(--emerald));
}
.haven-landing__rooms > a:hover,
.haven-landing__rooms > a:focus-visible {
  background: color-mix(in srgb, var(--story-surface) 88%, var(--story-accent));
  border-color: var(--story-accent);
  transform: translateY(-2px);
}
.haven-landing__rooms > a > img {
  transition: filter 260ms ease, transform 420ms ease;
}
.haven-landing__rooms > a:hover > img,
.haven-landing__rooms > a:focus-visible > img {
  filter: saturate(1.08) contrast(1.04);
  transform: scale(1.045);
}
.haven-landing__room-number,
.haven-landing__room-copy,
.haven-landing__rooms > a > svg {
  position: relative;
  z-index: 1;
}
@media (min-width: 23.5rem) and (max-width: 64rem) {
  .haven-landing__rooms > a > img {
    position: absolute;
    z-index: -2;
    inset: 0;
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 0.28;
  }
  .haven-landing__rooms > a::after {
    background: linear-gradient(180deg, color-mix(in srgb, var(--story-surface-deep) 58%, transparent), color-mix(in srgb, var(--story-surface-deep) 94%, transparent));
  }
  .haven-landing__room-copy strong {
    color: var(--story-copy);
    text-shadow: 0 1px 0 rgb(0 0 0 / 26%);
  }
}
@media (min-width: 64.01rem) {
  .haven-landing__rooms > a {
    min-height: 5.15rem;
  }
  .haven-landing__rooms > a > img {
    height: 4.35rem;
    border: 1px solid color-mix(in srgb, var(--story-line) 78%, transparent);
  }
}
@media (prefers-reduced-motion: reduce) {
  .haven-landing__rooms > a,
  .haven-landing__rooms > a > img { transition: none; }
  .haven-landing__rooms > a:hover,
  .haven-landing__rooms > a:focus-visible,
  .haven-landing__rooms > a:hover > img,
  .haven-landing__rooms > a:focus-visible > img { transform: none; }
}
</style>
