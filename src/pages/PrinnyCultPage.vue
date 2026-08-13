<script setup lang="ts">
import { ArrowLeft, Feather, ShieldQuestion } from "@lucide/vue";
import { onBeforeUnmount, onMounted, ref } from "vue";

const accepted = ref(false);
const inspection = ref(0);

function incrementInspection(): void {
  inspection.value = Math.min(inspection.value + 1, 11);
}

function handleKey(event: KeyboardEvent): void {
  if (event.key.toLowerCase() === "p") incrementInspection();
}

onMounted(() => window.addEventListener("keydown", handleKey));
onBeforeUnmount(() => window.removeEventListener("keydown", handleKey));
</script>

<template>
  <main id="main-content" class="cult-page">
    <a class="cult-page__escape" href="/haven/"><ArrowLeft :size="18" aria-hidden="true" /> Return to the floorboard</a>
    <section class="cult-page__card">
      <img src="/media/generated/ghostie-512.webp" width="260" height="260" alt="A Ghostie looks suspiciously pleased that you found this room" />
      <p class="eyebrow">Unauthorized basement annex · definitely normal</p>
      <h1>The Prinny Cult</h1>
      <p class="cult-page__lede">You have discovered eleven rules, one ceremonial pillow, and absolutely no licensed game assets. The commitment to the bit is now legally concerning.</p>

      <div v-if="!accepted" class="cult-page__oath">
        <ShieldQuestion :size="30" aria-hidden="true" />
        <p>I solemnly swear to respect the joke, leave through the marked exit, and never ask what happened to Rules Four through Ten.</p>
        <button class="button button--cream" type="button" @click="accepted = true">Accept the extremely serious oath</button>
      </div>

      <div v-else class="cult-page__reveal">
        <Feather :size="34" aria-hidden="true" />
        <h2>Rule Eleven</h2>
        <p>When in doubt, add another pillow and act like the plan was always this elaborate.</p>
        <button type="button" @click="incrementInspection">Inspect ceremonial pillow</button>
        <p aria-live="polite">Inspection level: {{ inspection }} / 11</p>
        <p v-if="inspection === 11"><strong>The pillow hums approvingly. You may leave.</strong></p>
      </div>
    </section>
  </main>
</template>
