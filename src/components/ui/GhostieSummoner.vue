<script setup lang="ts">
import { Sparkles, X } from "@lucide/vue";
import { AnimatePresence, motion } from "motion-v";
import { ref } from "vue";
import { useReducedMotion } from "@/composables/useReducedMotion";
import { ghostieArtwork } from "@/data/artwork";

const open = ref(false);
const reducedMotion = useReducedMotion();
</script>

<template>
  <div class="ghostie-summoner">
    <AnimatePresence>
      <motion.div
        v-if="open"
        class="ghostie-summoner__visit"
        role="status"
        :initial="reducedMotion ? { opacity: 1 } : { opacity: 0, y: 18, scale: 0.94 }"
        :animate="{ opacity: 1, y: 0, scale: 1 }"
        :exit="reducedMotion ? { opacity: 0 } : { opacity: 0, y: 10, scale: 0.96 }"
        :transition="{ duration: reducedMotion ? 0 : 0.24 }"
      >
        <button type="button" aria-label="Send Ghostie back" @click="open = false">
          <X :size="16" aria-hidden="true" />
        </button>
        <img :src="ghostieArtwork.heart" width="140" height="140" alt="A cozy storybook Ghostie pops in with a tiny heart" />
        <p><strong>Hi, Ghostie.</strong><br />Drink some water. Unclench your jaw. Find a comfortable corner.</p>
      </motion.div>
    </AnimatePresence>
    <button class="ghostie-summoner__button" type="button" :aria-expanded="open" @click="open = !open">
      <Sparkles :size="17" aria-hidden="true" />
      <span>Call a Ghostie</span>
    </button>
  </div>
</template>
