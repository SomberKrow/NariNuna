<script setup lang="ts">
// Render public-safe registry fields only. Artwork stays absent unless a record carries a separate explicit display approval.
import { ArrowRight, ArrowUpRight, CheckCircle2, Clock3, HeartHandshake, Palette, ShieldCheck } from "@lucide/vue";
import { publicCreditGroups } from "@/data/artCredits";
import type { CreditStatus } from "@/types/content";

const statusLabels: Record<CreditStatus, string> = {
  verified: "Verified",
  pending: "Awaiting confirmation",
  internal: "Project-created",
  "not-required": "Credit not required",
  blocked: "Do not publish"
};

function statusIcon(status: CreditStatus) {
  return status === "verified" ? CheckCircle2 : status === "internal" || status === "not-required" ? ShieldCheck : Clock3;
}
</script>

<template>
  <section class="credits-opening page-width" aria-labelledby="credits-title">
    <div class="credits-opening__copy">
      <p class="eyebrow"><Palette :size="16" aria-hidden="true" /> Credits · the names behind the work</p>
      <h1 id="credits-title">The people behind<br /><em>the pretty things.</em></h1>
      <p>Art matters. So does knowing who made it. Confirmed credits belong here; anything unresolved stays clearly marked until it can be named properly.</p>
    </div>
    <aside class="credits-opening__note" aria-label="How this page handles artwork credits">
      <HeartHandshake :size="26" aria-hidden="true" />
      <p><strong>No mystery names. No guessed links.</strong><span>Credit approval and permission to display artwork are tracked separately.</span></p>
    </aside>
  </section>

  <section class="credits-ledger room-section page-width" aria-labelledby="ledger-title">
    <header class="room-heading">
      <div><p class="room-kicker">The creative ledger</p><h2 id="ledger-title">Credit what is known.<br /><em>Keep honest holds for the rest.</em></h2></div>
      <p>The current review build still has open artist and rights questions. Pending means the gap is recorded—not forgotten.</p>
    </header>

    <div class="credits-ledger__groups">
      <section v-for="group in publicCreditGroups" :key="group.id" class="credit-group" :aria-labelledby="`credit-group-${group.id}`">
        <header class="credit-group__heading">
          <p class="room-kicker">Creative contribution</p>
          <h3 :id="`credit-group-${group.id}`">{{ group.label }}</h3>
          <p>{{ group.description }}</p>
        </header>

        <div class="credit-group__entries">
          <article v-for="credit in group.credits" :key="credit.id" class="credit-entry">
            <div class="credit-entry__status" :class="`credit-entry__status--${credit.creditStatus}`">
              <component :is="statusIcon(credit.creditStatus)" :size="15" aria-hidden="true" />
              {{ statusLabels[credit.creditStatus] }}
            </div>
            <h4>{{ credit.displayName }}</h4>
            <ul class="credit-entry__roles" :aria-label="`Roles for ${credit.displayName}`">
              <li v-for="role in credit.roles" :key="role">{{ role }}</li>
            </ul>
            <p>{{ credit.contribution }}</p>
            <p class="credit-entry__note">{{ credit.creditText }}</p>
            <div v-if="credit.artworkDisplayStatus === 'approved' && credit.artwork.length" class="credit-entry__artwork">
              <img
                v-for="artwork in credit.artwork"
                :key="artwork.src"
                :src="artwork.src"
                :width="artwork.width"
                :height="artwork.height"
                :alt="artwork.alt"
                loading="lazy"
                decoding="async"
              />
            </div>
            <nav v-if="credit.links.length" class="credit-entry__links" :aria-label="`Approved links for ${credit.displayName}`">
              <a v-for="link in credit.links" :key="link.url" :href="link.url" target="_blank" rel="noreferrer noopener">
                {{ link.label }} <ArrowUpRight :size="15" aria-hidden="true" /><span class="sr-only"> (opens in a new tab)</span>
              </a>
            </nav>
          </article>
        </div>
      </section>
    </div>
  </section>

  <section class="credits-correction page-width" aria-labelledby="credits-correction-title">
    <ShieldCheck :size="28" aria-hidden="true" />
    <div>
      <p class="room-kicker">A credit needs correcting?</p>
      <h2 id="credits-correction-title">Tell Nari through a public profile.</h2>
      <p>Corrections are welcome. Private contracts, approval messages, and personal contact details stay out of this public ledger.</p>
      <a class="text-link" href="/work-with-nari/#nari-links">Find Nari's public profiles <ArrowRight :size="16" aria-hidden="true" /></a>
    </div>
  </section>
</template>

<style scoped lang="scss" src="@/styles/rooms/credits.scss"></style>
