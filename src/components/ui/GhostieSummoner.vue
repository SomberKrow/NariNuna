<script setup lang="ts">
import { Sparkles, X } from "@lucide/vue";
import { AnimatePresence, motion } from "motion-v";
import { ref } from "vue";
import { useReducedMotion } from "@/composables/useReducedMotion";

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
        :initial="reducedMotion ? { opacity: 1 } : { opacity: 0, y: 24, scale: 0.9 }"
        :animate="{ opacity: 1, y: 0, scale: 1 }"
        :exit="reducedMotion ? { opacity: 0 } : { opacity: 0, y: 12, scale: 0.96 }"
        :transition="{ duration: reducedMotion ? 0 : 0.28 }"
      >
        <button type="button" aria-label="Send Ghostie back" @click="open = false">
          <X :size="16" aria-hidden="true" />
        </button>
        <img src="/media/generated/ghostie-256.webp" width="150" height="150" alt="A lavender Ghostie peeks in with a knowing smile" />
        <p><strong>You rang?</strong><br />Hydrate. Unclench your jaw. Continue.</p>
      </motion.div>
    </AnimatePresence>
    <button class="ghostie-summoner__button" type="button" :aria-expanded="open" @click="open = !open">
      <Sparkles :size="18" aria-hidden="true" />
      Call a Ghostie
    </button>
  </div>
</template>
