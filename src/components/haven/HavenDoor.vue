<script setup lang="ts">
import { ArrowUpRight, HeartHandshake, ShieldCheck } from "@lucide/vue";
import { computed, onMounted, onUnmounted, ref } from "vue";
import { artworkSrc, artworkSrcset } from "@/data/artworkDelivery";
import { environmentArtwork } from "@/data/artwork";
import { discordUrl } from "@/data/socials";

const knocksRequired = 3;
const step = ref(0);
const threshold = ref<HTMLElement | null>(null);
const loadInterior = ref(false);
let observer: IntersectionObserver | undefined;

function prepareInterior(): void {
  loadInterior.value = true;
  observer?.disconnect();
}

onMounted(() => {
  if (!("IntersectionObserver" in window)) {
    prepareInterior();
    return;
  }
  observer = new IntersectionObserver((entries) => {
    if (entries.some((entry) => entry.isIntersecting)) prepareInterior();
  }, { rootMargin: "300px" });
  if (threshold.value) observer.observe(threshold.value);
});

onUnmounted(() => observer?.disconnect());

const stages = [
  {
    name: "First knock",
    chapter: "The threshold",
    title: "Knock once. Let us know you're here.",
    text: "A little gold light finds its way beneath the door. You don't need an invitation to be interesting, impressive, or perfectly okay. Just start with a knock.",
    action: "Give the first knock",
    whisper: "Somewhere inside, a tiny Ghostie looks up."
  },
  {
    name: "Second knock",
    chapter: "Leave the armor",
    title: "You can come exactly as you are.",
    text: "The latch stirs. A Ghostie peeks out and nudges a basket toward you. The pretending, the proving, the need to be anyone else? You can leave those here.",
    action: "Give the second knock",
    whisper: "Difference belongs here. Cruelty doesn't."
  },
  {
    name: "Third knock",
    chapter: "Keep the light on",
    title: "One small promise before we open.",
    text: "Be kind to the people inside. Respect their boundaries. Protect the warmth without trying to own it. The Haven stays a haven because everybody helps.",
    action: "Promise kindness · third knock",
    whisper: "The Ghostie is already making room for you."
  }
] as const;

const currentStage = computed(() => stages[Math.min(step.value, knocksRequired - 1)]);
const isOpen = computed(() => step.value === knocksRequired);

function knock(): void {
  prepareInterior();
  step.value = Math.min(step.value + 1, knocksRequired);
}

function closeDoor(): void {
  step.value = 0;
}
</script>

<template>
  <section
    ref="threshold"
    class="haven-threshold"
    @focusin="prepareInterior"
    :class="{ 'haven-threshold--open': isOpen }"
    aria-labelledby="haven-door-title"
  >
    <div
      class="haven-threshold__scene"
      :class="`is-step-${step}`"
    >
      <div class="haven-threshold__wall" aria-hidden="true"></div>
      <div class="haven-threshold__halo" aria-hidden="true"></div>
      <div class="haven-threshold__ivy haven-threshold__ivy--left" aria-hidden="true"></div>
      <div class="haven-threshold__ivy haven-threshold__ivy--right" aria-hidden="true"></div>
      <div class="haven-threshold__lantern haven-threshold__lantern--left" aria-hidden="true"></div>
      <div class="haven-threshold__lantern haven-threshold__lantern--right" aria-hidden="true"></div>
      <div class="haven-threshold__keystone" aria-hidden="true">☾</div>

      <div class="haven-threshold__arch">
        <div class="haven-threshold__room-light" aria-hidden="true"></div>

        <figure v-if="loadInterior" class="haven-threshold__gathering" :class="{ 'is-glimpsed': !isOpen }" :aria-hidden="!isOpen ? 'true' : undefined">
          <img
            :src="artworkSrc(environmentArtwork.havenDoorInterior, 640)"
            :srcset="artworkSrcset(environmentArtwork.havenDoorInterior)"
            sizes="(min-width: 68rem) 368px, 320px"
            width="1024"
            height="1536"
            alt="Nari welcomes you into a lantern-lit autumn cottage surrounded by her cheerful little scythe-hairpin Ghosties"
            decoding="async"
          />
          <figcaption v-if="isOpen">
            <span>Beyond the doorway</span>
            <strong>We saved you a spot.</strong>
          </figcaption>
        </figure>

        <button
          class="haven-threshold__door"
          type="button"
          :aria-label="isOpen ? 'The Haven doorway is open' : currentStage.action"
          :disabled="isOpen"
          @click="knock"
        >
          <span class="haven-threshold__door-grain" aria-hidden="true"></span>
          <span class="haven-threshold__door-panel" aria-hidden="true"></span>
          <span class="haven-threshold__door-inlay haven-threshold__door-inlay--upper" aria-hidden="true"></span>
          <span class="haven-threshold__door-inlay haven-threshold__door-inlay--lower" aria-hidden="true"></span>
          <span class="haven-threshold__hinge haven-threshold__hinge--upper" aria-hidden="true"></span>
          <span class="haven-threshold__hinge haven-threshold__hinge--lower" aria-hidden="true"></span>
          <span class="haven-threshold__door-moon" aria-hidden="true">✦</span>
          <span class="haven-threshold__sign" aria-hidden="true">
            <span>THE HAVEN</span>
            <small>three knocks, please</small>
          </span>
          <span class="haven-threshold__knocker" aria-hidden="true"></span>
          <span class="haven-threshold__knob" aria-hidden="true"></span>
        </button>
      </div>

      <div class="haven-threshold__stepstone" aria-hidden="true"></div>
      <div class="haven-threshold__mat" aria-hidden="true">COME AS YOU ARE</div>
      <p class="haven-threshold__scene-note" aria-hidden="true">
        {{ isOpen ? "A little look inside the Haven." : "You can knock on the door, too." }}
      </p>
    </div>

    <div class="haven-threshold__content">
      <div class="haven-threshold__chapter">
        <p class="eyebrow">{{ isOpen ? "All three knocks answered" : currentStage.chapter }}</p>
        <p class="haven-threshold__count" aria-live="polite">{{ step }} of {{ knocksRequired }} knocks</p>
      </div>

      <ol class="haven-threshold__progress" aria-label="Your three knocks at the Haven door">
        <li
          v-for="index in knocksRequired"
          :key="index"
          :class="{ 'is-answered': step >= index, 'is-current': !isOpen && step === index - 1 }"
          :aria-label="`Knock ${index}: ${step >= index ? 'answered' : 'waiting'}`"
        >
          <span aria-hidden="true">{{ index }}</span>
        </li>
      </ol>

      <template v-if="!isOpen">
        <p class="haven-threshold__stage-name">{{ currentStage.name }}</p>
        <h2 id="haven-door-title">{{ currentStage.title }}</h2>
        <p class="haven-threshold__story">{{ currentStage.text }}</p>
        <p class="haven-threshold__whisper">{{ currentStage.whisper }}</p>

        <button class="button button--ember haven-threshold__action" type="button" @click="knock">
          <ShieldCheck v-if="step === 2" :size="18" aria-hidden="true" />
          <HeartHandshake v-else :size="18" aria-hidden="true" />
          {{ currentStage.action }}
        </button>
      </template>

      <template v-else>
        <p class="haven-threshold__stage-name">The door swings open</p>
        <h2 id="haven-door-title">There's a place for you inside.</h2>
        <p class="haven-threshold__story">
          The Ghostie steps aside. Past the blankets and the soft lavender light, people are already making room.
          Welcome to Nari's Haven.
        </p>
        <p class="haven-threshold__whisper">You knew the way in was never just a link.</p>

        <a
          class="button button--emerald haven-threshold__action"
          :href="discordUrl"
          target="_blank"
          rel="noreferrer noopener"
        >
          Enter Nari's Haven on Discord
          <ArrowUpRight :size="18" aria-hidden="true" />
          <span class="sr-only"> (opens in a new tab)</span>
        </a>
        <button class="text-button" type="button" @click="closeDoor">Close the door behind me</button>
      </template>
    </div>
  </section>
</template>

<style scoped>
.haven-threshold {
  display: grid;
  overflow: hidden;
  color: var(--story-copy);
  background: var(--story-surface);
  border: 1px solid var(--story-line);
  border-radius: 1rem;
  box-shadow: 0 1.15rem 3.2rem rgb(15 9 13 / 20%);
}

.haven-threshold__scene {
  position: relative;
  min-height: 26rem;
  overflow: hidden;
  background:
    radial-gradient(ellipse at 50% 42%, rgb(196 138 88 / 22%), transparent 40%),
    radial-gradient(ellipse at 50% 100%, rgb(236 167 98 / 20%), transparent 60%),
    linear-gradient(155deg, #392839 0%, #4b3446 35%, #2c1d2a 78%, #241720);
  isolation: isolate;
}

.haven-threshold__wall {
  position: absolute;
  inset: 0;
  background:
    repeating-linear-gradient(0deg, transparent 0 3.35rem, rgb(255 236 219 / 7%) 3.35rem 3.43rem),
    repeating-linear-gradient(90deg, transparent 0 4.85rem, rgb(255 236 219 / 4%) 4.85rem 4.91rem),
    radial-gradient(ellipse at 50% 44%, transparent 34%, rgb(17 10 16 / 28%) 83%);
  mask-image: linear-gradient(180deg, rgb(0 0 0 / 88%), rgb(0 0 0 / 40%) 85%);
}

.haven-threshold__halo {
  position: absolute;
  top: 9%;
  left: 50%;
  width: min(90%, 25rem);
  height: 76%;
  background: radial-gradient(ellipse at 50% 47%, rgb(237 172 109 / 20%), transparent 71%);
  border: 1px solid rgb(241 195 146 / 12%);
  border-bottom: 0;
  border-radius: 13rem 13rem 0 0;
  box-shadow: 0 0 0 0.45rem rgb(37 23 33 / 17%), 0 0 2.7rem rgb(233 163 93 / 11%);
  transform: translateX(-50%);
}

.haven-threshold__ivy {
  position: absolute;
  z-index: 4;
  top: 15%;
  width: 2.6rem;
  height: 9.5rem;
  border-left: 2px solid rgb(187 155 148 / 70%);
  border-radius: 50%;
  pointer-events: none;
}

.haven-threshold__ivy::before,
.haven-threshold__ivy::after {
  position: absolute;
  left: -0.45rem;
  width: 0.8rem;
  height: 1.3rem;
  background:
    radial-gradient(ellipse, #b9a1d7 0 23%, transparent 26%) 0 0 / 0.36rem 0.4rem,
    linear-gradient(180deg, rgb(118 97 139 / 55%), rgb(105 87 128 / 8%));
  border-radius: 50% 50% 45% 45%;
  box-shadow: 0 0 0.6rem rgb(175 135 198 / 25%);
  content: "";
}

.haven-threshold__ivy::before {
  top: 1.9rem;
}

.haven-threshold__ivy::after {
  top: 5.55rem;
  left: -0.25rem;
  transform: scale(0.8) rotate(-13deg);
}

.haven-threshold__ivy--left {
  left: 12%;
  transform: rotate(11deg);
}

.haven-threshold__ivy--right {
  right: 12%;
  transform: scaleX(-1) rotate(11deg);
}

.haven-threshold__keystone {
  position: absolute;
  z-index: 5;
  top: 8.3%;
  left: 50%;
  display: grid;
  width: 2.2rem;
  aspect-ratio: 1;
  place-items: center;
  color: #f2d09c;
  background: linear-gradient(150deg, #65505e, #44323f);
  border: 1px solid rgb(242 203 166 / 62%);
  border-radius: 50%;
  box-shadow: 0 0 0 0.25rem rgb(35 22 32 / 60%), 0 0 1.1rem rgb(237 183 119 / 28%);
  font-size: 1.2rem;
  line-height: 1;
  transform: translateX(-50%);
}

.haven-threshold__arch {
  --door-angle: 0deg;
  position: absolute;
  z-index: 2;
  bottom: 4rem;
  left: 50%;
  width: min(74%, 20rem);
  height: 74%;
  overflow: hidden;
  background: #20131d;
  border: 0.8rem solid #85676d;
  border-bottom: 0;
  border-radius: 11rem 11rem 0.15rem 0.15rem;
  box-shadow:
    inset 0 0 0 0.14rem rgb(244 200 159 / 34%),
    0 0 0 0.16rem rgb(244 206 175 / 40%),
    0 0 0 0.52rem rgb(54 35 46 / 72%),
    0 1rem 3rem rgb(10 4 9 / 48%);
  perspective: 950px;
  transform: translateX(-50%);
}

.haven-threshold__room-light {
  position: absolute;
  inset: 0;
  background:
    radial-gradient(circle at 58% 58%, rgb(254 199 124 / 68%), transparent 40%),
    linear-gradient(180deg, rgb(245 182 131 / 14%), transparent 72%);
  opacity: 0.15;
  transition: opacity 360ms ease;
}

.haven-threshold__door {
  position: absolute;
  z-index: 4;
  inset: 0;
  display: block;
  width: 100%;
  height: 100%;
  overflow: hidden;
  padding: 0;
  background:
    radial-gradient(ellipse at 50% 15%, rgb(228 166 110 / 15%), transparent 36%),
    linear-gradient(145deg, #79515c 0%, #573547 46%, #362333 100%);
  border: 0;
  border-right: 0.16rem solid rgb(33 17 27 / 55%);
  border-radius: 10.5rem 10.5rem 0 0;
  cursor: pointer;
  transform: rotateY(var(--door-angle));
  transform-origin: left center;
  transform-style: preserve-3d;
  transition: transform 520ms cubic-bezier(0.22, 0.78, 0.22, 1), filter 180ms ease;
}

.haven-threshold__door:hover:not(:disabled) {
  filter: brightness(1.08);
}

.haven-threshold__door:focus-visible {
  outline: 3px solid #f3cb8c;
  outline-offset: -0.35rem;
}

.haven-threshold__door:disabled {
  cursor: default;
}

.haven-threshold__door-grain {
  position: absolute;
  inset: 0;
  background:
    repeating-linear-gradient(90deg, transparent 0 2.1rem, rgb(36 19 31 / 28%) 2.1rem 2.22rem),
    repeating-linear-gradient(174deg, transparent 0 1.35rem, rgb(247 215 192 / 3%) 1.35rem 1.39rem),
    linear-gradient(90deg, rgb(255 244 225 / 11%), transparent 15%, transparent 84%, rgb(22 10 19 / 21%));
}

.haven-threshold__door-panel {
  position: absolute;
  inset: 1.55rem 0.85rem 1.15rem;
  border: 1px solid rgb(246 212 180 / 56%);
  border-radius: 9rem 9rem 0.8rem 0.8rem;
  box-shadow:
    inset 0 0 0 0.4rem rgb(49 25 37 / 22%),
    inset 0 0 0 0.47rem rgb(223 171 125 / 16%);
}

.haven-threshold__door-inlay {
  position: absolute;
  right: 1.65rem;
  left: 1.65rem;
  border: 1px solid rgb(241 199 151 / 32%);
  box-shadow: inset 0 0 0 0.2rem rgb(51 29 40 / 19%);
}

.haven-threshold__door-inlay--upper {
  top: 1.98rem;
  height: 29%;
  border-radius: 7.5rem 7.5rem 1rem 1rem;
}

.haven-threshold__door-inlay--lower {
  bottom: 1.85rem;
  height: 25%;
  border-radius: 0.6rem;
}

.haven-threshold__hinge {
  position: absolute;
  left: 0;
  width: 3rem;
  height: 0.34rem;
  background: linear-gradient(90deg, #c89a6a, #8a6453 88%, transparent);
  border-block: 1px solid rgb(49 27 35 / 45%);
  border-radius: 0 80% 80% 0;
}

.haven-threshold__hinge::after {
  position: absolute;
  top: -0.14rem;
  left: 0.54rem;
  width: 0.47rem;
  aspect-ratio: 1;
  background: #dfb47f;
  border: 1px solid #775446;
  border-radius: 50%;
  content: "";
}

.haven-threshold__hinge--upper {
  top: 33%;
}

.haven-threshold__hinge--lower {
  bottom: 22%;
}

.haven-threshold__door-moon {
  position: absolute;
  top: 14%;
  left: 50%;
  color: #efc78f;
  font-size: 1.1rem;
  text-shadow: 0 0 0.8rem rgb(240 185 115 / 58%);
  transform: translateX(-50%);
}

.haven-threshold__sign {
  position: absolute;
  top: 35%;
  left: 50%;
  display: grid;
  width: min(75%, 9.5rem);
  gap: 0.18rem;
  padding: 0.63rem 0.55rem;
  color: #f5e4d2;
  background: linear-gradient(165deg, #684858, #45313f);
  border: 1px solid #d6ae86;
  border-radius: 0.35rem;
  box-shadow: 0 0 0 0.13rem rgb(58 37 48 / 80%), 0 0.42rem 0 rgb(36 19 30 / 24%);
  text-align: center;
  transform: translateX(-50%) rotate(-1deg);
}

.haven-threshold__sign::before,
.haven-threshold__sign::after {
  position: absolute;
  top: -1rem;
  width: 1px;
  height: 1.08rem;
  background: #d5b197;
  content: "";
}

.haven-threshold__sign::before {
  left: 1.4rem;
  transform: rotate(16deg);
}

.haven-threshold__sign::after {
  right: 1.4rem;
  transform: rotate(-16deg);
}

.haven-threshold__sign > span {
  font-family: var(--font-display);
  font-size: 0.93rem;
  font-style: italic;
  font-weight: 800;
  letter-spacing: 0.08em;
}

.haven-threshold__sign small {
  font-family: var(--font-detail);
  font-size: 0.5rem;
  font-weight: 800;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.haven-threshold__knocker {
  position: absolute;
  top: 62%;
  left: 50%;
  width: 1.7rem;
  height: 1.95rem;
  border: 0.2rem solid #e0b885;
  border-radius: 48% 48% 44% 44%;
  box-shadow: inset 0 0 0 1px rgb(49 25 31 / 34%), 0 0 0.8rem rgb(232 174 103 / 15%);
  transform: translateX(-50%);
}

.haven-threshold__knocker::before {
  position: absolute;
  top: -0.48rem;
  left: 50%;
  width: 0.7rem;
  aspect-ratio: 1;
  background: #e7c18b;
  border: 1px solid #8a6650;
  border-radius: 50%;
  content: "";
  transform: translateX(-50%);
}

.haven-threshold__knob {
  position: absolute;
  top: 69%;
  right: 1.12rem;
  width: 0.84rem;
  aspect-ratio: 1;
  background: #e6bd86;
  border: 0.14rem solid #775642;
  border-radius: 50%;
  box-shadow: 0 0 0 0.25rem rgb(36 18 27 / 24%);
}

.haven-threshold__lantern {
  position: absolute;
  z-index: 5;
  top: 30%;
  width: 1.4rem;
  height: 2.15rem;
  background: linear-gradient(180deg, #f4c98b, #e39759);
  border: 0.15rem solid #76534d;
  border-radius: 35% 35% 28% 28%;
  box-shadow: 0 0 1.7rem 0.55rem rgb(235 176 107 / 32%);
}

.haven-threshold__lantern::before {
  position: absolute;
  right: 48%;
  bottom: 100%;
  width: 1px;
  height: 1.6rem;
  background: #bb927c;
  content: "";
}

.haven-threshold__lantern--left {
  left: 7.5%;
}

.haven-threshold__lantern--right {
  right: 7.5%;
  top: 30%;
}

.haven-threshold__stepstone {
  position: absolute;
  z-index: 3;
  right: 8%;
  bottom: 3.05rem;
  left: 8%;
  height: 1.05rem;
  background: linear-gradient(180deg, #987c78 0%, #72575e 39%, #503741 100%);
  border: 1px solid rgb(240 204 179 / 24%);
  border-radius: 0.45rem;
  box-shadow: 0 0.5rem 1.2rem rgb(13 7 12 / 35%);
}

.haven-threshold__mat {
  position: absolute;
  z-index: 5;
  bottom: 1.78rem;
  left: 50%;
  padding: 0.38rem 1.05rem;
  color: #f0dccc;
  background: #593b43;
  border: 1px solid rgb(241 205 181 / 32%);
  border-radius: 48%;
  font-family: var(--font-detail);
  font-size: 0.51rem;
  font-weight: 850;
  letter-spacing: 0.1em;
  white-space: nowrap;
  transform: translateX(-50%);
}

.haven-threshold__scene-note {
  position: absolute;
  right: 0;
  bottom: 0.5rem;
  left: 0;
  margin: 0;
  color: rgb(249 225 218 / 83%);
  font-family: var(--font-detail);
  font-size: 0.64rem;
  letter-spacing: 0.02em;
  text-align: center;
}

.haven-threshold__scene.is-step-1 .haven-threshold__arch {
  --door-angle: -18deg;
}

.haven-threshold__scene.is-step-2 .haven-threshold__arch {
  --door-angle: -43deg;
}

.haven-threshold__scene.is-step-3 .haven-threshold__arch {
  --door-angle: -102deg;
}

.haven-threshold--open .haven-threshold__arch {
  box-shadow:
    inset 0 0 0 0.14rem rgb(246 205 161 / 52%),
    0 0 0 0.16rem rgb(246 211 174 / 52%),
    0 0 0 0.52rem rgb(54 35 46 / 72%),
    0 0 2rem rgb(224 157 96 / 21%),
    0 1rem 3rem rgb(10 4 9 / 48%);
}

.haven-threshold__scene.is-step-1 .haven-threshold__room-light {
  opacity: 0.48;
}

.haven-threshold__scene.is-step-2 .haven-threshold__room-light,
.haven-threshold__scene.is-step-3 .haven-threshold__room-light {
  opacity: 0.84;
}

.haven-threshold__gathering {
  position: absolute;
  z-index: 2;
  inset: 0;
  margin: 0;
  overflow: hidden;
}

.haven-threshold__gathering > img {
  position: absolute;
  z-index: 1;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center 48%;
}

.haven-threshold__gathering::after {
  position: absolute;
  z-index: 2;
  right: 0;
  bottom: 0;
  left: 0;
  height: 37%;
  background: linear-gradient(180deg, transparent, rgb(30 16 26 / 87%));
  content: "";
  pointer-events: none;
}

.haven-threshold__gathering > figcaption {
  position: absolute;
  z-index: 3;
  right: 0.75rem;
  bottom: 0.72rem;
  left: 0.75rem;
  display: grid;
  gap: 0.15rem;
  color: #fff4ed;
  text-shadow: 0 0.15rem 0.65rem rgb(20 10 17 / 75%);
}

.haven-threshold__gathering > figcaption > span {
  font-family: var(--font-detail);
  font-size: clamp(0.46rem, 1.5vw, 0.62rem);
  font-weight: 820;
  letter-spacing: 0.09em;
  text-transform: uppercase;
}

.haven-threshold__gathering > figcaption > strong {
  font-family: var(--font-display);
  font-size: clamp(0.86rem, 3.4vw, 1.35rem);
  line-height: 1.06;
}

.haven-threshold__content {
  display: grid;
  align-content: center;
  justify-items: start;
  min-height: 26rem;
  padding: 1.4rem;
  color: var(--story-copy);
  background:
    radial-gradient(circle at 100% 0%, color-mix(in srgb, var(--story-accent) 13%, transparent), transparent 41%),
    var(--story-surface);
}

.haven-threshold__chapter {
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
}

.haven-threshold__content .eyebrow {
  margin: 0;
  color: var(--story-accent);
}

.haven-threshold__count {
  margin: 0;
  color: var(--story-muted);
  font-size: 0.7rem;
  font-weight: 740;
  white-space: nowrap;
}

.haven-threshold__progress {
  display: flex;
  align-items: center;
  gap: 0.62rem;
  padding: 0;
  margin-block: 1rem 1.1rem;
  list-style: none;
}

.haven-threshold__progress > li {
  display: grid;
  width: 2rem;
  aspect-ratio: 1;
  place-items: center;
  color: var(--story-muted);
  background: color-mix(in srgb, var(--story-surface-deep) 75%, transparent);
  border: 1px solid var(--story-line);
  border-radius: 50%;
  font-size: 0.76rem;
  font-weight: 800;
  transition: background-color 220ms ease, border-color 220ms ease, color 220ms ease;
}

.haven-threshold__progress > li.is-current {
  color: var(--story-copy);
  border-color: var(--story-accent);
}

.haven-threshold__progress > li.is-answered {
  color: var(--story-copy);
  background: color-mix(in srgb, var(--story-accent) 36%, var(--story-surface));
  border-color: var(--story-accent);
}

.haven-threshold__stage-name {
  margin: 0 0 0.35rem;
  color: var(--story-accent);
  font-family: var(--font-detail);
  font-size: 0.7rem;
  font-weight: 820;
  letter-spacing: 0.085em;
  text-transform: uppercase;
}

.haven-threshold__content h2 {
  max-width: 22rem;
  margin: 0 0 0.72rem;
  color: var(--story-copy);
  font-size: clamp(1.75rem, 4vw, 2.55rem);
  line-height: 1.08;
}

.haven-threshold__story {
  max-width: 34rem;
  margin: 0;
  color: var(--story-muted);
  line-height: 1.7;
}

.haven-threshold__whisper {
  margin-block: 0.9rem 1.1rem;
  color: var(--story-copy);
  font-family: var(--font-display);
  font-size: 0.9rem;
  font-style: italic;
}

.haven-threshold__action {
  max-width: 100%;
}

.haven-threshold__content .text-button {
  margin-block-start: 0.85rem;
  color: var(--story-muted);
}

@media (min-width: 56rem) {
  .haven-threshold {
    grid-template-columns: minmax(0, 1.08fr) minmax(23rem, 0.92fr);
  }

  .haven-threshold__scene,
  .haven-threshold__content {
    min-height: 35rem;
  }

  .haven-threshold__content {
    padding: clamp(2rem, 4vw, 3.5rem);
  }

  .haven-threshold__arch {
    width: min(72%, 23rem);
  }

  .haven-threshold__gathering > figcaption {
    right: 1.1rem;
    bottom: 1rem;
    left: 1.1rem;
    gap: 0.22rem;
  }
}

@media (prefers-reduced-motion: reduce) {
  .haven-threshold__door,
  .haven-threshold__room-light,
  .haven-threshold__progress > li {
    transition: none;
  }
}
.haven-threshold__gathering.is-glimpsed { filter: brightness(0.7) saturate(0.86); }
</style>
