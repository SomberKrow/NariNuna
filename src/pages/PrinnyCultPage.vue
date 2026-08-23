<script setup lang="ts">
import { ArrowLeft, Feather, ShieldQuestion, Sparkles } from "@lucide/vue";
import { onBeforeUnmount, onMounted, ref } from "vue";
import { prinnyCultAssets, prinnyRosterCapacity, suppliedPrinnyArtwork } from "@/data/prinnyCult";

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
  <main id="main-content" class="cult-page cult-page--collection">
    <div class="cult-page__environment" :style="{ backgroundImage: `url('${prinnyCultAssets.room}')` }" aria-hidden="true"></div>
    <a class="cult-page__escape" href="/haven/"><ArrowLeft :size="18" aria-hidden="true" /> Return to the floorboard</a>

    <section class="cult-collection">
      <header class="cult-collection__header">
        <img :src="prinnyCultAssets.banner" width="380" height="125" alt="" aria-hidden="true" />
        <p class="eyebrow"><Sparkles :size="15" aria-hidden="true" /> Unauthorized basement annex · extremely serious business</p>
        <h1>The Prinny Cult</h1>
        <p>You found the hidden room, the ceremonial nonsense, and every single one of Nari's {{ prinnyRosterCapacity }} tiny agents of chaos.</p>
      </header>

      <section class="cult-collection__gallery" aria-label="Nari's original Prinny artwork collection">
        <article v-for="(prinny, index) in suppliedPrinnyArtwork" :key="prinny.assetId">
          <span>{{ String(index + 1).padStart(2, "0") }}</span>
          <img :src="prinny.src" width="190" height="190" :alt="prinny.alt" loading="lazy" />
        </article>
      </section>

      <div v-if="!accepted" class="cult-collection__oath">
        <img :src="prinnyCultAssets.membershipSeal" width="90" height="90" alt="" loading="lazy" />
        <ShieldQuestion :size="27" aria-hidden="true" />
        <p>I solemnly swear to respect the bit, honor the tiny chaos creatures, and never ask what happened to Rules Four through Ten.</p>
        <button class="button button--cream" type="button" @click="accepted = true">Accept the extremely serious oath</button>
      </div>

      <div v-else class="cult-collection__reward">
        <img :src="prinnyCultAssets.easterEggReward" width="160" height="130" alt="Ceremonial Prinny Cult membership reward" loading="lazy" />
        <Feather :size="28" aria-hidden="true" />
        <h2>Rule Eleven</h2>
        <p>When in doubt, add another Prinny and act like the plan was always this elaborate.</p>
        <button type="button" @click="incrementInspection">Inspect ceremonial pillow</button>
        <p aria-live="polite">Pillow inspection: {{ inspection }} / 11</p>
        <p v-if="inspection === 11"><strong>The pillow hums approvingly. The cult grows.</strong></p>
      </div>
    </section>
  </main>
</template>
