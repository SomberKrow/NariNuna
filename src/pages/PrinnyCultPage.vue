<script setup lang="ts">
import { ArrowLeft, Bomb, ClipboardCheck, Fish, Sparkles } from "@lucide/vue";
import { ref } from "vue";
import { suppliedPrinnyArtwork } from "@/data/prinnyCult";

const clockedIn = ref(false);
const featuredPrinnies = suppliedPrinnyArtwork.slice(0, 3);
const notices = [
  { icon: Bomb, title: "Throwing policy", text: "Strongly discouraged indoors. Explosions create paperwork, scorch marks, and awkward questions from upstairs." },
  { icon: Fish, title: "Ration policy", text: "Sardines have been requisitioned. The request is stamped, countersigned, and somehow still pending." },
  { icon: ClipboardCheck, title: "Reincarnation queue", text: "Take a number, finish your shift, and complain with appropriate peon-level enthusiasm, dood." }
];
</script>

<template>
  <main id="main-content" class="cult-page cult-page--collection">
    <a class="cult-page__escape" href="/haven/"><ArrowLeft :size="18" aria-hidden="true" /> Back through the floorboard</a>

    <section class="cult-collection">
      <header class="cult-collection__header cult-collection__header--rebuilt">
        <div class="cult-collection__featured" aria-hidden="true">
          <img v-for="prinny in featuredPrinnies" :key="prinny.assetId" :src="prinny.src" width="210" height="210" alt="" />
        </div>
        <p class="eyebrow"><Sparkles :size="15" aria-hidden="true" /> Unofficial Netherworld basement department</p>
        <h1>The Prinny Cult</h1>
        <p>You lifted the loose floorboard and found Nari's full collection of tiny blue-adjacent disasters. There is apparently a bureaucracy down here now. Nobody remembers approving it.</p>
      </header>

      <section class="cult-briefing" aria-label="Basement orientation notices">
        <article v-for="notice in notices" :key="notice.title">
          <component :is="notice.icon" :size="26" aria-hidden="true" />
          <div><h2>{{ notice.title }}</h2><p>{{ notice.text }}</p></div>
        </article>
      </section>

      <section class="cult-collection__roster" aria-labelledby="prinny-roster-title">
        <div><p class="eyebrow">Current basement personnel</p><h2 id="prinny-roster-title">Twenty-seven Prinnies. Zero supervision.</h2><p>The supplied collection stays the star here—no fake ranks, bios, or replacement character art.</p></div>
        <div class="cult-collection__gallery" aria-label="Nari's supplied Prinny artwork collection">
          <article v-for="(prinny, index) in suppliedPrinnyArtwork" :key="prinny.assetId">
            <span>{{ String(index + 1).padStart(2, "0") }}</span>
            <img :src="prinny.src" width="190" height="190" :alt="prinny.alt" loading="lazy" />
          </article>
        </div>
      </section>

      <div class="cult-collection__contract">
        <template v-if="!clockedIn">
          <ClipboardCheck :size="30" aria-hidden="true" />
          <div><p class="eyebrow">Mandatory optional employment form</p><h2>Clock in for basement duty?</h2><p>Compensation is mysterious. Hazard pay is theoretical. The sardine line item has been escalated three times.</p></div>
          <button class="button button--cream" type="button" @click="clockedIn = true">Sign the suspicious clipboard</button>
        </template>
        <template v-else>
          <Bomb :size="30" aria-hidden="true" />
          <div><p class="eyebrow">Paperwork accepted</p><h2>Congratulations, dood. You're middle management.</h2><p>Your first responsibility is ensuring nobody throws the workforce indoors. Your second responsibility is pretending there was a first responsibility.</p></div>
          <button class="text-button" type="button" @click="clockedIn = false">Resign before lunch</button>
        </template>
      </div>
    </section>
  </main>
</template>
