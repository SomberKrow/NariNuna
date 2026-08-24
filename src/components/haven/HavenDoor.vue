<script setup lang="ts">
import { ArrowUpRight, HeartHandshake, ShieldCheck } from "@lucide/vue";
import { computed, ref } from "vue";
import { environmentArtwork } from "@/data/artwork";
import { discordUrl } from "@/data/socials";

const knocksRequired = 3;
const step = ref(0);

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
  step.value = Math.min(step.value + 1, knocksRequired);
}

function closeDoor(): void {
  step.value = 0;
}
</script>

<template>
  <section
    class="haven-threshold"
    :class="{ 'haven-threshold--open': isOpen }"
    aria-labelledby="haven-door-title"
  >
    <div
      class="haven-threshold__scene"
      :class="`is-step-${step}`"
      :style="{ '--haven-room-art': `url('${environmentArtwork.havenGathering}')` }"
    >
      <div class="haven-threshold__wall" aria-hidden="true"></div>
      <div class="haven-threshold__lantern haven-threshold__lantern--left" aria-hidden="true"></div>
      <div class="haven-threshold__lantern haven-threshold__lantern--right" aria-hidden="true"></div>

      <div class="haven-threshold__arch">
        <div class="haven-threshold__room" aria-hidden="true"></div>
        <div class="haven-threshold__room-light" aria-hidden="true"></div>

        <button
          class="haven-threshold__door"
          type="button"
          :aria-label="isOpen ? 'The Haven doorway is open' : currentStage.action"
          :disabled="isOpen"
          @click="knock"
        >
          <span class="haven-threshold__door-grain" aria-hidden="true"></span>
          <span class="haven-threshold__door-panel" aria-hidden="true"></span>
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
        {{ isOpen ? "The door is yours to open." : "You can knock on the door, too." }}
      </p>

      <figure v-if="isOpen" class="haven-threshold__gathering">
        <img
          :src="environmentArtwork.havenGathering"
          width="1672"
          height="941"
          alt="Nari welcomes you into a lantern-lit autumn cottage surrounded by her cheerful little scythe-hairpin Ghosties"
          decoding="async"
        />
        <figcaption>
          <span>The Haven, after three knocks</span>
          <strong>We saved you a spot.</strong>
        </figcaption>
      </figure>
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
  min-height: 24rem;
  overflow: hidden;
  background:
    radial-gradient(ellipse at 50% 100%, rgb(229 157 92 / 18%), transparent 55%),
    linear-gradient(180deg, #493143, #2d1d2a 68%, #241821);
  isolation: isolate;
}

.haven-threshold__wall {
  position: absolute;
  inset: 0;
  background:
    repeating-linear-gradient(0deg, transparent 0 3.4rem, rgb(255 237 218 / 5%) 3.4rem 3.48rem),
    repeating-linear-gradient(90deg, transparent 0 5.8rem, rgb(255 237 218 / 3%) 5.8rem 5.88rem);
  mask-image: linear-gradient(180deg, rgb(0 0 0 / 70%), transparent 86%);
}

.haven-threshold__arch {
  --door-angle: 0deg;
  position: absolute;
  z-index: 2;
  bottom: 3.65rem;
  left: 50%;
  width: min(66%, 17.75rem);
  height: 78%;
  overflow: hidden;
  background: #20131d;
  border: 0.68rem solid #82606a;
  border-bottom: 0;
  border-radius: 10rem 10rem 0 0;
  box-shadow: 0 0 0 0.15rem rgb(241 205 176 / 25%), 0 1rem 3rem rgb(10 4 9 / 46%);
  perspective: 950px;
  transform: translateX(-50%);
}

.haven-threshold__room {
  position: absolute;
  inset: 0;
  background-image: var(--haven-room-art);
  background-position: 53% center;
  background-size: cover;
  filter: brightness(0.82) saturate(0.88);
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
  background: linear-gradient(145deg, #855b63 0%, #64404f 38%, #402a38 100%);
  border: 0;
  border-right: 0.16rem solid rgb(33 17 27 / 55%);
  border-radius: 9.5rem 9.5rem 0 0;
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
    repeating-linear-gradient(90deg, transparent 0 2.55rem, rgb(41 20 31 / 21%) 2.55rem 2.66rem),
    linear-gradient(90deg, rgb(255 244 225 / 10%), transparent 14%, transparent 86%, rgb(22 10 19 / 17%));
}

.haven-threshold__door-panel {
  position: absolute;
  inset: 2.15rem 1rem 1.9rem;
  border: 1px solid rgb(245 214 189 / 36%);
  border-radius: 8rem 8rem 0.7rem 0.7rem;
  box-shadow: inset 0 0 0 0.5rem rgb(49 25 37 / 16%);
}

.haven-threshold__door-moon {
  position: absolute;
  top: 12%;
  left: 50%;
  color: #efc78f;
  font-size: 1.2rem;
  text-shadow: 0 0 0.8rem rgb(240 185 115 / 58%);
  transform: translateX(-50%);
}

.haven-threshold__sign {
  position: absolute;
  top: 31%;
  left: 50%;
  display: grid;
  width: min(78%, 9.25rem);
  gap: 0.18rem;
  padding: 0.7rem 0.55rem;
  color: #432b37;
  background: linear-gradient(165deg, #f4e4cd, #dbc2aa);
  border: 1px solid #956f68;
  box-shadow: 0 0.38rem 0 rgb(36 19 30 / 21%);
  text-align: center;
  transform: translateX(-50%) rotate(-2deg);
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
  top: 58%;
  left: 50%;
  width: 2rem;
  height: 2.3rem;
  border: 0.22rem solid #d1a670;
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
  top: 67%;
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
  z-index: 1;
  top: 24%;
  width: 1.55rem;
  height: 2.2rem;
  background: linear-gradient(180deg, #f4c98b, #e39759);
  border: 0.16rem solid #75514b;
  border-radius: 35% 35% 28% 28%;
  box-shadow: 0 0 1.6rem 0.45rem rgb(235 176 107 / 26%);
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
  left: 9%;
}

.haven-threshold__lantern--right {
  right: 9%;
  top: 32%;
  transform: scale(0.85);
}

.haven-threshold__stepstone {
  position: absolute;
  z-index: 3;
  right: 11%;
  bottom: 2.75rem;
  left: 11%;
  height: 0.9rem;
  background: linear-gradient(180deg, #80646a, #573c47);
  border-radius: 0.4rem;
  box-shadow: 0 0.5rem 1.2rem rgb(13 7 12 / 35%);
}

.haven-threshold__mat {
  position: absolute;
  z-index: 5;
  bottom: 1.62rem;
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
  --door-angle: -78deg;
}

.haven-threshold__scene.is-step-1 .haven-threshold__room-light {
  opacity: 0.48;
}

.haven-threshold__scene.is-step-2 .haven-threshold__room-light,
.haven-threshold__scene.is-step-3 .haven-threshold__room-light {
  opacity: 0.84;
}

.haven-threshold--open .haven-threshold__scene {
  min-height: 0;
  aspect-ratio: 1672 / 941;
}

.haven-threshold__gathering {
  position: absolute;
  z-index: 8;
  inset: 0;
  display: grid;
  margin: 0;
  overflow: hidden;
  background: var(--story-surface-deep);
}

.haven-threshold__gathering > img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.haven-threshold__gathering::after {
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  height: 44%;
  background: linear-gradient(180deg, transparent, rgb(30 16 26 / 78%));
  content: "";
  pointer-events: none;
}

.haven-threshold__gathering > figcaption {
  position: absolute;
  z-index: 1;
  right: 1rem;
  bottom: 0.9rem;
  left: 1rem;
  display: grid;
  gap: 0.15rem;
  color: #fff4ed;
  text-shadow: 0 0.15rem 0.65rem rgb(20 10 17 / 75%);
}

.haven-threshold__gathering > figcaption > span {
  font-family: var(--font-detail);
  font-size: clamp(0.52rem, 1.6vw, 0.75rem);
  font-weight: 820;
  letter-spacing: 0.09em;
  text-transform: uppercase;
}

.haven-threshold__gathering > figcaption > strong {
  font-family: var(--font-display);
  font-size: clamp(1rem, 4vw, 2.25rem);
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

  .haven-threshold--open {
    grid-template-columns: 1fr;
  }

  .haven-threshold:not(.haven-threshold--open) .haven-threshold__scene,
  .haven-threshold:not(.haven-threshold--open) .haven-threshold__content {
    min-height: 35rem;
  }

  .haven-threshold__content {
    padding: clamp(2rem, 4vw, 3.5rem);
  }

  .haven-threshold__arch {
    width: min(64%, 21rem);
  }

  .haven-threshold__gathering > figcaption {
    right: 2.25rem;
    bottom: 2rem;
    left: 2.25rem;
    gap: 0.4rem;
  }
}

@media (prefers-reduced-motion: reduce) {
  .haven-threshold__door,
  .haven-threshold__room-light,
  .haven-threshold__progress > li {
    transition: none;
  }
}
</style>
