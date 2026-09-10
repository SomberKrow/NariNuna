<script setup lang="ts">
import { ArrowDown, Sparkles } from "@lucide/vue";
import { ref } from "vue";
import { prinnyEasterEggArtwork } from "@/data/easterEgg";

const isOpen = ref(false);
</script>

<template>
  <aside class="hidden-floorboard" :class="{ 'hidden-floorboard--open': isOpen }" aria-label="A small hidden joke beneath the Haven floor">
    <button
      class="hidden-floorboard__trigger"
      type="button"
      :aria-expanded="isOpen"
      aria-controls="hidden-floorboard-reveal"
      @click="isOpen = !isOpen"
    >
      <span class="hidden-floorboard__notch" aria-hidden="true"><Sparkles :size="15" /></span>
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
        <p class="hidden-floorboard__eyebrow">A little light beneath the boards.</p>
        <p>A tiny dood has been keeping this entrance warm. There’s a whole room down there.</p>
        <a class="hidden-floorboard__descent" href="/the-prinny-cult/">
          Follow the little light
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
  perspective: 700px;
  justify-items: center;
  margin: 2rem auto 0;
}

.hidden-floorboard__trigger {
  display: inline-flex;
  min-height: 2.75rem;
  align-items: center;
  width: 100%;
  justify-content: center;
  gap: 0.75rem;
  padding: 1.15rem 1rem;
  color: var(--story-copy);
  background:
    repeating-linear-gradient(2deg, transparent 0 0.65rem, color-mix(in srgb, var(--storybook-gold) 9%, transparent) 0.7rem 0.75rem, transparent 0.8rem 1.2rem),
    var(--story-surface-deep);
  border: 1px solid var(--story-line);
  border-radius: 0.2rem;
  box-shadow: 0 0.4rem 0 var(--bg-inset), inset 0 1px color-mix(in srgb, var(--storybook-gold) 28%, transparent);
  transform-origin: top;
  transition: transform 280ms var(--ease-out), box-shadow 280ms var(--ease-out);
  font-size: 0.875rem;
  font-weight: 720;
  cursor: pointer;
}

.hidden-floorboard__trigger:hover,
.hidden-floorboard__trigger:focus-visible {
  color: var(--story-copy);
  border-color: var(--story-accent);
}

.hidden-floorboard__notch {
  display: grid;
  flex: 0 0 1.75rem;
  height: 1.75rem;
  place-items: center;
  color: var(--storybook-gold);
  border: 1px solid var(--story-line);
  border-radius: 50%;
}

.hidden-floorboard--open .hidden-floorboard__trigger {
  transform: rotateX(12deg);
  box-shadow: 0 0.65rem 1rem rgb(0 0 0 / 25%);
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
  background: radial-gradient(ellipse at 12% 50%, color-mix(in srgb, var(--storybook-gold) 20%, transparent), transparent 62%), var(--bg-inset);
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
  font-size: 0.75rem;
  font-weight: 800;
  letter-spacing: 0.07em;
  text-transform: uppercase;
}

.hidden-floorboard__reveal p:not(.hidden-floorboard__eyebrow) {
  margin: 0 0 0.55rem;
  color: var(--story-muted);
  font-size: 0.875rem;
  line-height: 1.45;
}

.hidden-floorboard__descent {
  display: inline-flex;
  min-height: 2.75rem;
  align-items: center;
  gap: 0.35rem;
  color: var(--story-copy);
  font-size: 0.875rem;
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
@media (prefers-reduced-motion: reduce) {
  .hidden-floorboard__trigger { transition: none; }
  .hidden-floorboard--open .hidden-floorboard__trigger { transform: none; }
}
</style>
