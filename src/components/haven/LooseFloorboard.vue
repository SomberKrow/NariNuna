<script setup lang="ts">
import { ArrowDown, KeyRound, LockKeyhole, Sparkles } from "@lucide/vue";
import { computed, ref } from "vue";
import { suppliedPrinnyArtwork } from "@/data/prinnyCult";

const knocksRequired = 3;
const knocks = ref(0);
const isOpen = ref(false);
const incorrectAnswer = ref("");
const gatekeeper = suppliedPrinnyArtwork.find(({ assetId }) => assetId === "original") ?? suppliedPrinnyArtwork[0];

const whispers = [
  "Something beneath the boards just whispered, 'dood.'",
  "The floorboard shifts. There are tiny claw marks underneath.",
  "A suspiciously small voice demands one more knock."
] as const;

const isListening = computed(() => knocks.value >= knocksRequired);
const currentWhisper = computed(() => whispers[Math.min(knocks.value, knocksRequired - 1)]);

function investigate(): void {
  knocks.value = Math.min(knocks.value + 1, knocksRequired);
}

function answerPassword(answer: string): void {
  if (answer === "DOOD") {
    incorrectAnswer.value = "";
    isOpen.value = true;
    return;
  }

  incorrectAnswer.value = answer === "PLEASE"
    ? "Polite. Unfortunately, the floorboard requires considerably more dood."
    : "The tiny gatekeeper looks offended. That is definitely not the sacred word.";
}
</script>

<template>
  <aside class="hidden-floorboard" :class="{ 'hidden-floorboard--awake': knocks > 0 }" aria-label="A suspicious disturbance beneath the Haven floor">
    <div class="hidden-floorboard__scene" aria-hidden="true">
      <div class="hidden-floorboard__boards"></div>
      <img
        v-if="gatekeeper && knocks > 0"
        class="hidden-floorboard__gatekeeper"
        :class="{ 'is-listening': isListening }"
        :src="gatekeeper.src"
        width="160"
        height="160"
        alt=""
        loading="lazy"
      />
      <span class="hidden-floorboard__sigil">✶</span>
    </div>

    <div class="hidden-floorboard__story">
      <p class="hidden-floorboard__eyebrow">
        <Sparkles :size="13" aria-hidden="true" />
        {{ isOpen ? "A deeply questionable invitation" : "Something else is down here" }}
      </p>

      <template v-if="!isListening">
        <p class="hidden-floorboard__whisper" aria-live="polite">{{ currentWhisper }}</p>
        <button class="hidden-floorboard__button" type="button" @click="investigate">
          <LockKeyhole :size="16" aria-hidden="true" />
          {{ knocks === 0 ? "Inspect the loose floorboard" : "Knock on the floorboard again" }}
          <span class="sr-only">{{ knocks }} of {{ knocksRequired }} knocks answered.</span>
        </button>
      </template>

      <template v-else-if="!isOpen">
        <p class="hidden-floorboard__whisper">A tiny gatekeeper appears. <strong>"Sacred password, dood?"</strong></p>
        <div class="hidden-floorboard__passwords" aria-label="Choose the sacred password">
          <button type="button" @click="answerPassword('PLEASE')">Please?</button>
          <button type="button" @click="answerPassword('SARDINE')">Sardine?</button>
          <button type="button" @click="answerPassword('DOOD')">Dood.</button>
        </div>
        <p v-if="incorrectAnswer" class="hidden-floorboard__response" aria-live="polite">{{ incorrectAnswer }}</p>
      </template>

      <template v-else>
        <p class="hidden-floorboard__whisper"><KeyRound :size="16" aria-hidden="true" /> The boards open. Candlelight rises from somewhere it absolutely shouldn't.</p>
        <a class="hidden-floorboard__descent" href="/the-prinny-cult/">
          Descend beneath the Haven
          <ArrowDown :size="17" aria-hidden="true" />
        </a>
      </template>
    </div>
  </aside>
</template>

<style scoped>
.hidden-floorboard {
  display: grid;
  width: min(100%, 41rem);
  grid-template-columns: minmax(5.6rem, 7rem) minmax(0, 1fr);
  gap: 0.9rem;
  align-items: center;
  padding: 0.9rem;
  margin: 2rem auto 0;
  color: var(--story-copy);
  background: color-mix(in srgb, var(--story-surface-deep) 86%, transparent);
  border: 1px solid var(--story-line);
  border-radius: 0.8rem;
}

.hidden-floorboard__scene {
  position: relative;
  min-height: 7.25rem;
  overflow: hidden;
  background: radial-gradient(ellipse at 50% 100%, rgb(230 161 90 / 18%), transparent 65%), #362631;
  border: 1px solid rgb(238 205 175 / 19%);
  border-radius: 0.55rem;
  isolation: isolate;
}

.hidden-floorboard__boards {
  position: absolute;
  z-index: 2;
  right: -5%;
  bottom: -0.18rem;
  left: -5%;
  height: 37%;
  background: repeating-linear-gradient(90deg, #795543 0 1.7rem, #4c342d 1.7rem 1.83rem);
  border-top: 1px solid rgb(247 204 155 / 45%);
  box-shadow: 0 -0.48rem 1rem rgb(12 7 12 / 50%);
  transform: rotate(-3deg);
}

.hidden-floorboard__gatekeeper {
  position: absolute;
  right: 0;
  bottom: 13%;
  left: 0;
  width: 91%;
  margin-inline: auto;
  filter: drop-shadow(0 0.5rem 0.8rem rgb(0 0 0 / 40%));
  transform: translateY(16%);
  transition: transform 260ms ease;
}

.hidden-floorboard__gatekeeper.is-listening {
  transform: translateY(-2%);
}

.hidden-floorboard__sigil {
  position: absolute;
  z-index: 3;
  right: 0.32rem;
  bottom: 0.38rem;
  color: #ecc57f;
  font-size: 1rem;
}

.hidden-floorboard__story {
  min-width: 0;
}

.hidden-floorboard__eyebrow {
  display: flex;
  align-items: center;
  gap: 0.3rem;
  margin: 0 0 0.38rem;
  color: var(--story-accent);
  font-family: var(--font-detail);
  font-size: 0.59rem;
  font-weight: 780;
  letter-spacing: 0.055em;
  text-transform: uppercase;
}

.hidden-floorboard__whisper {
  display: flex;
  align-items: center;
  gap: 0.4rem;
  margin: 0 0 0.65rem;
  color: var(--story-copy);
  font-size: 0.79rem;
  line-height: 1.48;
}

.hidden-floorboard__button,
.hidden-floorboard__descent {
  display: inline-flex;
  min-height: 2.5rem;
  align-items: center;
  gap: 0.4rem;
  padding: 0.48rem 0.68rem;
  color: var(--story-copy);
  background: transparent;
  border: 1px dashed var(--story-line);
  border-radius: 0.42rem;
  font-size: 0.7rem;
  font-weight: 720;
  text-decoration: none;
  cursor: pointer;
}

.hidden-floorboard__descent {
  color: #f6e6d0;
  background: linear-gradient(135deg, #744d56, #4c3147);
  border-style: solid;
  border-color: rgb(246 208 163 / 48%);
}

.hidden-floorboard__passwords {
  display: flex;
  flex-wrap: wrap;
  gap: 0.35rem;
}

.hidden-floorboard__passwords > button {
  min-height: 2.35rem;
  padding: 0.4rem 0.62rem;
  color: var(--story-copy);
  background: var(--story-surface);
  border: 1px solid var(--story-line);
  border-radius: 0.35rem;
  font-family: var(--font-detail);
  font-size: 0.66rem;
  cursor: pointer;
}

.hidden-floorboard__passwords > button:hover,
.hidden-floorboard__passwords > button:focus-visible,
.hidden-floorboard__button:hover {
  border-color: var(--story-accent);
}

.hidden-floorboard__response {
  margin: 0.48rem 0 0;
  color: var(--story-muted);
  font-size: 0.72rem;
  line-height: 1.4;
}

@media (max-width: 24rem) {
  .hidden-floorboard {
    grid-template-columns: 5.2rem minmax(0, 1fr);
    gap: 0.65rem;
    padding: 0.65rem;
  }

  .hidden-floorboard__scene {
    min-height: 6.4rem;
  }

  .hidden-floorboard__button,
  .hidden-floorboard__descent {
    padding-inline: 0.48rem;
    font-size: 0.65rem;
  }
}

@media (prefers-reduced-motion: reduce) {
  .hidden-floorboard__gatekeeper {
    transition: none;
  }
}
</style>
