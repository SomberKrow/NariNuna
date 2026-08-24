<script setup lang="ts">
import { ArrowUpRight, HeartHandshake, ShieldCheck } from "@lucide/vue";
import { computed, ref } from "vue";
import { storybookPostcards } from "@/data/artwork";
import { discordUrl } from "@/data/socials";

const step = ref(0);
const stages = [
  {
    title: "The door is warm to the touch.",
    text: "The Haven is more than an invite link. Knock, and take a moment to understand the room first.",
    action: "Knock gently"
  },
  {
    title: "Someone moves the pillow barricade.",
    text: "People can be loud, quiet, awkward, excited, tired, or gloriously strange. Cruelty still stays outside.",
    action: "Leave the armor by the door"
  },
  {
    title: "One promise before you enter.",
    text: "Treat people like human beings. Respect boundaries. Protect the fun without trying to own it.",
    action: "Promise kindness"
  }
];

const currentStage = computed(() => stages[Math.min(step.value, stages.length - 1)]);
</script>

<template>
  <section class="haven-door" aria-labelledby="haven-door-title">
    <div class="haven-door__art" aria-hidden="true">
      <img :src="storybookPostcards.haven" width="960" height="540" alt="" loading="lazy" />
      <div class="haven-door__progress"><span v-for="index in 3" :key="index" :class="{ active: step >= index }"></span></div>
    </div>
    <div class="haven-door__content">
      <p class="eyebrow">A door deeper inside</p>
      <template v-if="step < stages.length">
        <h2 id="haven-door-title">{{ currentStage.title }}</h2>
        <p>{{ currentStage.text }}</p>
        <button class="button button--ember" type="button" @click="step += 1">
          <ShieldCheck v-if="step === 2" :size="18" aria-hidden="true" />
          <HeartHandshake v-else :size="18" aria-hidden="true" />
          {{ currentStage.action }}
        </button>
      </template>
      <template v-else>
        <h2 id="haven-door-title">All right, Ghostie. Come in.</h2>
        <p>You found the community entrance because you took the time to learn what the Haven protects.</p>
        <a class="button button--emerald" :href="discordUrl" target="_blank" rel="noreferrer noopener">
          Enter Nari's Haven on Discord
          <ArrowUpRight :size="18" aria-hidden="true" />
          <span class="sr-only"> (opens in a new tab)</span>
        </a>
        <button class="text-button" type="button" @click="step = 0">Close the door behind me</button>
      </template>
    </div>
  </section>
</template>
