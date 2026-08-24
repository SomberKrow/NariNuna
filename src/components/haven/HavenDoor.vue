<script setup lang="ts">
import { ArrowUpRight, HeartHandshake, ShieldCheck } from "@lucide/vue";
import { computed, ref } from "vue";
import GhostieIllustration from "@/components/art/GhostieIllustration.vue";
import { discordUrl } from "@/data/socials";

const step = ref(0);
const stages = [
  { title: "The door is warm to the touch.", text: "The Haven is more than an invite link. Knock, and take a moment to understand the room first.", action: "Knock gently" },
  { title: "Okay. Somebody is definitely home.", text: "The latch clicks, a Ghostie peeks around the door, and the pillow barricade gets dragged approximately six inches out of the way.", action: "Say hi to the Ghostie" },
  { title: "One promise before you enter.", text: "Treat people like human beings. Respect boundaries. Protect the fun without trying to own it.", action: "Promise kindness" }
];
const currentStage = computed(() => stages[Math.min(step.value, stages.length - 1)]);
</script>

<template>
  <section class="haven-threshold" aria-labelledby="haven-door-title">
    <div class="haven-threshold__scene" :class="`is-step-${step}`" aria-hidden="true">
      <div class="haven-threshold__stars"><i></i><i></i><i></i><i></i></div>
      <div class="haven-threshold__arch">
        <div class="haven-threshold__room-light"></div>
        <div class="haven-threshold__pillow haven-threshold__pillow--one"></div>
        <div class="haven-threshold__pillow haven-threshold__pillow--two"></div>
        <GhostieIllustration class="haven-threshold__ghostie" variant="welcome" bare />
        <div class="haven-threshold__door">
          <div class="haven-threshold__door-panel"></div>
          <div class="haven-threshold__knob"></div>
          <div class="haven-threshold__sign"><span>THE HAVEN</span><small>knock gently</small></div>
        </div>
      </div>
      <div class="haven-threshold__mat">COME AS YOU ARE</div>
    </div>

    <div class="haven-threshold__content" aria-live="polite">
      <p class="eyebrow">A door deeper inside</p>
      <template v-if="step < stages.length">
        <h2 id="haven-door-title">{{ currentStage.title }}</h2>
        <p>{{ currentStage.text }}</p>
        <div class="haven-threshold__progress" aria-hidden="true"><span v-for="index in stages.length" :key="index" :class="{ active: step >= index - 1 }"></span></div>
        <button class="button button--ember" type="button" @click="step += 1">
          <ShieldCheck v-if="step === 2" :size="18" aria-hidden="true" />
          <HeartHandshake v-else :size="18" aria-hidden="true" />
          {{ currentStage.action }}
        </button>
      </template>
      <template v-else>
        <h2 id="haven-door-title">All right, Ghostie. Come in.</h2>
        <p>The door is open. You found the community entrance because you took the time to learn what the Haven protects.</p>
        <a class="button button--emerald" :href="discordUrl" target="_blank" rel="noreferrer noopener">Enter Nari's Haven on Discord <ArrowUpRight :size="18" aria-hidden="true" /><span class="sr-only"> (opens in a new tab)</span></a>
        <button class="text-button" type="button" @click="step = 0">Close the door behind me</button>
      </template>
    </div>
  </section>
</template>

<style scoped>
.haven-threshold { display: grid; overflow: hidden; color: var(--story-copy); background: var(--story-surface); border: 1px solid var(--story-line); border-radius: 0.8rem; box-shadow: 0 1rem 3rem rgb(15 9 13 / 18%); }
.haven-threshold__scene { position: relative; min-height: 20rem; overflow: hidden; isolation: isolate; background: radial-gradient(circle at 50% 62%, rgb(228 177 117 / 18%), transparent 32%), linear-gradient(180deg, #3b2637, #241720 72%); }
.haven-threshold__scene::before { position: absolute; inset: 0; z-index: -1; background: repeating-linear-gradient(0deg, transparent 0 3.15rem, rgb(255 242 228 / 4%) 3.15rem 3.2rem), repeating-linear-gradient(90deg, transparent 0 5rem, rgb(255 242 228 / 3%) 5rem 5.05rem); content: ""; }
.haven-threshold__arch { --door-angle: 0deg; position: absolute; bottom: 2.4rem; left: 50%; width: min(68%, 18rem); height: 82%; overflow: hidden; background: #1a1118; border: 0.55rem solid #6e4d52; border-bottom: 0; border-radius: 9rem 9rem 0 0; box-shadow: 0 0 0 0.18rem rgb(233 198 168 / 15%), 0 1.5rem 3rem rgb(5 2 5 / 38%); transform: translateX(-50%); perspective: 900px; }
.haven-threshold__room-light { position: absolute; inset: 0; background: radial-gradient(circle at 50% 46%, rgb(255 219 151 / 72%), transparent 33%), linear-gradient(180deg, #805e58, #4f3545 70%); opacity: 0.18; transition: opacity 360ms ease; }
.haven-threshold__door { position: absolute; inset: 0; z-index: 4; overflow: hidden; background: linear-gradient(90deg, rgb(255 255 255 / 8%), transparent 18%), linear-gradient(145deg, #704a54, #4a303c 58%, #38232f); border-right: 0.16rem solid rgb(30 15 23 / 55%); transform: rotateY(var(--door-angle)); transform-origin: left center; transform-style: preserve-3d; transition: transform 520ms cubic-bezier(0.22, 0.78, 0.22, 1); }
.haven-threshold__door-panel { position: absolute; inset: 2.2rem 1.35rem 2.5rem; border: 1px solid rgb(235 201 181 / 24%); border-radius: 7rem 7rem 0.55rem 0.55rem; box-shadow: inset 0 0 0 0.45rem rgb(39 20 29 / 16%); }
.haven-threshold__knob { position: absolute; right: 1.45rem; top: 56%; width: 0.85rem; aspect-ratio: 1; background: #d6aa71; border: 0.15rem solid #6f5140; border-radius: 50%; box-shadow: 0 0 0 0.3rem rgb(31 16 22 / 18%); }
.haven-threshold__sign { position: absolute; top: 28%; left: 50%; display: grid; width: 8.6rem; gap: 0.12rem; padding: 0.6rem 0.65rem; color: #3b2730; background: #ead7bd; border: 2px solid #7a5852; box-shadow: 0 0.45rem 0 rgb(36 20 27 / 18%); text-align: center; transform: translateX(-50%) rotate(-2deg); }
.haven-threshold__sign::before,
.haven-threshold__sign::after { position: absolute; top: -1.2rem; width: 1px; height: 1.25rem; background: #8b6a60; content: ""; }
.haven-threshold__sign::before { left: 1.3rem; transform: rotate(13deg); }
.haven-threshold__sign::after { right: 1.3rem; transform: rotate(-13deg); }
.haven-threshold__sign span { font-family: var(--font-display); font-size: 0.92rem; font-style: italic; font-weight: 800; letter-spacing: 0.05em; }
.haven-threshold__sign small { font-family: var(--font-detail); font-size: 0.51rem; font-weight: 800; letter-spacing: 0.08em; text-transform: uppercase; }
.haven-threshold__ghostie { position: absolute; z-index: 3; right: -1.2rem; bottom: -0.8rem; width: 8.4rem; height: 7rem; opacity: 0; transform: translateX(2.5rem) rotate(7deg); transition: opacity 300ms ease 80ms, transform 420ms cubic-bezier(0.22, 0.78, 0.22, 1); }
.haven-threshold__pillow { position: absolute; z-index: 2; bottom: 0.35rem; width: 5.6rem; height: 2.6rem; background: #9b789c; border: 2px solid #604961; border-radius: 52% 48% 44% 56%; box-shadow: inset 0 -0.5rem 0 rgb(61 39 56 / 12%); transition: transform 420ms ease; }
.haven-threshold__pillow--one { left: 2.4rem; transform: rotate(8deg); }
.haven-threshold__pillow--two { right: 2.1rem; background: #bc826f; border-color: #754f4d; transform: rotate(-7deg); }
.haven-threshold__mat { position: absolute; z-index: 5; bottom: 0.75rem; left: 50%; padding: 0.35rem 1.2rem; color: #d9c4b7; background: #39272e; border: 1px solid rgb(236 211 196 / 15%); border-radius: 50%; font-family: var(--font-detail); font-size: 0.48rem; font-weight: 850; letter-spacing: 0.12em; transform: translateX(-50%); }
.haven-threshold__stars i { position: absolute; width: 0.35rem; aspect-ratio: 1; background: #e5b675; border-radius: 50%; box-shadow: 0 0 0.7rem rgb(229 182 117 / 52%); }
.haven-threshold__stars i:nth-child(1) { top: 18%; left: 13%; }
.haven-threshold__stars i:nth-child(2) { top: 32%; right: 12%; }
.haven-threshold__stars i:nth-child(3) { bottom: 25%; left: 19%; }
.haven-threshold__stars i:nth-child(4) { top: 11%; right: 23%; }
.haven-threshold__scene.is-step-1 .haven-threshold__arch { --door-angle: -18deg; }
.haven-threshold__scene.is-step-2 .haven-threshold__arch { --door-angle: -46deg; }
.haven-threshold__scene.is-step-3 .haven-threshold__arch { --door-angle: -72deg; }
.haven-threshold__scene.is-step-1 .haven-threshold__room-light { opacity: 0.44; }
.haven-threshold__scene.is-step-2 .haven-threshold__room-light,
.haven-threshold__scene.is-step-3 .haven-threshold__room-light { opacity: 0.82; }
.haven-threshold__scene.is-step-1 .haven-threshold__ghostie,
.haven-threshold__scene.is-step-2 .haven-threshold__ghostie,
.haven-threshold__scene.is-step-3 .haven-threshold__ghostie { opacity: 1; transform: translateX(0) rotate(0); }
.haven-threshold__scene.is-step-2 .haven-threshold__pillow--one,
.haven-threshold__scene.is-step-3 .haven-threshold__pillow--one { transform: translateX(-1.4rem) rotate(-7deg); }
.haven-threshold__scene.is-step-2 .haven-threshold__pillow--two,
.haven-threshold__scene.is-step-3 .haven-threshold__pillow--two { transform: translateX(1.3rem) rotate(6deg); }
.haven-threshold__content { display: grid; align-content: center; justify-items: start; min-height: 19rem; padding: 1.4rem; color: var(--story-copy); background: radial-gradient(circle at 100% 0%, color-mix(in srgb, var(--story-accent) 12%, transparent), transparent 40%), var(--story-surface); }
.haven-threshold__content h2 { color: var(--story-copy); }
.haven-threshold__content > p:not(.eyebrow) { max-width: 38rem; color: var(--story-muted); }
.haven-threshold__content .eyebrow { color: var(--story-accent); }
.haven-threshold__content .text-button { margin-block-start: 0.85rem; color: var(--story-muted); }
.haven-threshold__progress { display: flex; gap: 0.35rem; margin-block: 0.45rem 1rem; }
.haven-threshold__progress span { width: 1.7rem; height: 0.24rem; background: color-mix(in srgb, var(--story-muted) 22%, transparent); border-radius: 999px; transition: background-color 220ms ease; }
.haven-threshold__progress span.active { background: var(--story-accent); }
@media (min-width: 56rem) {
  .haven-threshold { grid-template-columns: minmax(0, 1.08fr) minmax(22rem, 0.92fr); }
  .haven-threshold__scene { min-height: 31rem; }
  .haven-threshold__content { min-height: 31rem; padding: clamp(2rem, 4vw, 3.5rem); }
  .haven-threshold__arch { width: min(64%, 21rem); }
  .haven-threshold__ghostie { width: 10rem; height: 8.5rem; }
}
@media (prefers-reduced-motion: reduce) {
  .haven-threshold__door,
  .haven-threshold__ghostie,
  .haven-threshold__pillow,
  .haven-threshold__room-light { transition: none; }
}
</style>
