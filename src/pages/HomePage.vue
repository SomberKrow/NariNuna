<script setup lang="ts">
import { ArrowRight, ArrowUpRight, Gamepad2, HeartHandshake, Paintbrush, Radio, ShieldCheck, Sparkles } from "@lucide/vue";
import MediaCard from "@/components/ui/MediaCard.vue";
import SectionHeading from "@/components/ui/SectionHeading.vue";
import { featuredMoments } from "@/data/media";
import { twitchUrl } from "@/data/socials";

const gateways = [
  {
    icon: Radio,
    eyebrow: "Live room",
    title: "Streams",
    text: "Games, yapping, panic, laughter, and the kind of chat that becomes part of the show.",
    href: "/streams/",
    link: "Feel the stream"
  },
  {
    icon: Paintbrush,
    eyebrow: "Creative room",
    title: "Nail Studio",
    text: "Color, process, self-taught learning, and a proper home for Nari's future approved gallery.",
    href: "/nail-studio/",
    link: "Open the studio"
  },
  {
    icon: HeartHandshake,
    eyebrow: "Common room",
    title: "The Haven",
    text: "A rowdy found family built on kindness, respect, boundaries, support, and excellent pillow-fort engineering.",
    href: "/haven/",
    link: "Go deeper"
  }
];
</script>

<template>
  <section class="home-hero">
    <picture class="home-hero__art" aria-hidden="true">
      <source
        type="image/webp"
        srcset="/media/generated/nari-haven-hero-640.webp 640w, /media/generated/nari-haven-hero-1024.webp 1024w, /media/generated/nari-haven-hero-1440.webp 1440w, /media/generated/nari-haven-hero-1672.webp 1672w"
        sizes="100vw"
      />
      <img src="/media/generated/nari-haven-hero-1672.webp" width="1672" height="941" alt="" fetchpriority="high" />
    </picture>
    <div class="home-hero__veil"></div>
    <div class="home-hero__content page-width">
      <p class="eyebrow eyebrow--light"><Sparkles :size="16" aria-hidden="true" /> Welcome to Nari's Haven</p>
      <h1>Come in.<br /><em>Get comfortable.</em></h1>
      <p class="home-hero__lede">A fall-evening refuge for streams, nail art, strange little stories, loud laughter, and people learning to treat each other like people.</p>
      <div class="button-row">
        <a class="button button--cream" :href="twitchUrl" target="_blank" rel="noreferrer noopener">
          <Radio :size="18" aria-hidden="true" /> Catch a stream
          <span class="sr-only"> on Twitch (opens in a new tab)</span>
        </a>
        <a class="button button--ghost" href="/meet-nari/">Meet your host <ArrowRight :size="18" aria-hidden="true" /></a>
      </div>
      <p class="home-hero__aside"><ShieldCheck :size="16" aria-hidden="true" /> Warm room. Sharp boundaries. Zero pressure to perform.</p>
    </div>
  </section>

  <section class="gateway-section section-pad page-width">
    <SectionHeading
      eyebrow="A room with many doors"
      title="Follow the part of Nari that found you first."
      text="The VTuber, gamer, nail artist, teacher-at-heart, and protective big sister all live in the same world."
    />
    <div class="gateway-grid">
      <a v-for="gateway in gateways" :key="gateway.href" class="gateway-card" :href="gateway.href">
        <component :is="gateway.icon" :size="28" aria-hidden="true" />
        <p class="eyebrow">{{ gateway.eyebrow }}</p>
        <h2>{{ gateway.title }}</h2>
        <p>{{ gateway.text }}</p>
        <span class="text-link">{{ gateway.link }} <ArrowRight :size="16" aria-hidden="true" /></span>
      </a>
    </div>
  </section>

  <section class="host-note section-pad">
    <div class="host-note__inner page-width">
      <div class="host-note__portrait">
        <img
          src="/media/generated/ghostie-512.webp"
          width="520"
          height="520"
          alt="An original lavender Ghostie keeps Nari's portrait space warm"
          loading="lazy"
        />
        <span>Original launch placeholder · Nari portrait and credit pending</span>
      </div>
      <div class="host-note__copy">
        <p class="eyebrow">Your chaotic big sister</p>
        <h2>Cute things. Nail polish. Games. Professional-grade yapping.</h2>
        <p>Nari built the Haven to entertain, teach what she is learning, make people laugh, and offer the kind of protective warmth that never asks you to surrender your boundaries.</p>
        <blockquote>“Your presence already counts. The rest is just extra glitter.”</blockquote>
        <a class="text-link" href="/meet-nari/">Meet Nari properly <ArrowRight :size="16" aria-hidden="true" /></a>
      </div>
    </div>
  </section>

  <section class="section-pad page-width">
    <SectionHeading
      eyebrow="A taste of the chaos"
      title="Three moments. Zero context required."
      text="Curated outbound clips keep the page quick and private—nothing heavy or autoplaying follows you into the room."
    />
    <div class="media-grid">
      <MediaCard v-for="moment in featuredMoments" :key="moment.id" :moment="moment" />
    </div>
    <div class="section-action">
      <a class="button button--soft" href="/streams/">Explore the stream room <Gamepad2 :size="18" aria-hidden="true" /></a>
    </div>
  </section>

  <section class="haven-invitation section-pad">
    <div class="haven-invitation__inner page-width">
      <img src="/media/generated/ghostie-512.webp" width="360" height="360" alt="A lavender Ghostie floats beside the invitation" loading="lazy" />
      <div>
        <p class="eyebrow">Deeper in the house</p>
        <h2>The Discord door is here.<br />It just is not shouting at you.</h2>
        <p>Learn what the Haven protects, understand the room, and then discover the entrance the way a real guest would.</p>
        <a class="button button--emerald" href="/haven/">Find the common room <ArrowRight :size="18" aria-hidden="true" /></a>
      </div>
    </div>
  </section>

  <section class="professional-strip page-width">
    <div>
      <p class="eyebrow">Creators & brands</p>
      <h2>There is a clean path through the pillow fort.</h2>
      <p>Collaboration fit, content boundaries, and the next professional step—without invented metrics or corporate cosplay.</p>
    </div>
    <a class="button button--outline" href="/work-with-nari/">Work with Nari <ArrowUpRight :size="18" aria-hidden="true" /></a>
  </section>
</template>
