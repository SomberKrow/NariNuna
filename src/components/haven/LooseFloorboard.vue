<script setup lang="ts">
import { ArrowDown, Sparkles } from "@lucide/vue";
import { ref } from "vue";
import { prinnyEasterEggArtwork } from "@/data/easterEgg";

const isOpen = ref(false);
</script>

<template>
  <aside class="hidden-floorboard" aria-label="A small hidden joke beneath the Haven floor">
    <button
      class="hidden-floorboard__trigger"
      type="button"
      :aria-expanded="isOpen"
      aria-controls="hidden-floorboard-reveal"
      @click="isOpen = !isOpen"
    >
      <Sparkles :size="15" aria-hidden="true" />
      {{ isOpen ? "Settle the loose floorboard" : "One floorboard looks a little loose" }}
    </button>

    <div v-if="isOpen" id="hidden-floorboard-reveal" class="hidden-floorboard__reveal">
      <img
        :src="prinnyEasterEggArtwork.src"
        width="160"
        height="160"
        :alt="prinnyEasterEggArtwork.alt"
        loading="lazy"
      />
      <div>
        <p class="hidden-floorboard__eyebrow">Okay, you found the tiny joke.</p>
        <p>There is exactly enough suspicious basement energy for one small dood.</p>
        <a class="hidden-floorboard__descent" href="/the-prinny-cult/">
          Peek underneath
          <ArrowDown :size="16" aria-hidden="true" />
        </a>
      </div>
    </div>
  </aside>
</template>

<style scoped>
.hidden-floorboard {
  display: grid;
  width: min(100%, 29rem);
  justify-items: center;
  margin: 1rem auto 0;
}

.hidden-floorboard__trigger {
  display: inline-flex;
  min-height: 2.75rem;
  align-items: center;
  gap: 0.4rem;
  padding: 0.5rem 0.75rem;
  color: var(--story-muted);
  background: transparent;
  border: 1px dashed var(--story-line);
  border-radius: 0.45rem;
  font-size: 0.7rem;
  font-weight: 720;
  cursor: pointer;
}

.hidden-floorboard__trigger:hover,
.hidden-floorboard__trigger:focus-visible {
  color: var(--story-copy);
  border-color: var(--story-accent);
}

.hidden-floorboard__reveal {
  display: grid;
  width: 100%;
  grid-template-columns: 5rem minmax(0, 1fr);
  align-items: center;
  gap: 0.8rem;
  padding: 0.8rem;
  margin-block-start: 0.65rem;
  color: var(--story-copy);
  background: color-mix(in srgb, var(--story-surface-deep) 88%, transparent);
  border: 1px solid var(--story-line);
  border-radius: 0.65rem;
  text-align: left;
}

.hidden-floorboard__reveal img {
  width: 5rem;
  aspect-ratio: 1;
  object-fit: contain;
}

.hidden-floorboard__eyebrow {
  margin: 0 0 0.2rem;
  color: var(--story-accent);
  font-family: var(--font-detail);
  font-size: 0.59rem;
  font-weight: 800;
  letter-spacing: 0.07em;
  text-transform: uppercase;
}

.hidden-floorboard__reveal p:not(.hidden-floorboard__eyebrow) {
  margin: 0 0 0.55rem;
  color: var(--story-muted);
  font-size: 0.75rem;
  line-height: 1.45;
}

.hidden-floorboard__descent {
  display: inline-flex;
  min-height: 2.4rem;
  align-items: center;
  gap: 0.35rem;
  color: var(--story-copy);
  font-size: 0.7rem;
  font-weight: 750;
  text-decoration: none;
}

.hidden-floorboard__descent:hover,
.hidden-floorboard__descent:focus-visible {
  color: var(--story-accent);
}

@media (max-width: 24rem) {
  .hidden-floorboard__reveal {
    grid-template-columns: 4rem minmax(0, 1fr);
    gap: 0.6rem;
    padding: 0.65rem;
  }

  .hidden-floorboard__reveal img {
    width: 4rem;
  }
}
</style>
