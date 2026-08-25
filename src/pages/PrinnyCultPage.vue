<script setup lang="ts">
import { ArrowLeft, Bomb, Crown, Feather, Fish, Flame, MoonStar, ScrollText, ShieldCheck, Sparkles } from "@lucide/vue";
import { computed, ref } from "vue";
import { prinnyCultAssets, prinnyRosterCapacity, suppliedPrinnyArtwork } from "@/data/prinnyCult";

const ritualStage = ref(0);
const oathAccepted = ref(false);
const offerings = ref(0);
const selectedWitness = ref<number | null>(null);
const maxOfferings = 11;

const herald = suppliedPrinnyArtwork.find(({ assetId }) => assetId === "original") ?? suppliedPrinnyArtwork[0];
const leftAcolyte = suppliedPrinnyArtwork.find(({ assetId }) => assetId === "panda") ?? suppliedPrinnyArtwork[1];
const rightAcolyte = suppliedPrinnyArtwork.find(({ assetId }) => assetId === "orin") ?? suppliedPrinnyArtwork[2];

const rites = [
  {
    numeral: "I",
    title: "Wake the candle",
    instruction: "The first flame answers only to visitors who are prepared to make questionable decisions with confidence.",
    action: "Light the first candle",
    icon: Flame
  },
  {
    numeral: "II",
    title: "Make the offering",
    instruction: "Place one ceremonial sardine upon the altar. The order accepts no substitutes, no refunds, and absolutely no tuna.",
    action: "Offer the sacred sardine",
    icon: Fish
  },
  {
    numeral: "III",
    title: "Speak the sacred word",
    instruction: "The chamber goes quiet. Twenty-seven tiny faces turn toward you. Somewhere, a clipboard trembles.",
    action: "Say it with conviction: DOOD",
    icon: Sparkles
  }
] as const;

const commandments = [
  {
    numeral: "01",
    title: "Thou shalt not yeet indoors.",
    text: "Explosions make the candle situation considerably worse, and the cleaning deposit is already a myth.",
    icon: Bomb
  },
  {
    numeral: "02",
    title: "The sardine is sacred.",
    text: "All offerings are ceremonial, imaginary, and mysteriously missing approximately eight seconds later.",
    icon: Fish
  },
  {
    numeral: "03",
    title: "Every little weirdo belongs.",
    text: "Take the joke seriously. Take each other kindly. Leave actual cruelty and cult behavior upstairs.",
    icon: ShieldCheck
  }
] as const;

const witnessWhispers = [
  "The witness slides you a fish-shaped pamphlet and refuses to elaborate.",
  "A tiny voice whispers, \"The candles have unionized, dood.\"",
  "This witness knows what happened to Rule Four. This witness isn't talking.",
  "A solemn nod. An ominous waddle. Absolutely immaculate vibes.",
  "Someone has drawn a crown on the emergency sardine inventory.",
  "The congregation is pretending this is normal. You should probably do the same."
] as const;

const riteComplete = computed(() => ritualStage.value === rites.length);
const activeRite = computed(() => rites[Math.min(ritualStage.value, rites.length - 1)]);
const witnessWhisper = computed(() => selectedWitness.value === null ? "" : witnessWhispers[selectedWitness.value % witnessWhispers.length]);
const visitorRank = computed(() => {
  if (offerings.value >= maxOfferings) return "High Waddlemancer of the Eleventh Sardine";
  if (offerings.value >= 5) return "Keeper of the Suspiciously Holy Fish";
  return "Initiate of Mildly Questionable Intent";
});

function completeRite(): void {
  ritualStage.value = Math.min(ritualStage.value + 1, rites.length);
}

function touchAltar(index: number): void {
  if (index === ritualStage.value) completeRite();
}

function acceptOath(): void {
  if (riteComplete.value) oathAccepted.value = true;
}

function offerSardine(): void {
  offerings.value = Math.min(offerings.value + 1, maxOfferings);
}
</script>

<template>
  <main id="main-content" class="prinny-sanctum">
    <div class="prinny-sanctum__grain" aria-hidden="true"></div>

    <nav class="prinny-sanctum__escape" aria-label="Return to the Haven">
      <a href="/haven/"><ArrowLeft :size="17" aria-hidden="true" /> Climb back through the floorboard</a>
      <span aria-hidden="true">EST. SOME TIME AFTER MIDNIGHT</span>
    </nav>

    <section class="cult-descent" aria-labelledby="cult-title">
      <div class="cult-descent__environment" aria-hidden="true">
        <img :src="prinnyCultAssets.sanctumPainting" width="1672" height="941" alt="" fetchpriority="high" />
      </div>

      <div class="cult-descent__chamber" aria-hidden="true">
        <div class="cult-descent__arch"></div>
        <div class="cult-descent__stars cult-descent__stars--left">✦ · ✧</div>
        <div class="cult-descent__stars cult-descent__stars--right">✧ · ✦</div>
        <img class="cult-descent__circle" :src="prinnyCultAssets.summoningCircle" width="300" height="300" alt="" />
        <img v-if="leftAcolyte" class="cult-descent__acolyte cult-descent__acolyte--left" :src="leftAcolyte.src" width="150" height="150" alt="" />
        <img v-if="rightAcolyte" class="cult-descent__acolyte cult-descent__acolyte--right" :src="rightAcolyte.src" width="150" height="150" alt="" />
        <img v-if="herald" class="cult-descent__herald" :src="herald.src" width="310" height="310" alt="" fetchpriority="high" />
        <div class="cult-descent__candle cult-descent__candle--one"></div>
        <div class="cult-descent__candle cult-descent__candle--two"></div>
        <div class="cult-descent__candle cult-descent__candle--three"></div>
        <div class="cult-descent__candle cult-descent__candle--four"></div>
        <div class="cult-descent__plaque"><span>THE FLOORBOARD WAS A WARNING</span><strong>YOU CAME ANYWAY, DOOD.</strong></div>
      </div>

      <div class="cult-descent__story">
        <p class="cult-kicker"><MoonStar :size="15" aria-hidden="true" /> Beneath the Haven · Chamber XI</p>
        <p class="cult-descent__pretitle">Welcome, deeply suspicious traveler, to</p>
        <h1 id="cult-title">The Order of<br /><span>the Eternal Dood.</span></h1>
        <p class="cult-descent__designation">KNOWN ABOVE THE FLOORBOARDS AS THE PRINNY CULT</p>
        <p class="cult-descent__lede">Somewhere beneath the Haven, twenty-seven tiny disasters have built themselves a secret society. There are candles. There are ceremonies. The sardine budget is no longer explainable.</p>
        <div class="cult-descent__insignia"><span>XXVII WITNESSES</span><span aria-hidden="true">✶</span><span>ZERO ADULT SUPERVISION</span></div>
        <a class="cult-descent__invitation" href="#ritual-title"><Flame :size="16" aria-hidden="true" /> Approach the initiation altar</a>
      </div>
    </section>

    <div class="cult-divider" aria-hidden="true"><span></span><span>✦</span><span></span></div>

    <section class="cult-ritual" aria-labelledby="ritual-title">
      <header class="cult-section-heading">
        <p class="cult-kicker"><Flame :size="16" aria-hidden="true" /> The completely optional initiation</p>
        <h2 id="ritual-title">The Rite of the <em>Eternal Dood.</em></h2>
        <p>Three acts. One sacred syllable. Absolutely no liability waiver.</p>
      </header>

      <div class="cult-ritual__altar">
        <div class="cult-ritual__illustration" aria-label="Painted ceremonial altar with three interactive ritual objects">
          <img
            class="cult-ritual__painting"
            :src="prinnyCultAssets.altarPainting"
            width="1536"
            height="1024"
            alt="A lantern-lit stone altar with ceremonial candles, a brass sardine dish, and an open oath ledger"
            loading="lazy"
          />
          <button
            v-for="(rite, index) in rites"
            :key="rite.numeral"
            class="cult-ritual__hotspot"
            :class="['cult-ritual__hotspot--' + (index + 1), { 'is-current': ritualStage === index, 'is-complete': ritualStage > index }]"
            type="button"
            :disabled="ritualStage !== index"
            :aria-label="rite.action + (ritualStage > index ? ': completed' : ritualStage === index ? ': available' : ': locked')"
            @click="touchAltar(index)"
          >
            <component :is="rite.icon" :size="18" aria-hidden="true" />
            <span>{{ rite.numeral }}</span>
          </button>
          <span class="cult-ritual__altar-glow" :class="{ 'is-lit': ritualStage > 0 }"></span>
          <p class="cult-ritual__scene-caption">Touch the glowing object on the altar.</p>
        </div>

        <div class="cult-ritual__content">
          <ol class="cult-ritual__progress" aria-label="Three ceremonial initiation rites">
            <li
              v-for="(rite, index) in rites"
              :key="rite.numeral"
              :class="{ 'is-complete': ritualStage > index, 'is-current': ritualStage === index }"
              :aria-label="rite.title + (ritualStage > index ? ': completed' : ': waiting')"
            >
              <span aria-hidden="true">{{ rite.numeral }}</span>
              <strong>{{ rite.title }}</strong>
            </li>
          </ol>

          <template v-if="!riteComplete">
            <p class="cult-ritual__stage">RITE {{ activeRite.numeral }} OF III</p>
            <h3>{{ activeRite.title }}</h3>
            <p class="cult-ritual__instruction" aria-live="polite">{{ activeRite.instruction }}</p>
            <button class="cult-action" type="button" @click="completeRite">
              <component :is="activeRite.icon" :size="18" aria-hidden="true" />
              {{ activeRite.action }}
            </button>
          </template>

          <template v-else-if="!oathAccepted">
            <p class="cult-ritual__stage">THE FINAL, LEGALLY USELESS OATH</p>
            <h3>Repeat after the suspicious penguin.</h3>
            <blockquote>“I solemnly swear to protect the bit, respect the weirdos, and never throw the congregation at anyone indoors.”</blockquote>
            <button class="cult-action" type="button" @click="acceptOath"><ScrollText :size="18" aria-hidden="true" /> Swear the extremely serious oath</button>
          </template>

          <template v-else>
            <p class="cult-ritual__stage">THE CHAMBER HAS SPOKEN</p>
            <h3>Welcome to the congregation, dood.</h3>
            <p class="cult-ritual__instruction">You are now ceremonially responsible for absolutely nothing. The tiny council applauds with deeply unsettling enthusiasm.</p>
            <div class="cult-ritual__rank"><Crown :size="19" aria-hidden="true" /> {{ visitorRank }}</div>
          </template>
        </div>
      </div>
    </section>

    <section class="cult-doctrine" aria-labelledby="doctrine-title">
      <header class="cult-section-heading cult-section-heading--compact">
        <p class="cult-kicker"><ScrollText :size="16" aria-hidden="true" /> Excavated from a very sticky napkin</p>
        <h2 id="doctrine-title">The sacred <em>commandments.</em></h2>
      </header>

      <div class="cult-doctrine__articles">
        <article v-for="commandment in commandments" :key="commandment.numeral">
          <span class="cult-doctrine__number">{{ commandment.numeral }}</span>
          <component :is="commandment.icon" :size="23" aria-hidden="true" />
          <h3>{{ commandment.title }}</h3>
          <p>{{ commandment.text }}</p>
        </article>
      </div>
    </section>

    <section class="cult-congregation" aria-labelledby="congregation-title">
      <header class="cult-congregation__heading">
        <div>
          <p class="cult-kicker"><Feather :size="16" aria-hidden="true" /> Witnesses of the eleventh floorboard</p>
          <h2 id="congregation-title">The congregation.</h2>
          <p>All {{ prinnyRosterCapacity }} of Nari's supplied tiny chaos agents. Every original design. No fake names, fake biographies, or stolen halos.</p>
        </div>
        <div class="cult-congregation__count" aria-label="27 original Prinny designs"><strong>{{ prinnyRosterCapacity }}</strong><span>PRESENT</span></div>
      </header>

      <p v-if="witnessWhisper" class="cult-congregation__whisper" aria-live="polite">{{ witnessWhisper }}</p>

      <div class="cult-congregation__gallery" aria-label="Nari's supplied Prinny artwork collection">
        <article v-for="(prinny, index) in suppliedPrinnyArtwork" :key="prinny.assetId" class="cult-congregation__member">
          <button
            type="button"
            :aria-label="'Listen to congregation witness ' + String(index + 1).padStart(2, '0')"
            :aria-pressed="selectedWitness === index"
            @click="selectedWitness = index"
          >
            <span>{{ String(index + 1).padStart(2, "0") }}</span>
            <img :src="prinny.src" width="190" height="190" :alt="prinny.alt" loading="lazy" />
            <span aria-hidden="true">✶</span>
          </button>
        </article>
      </div>
    </section>

    <section class="cult-offering" aria-labelledby="offering-title">
      <img class="cult-offering__seal" :src="prinnyCultAssets.membershipSeal" width="116" height="116" alt="" aria-hidden="true" loading="lazy" />

      <div v-if="oathAccepted" class="cult-offering__content">
        <p class="cult-kicker"><Fish :size="16" aria-hidden="true" /> Members-only nonsense</p>
        <h2 id="offering-title">{{ offerings === maxOfferings ? "The Eleventh Sardine has spoken." : "Feed the ceremonial offering bowl." }}</h2>
        <p>{{ offerings === maxOfferings ? "The candles bow. The floorboards hum. Somewhere upstairs, Nari wonders why the snack budget has become a religious matter." : "One imaginary sardine at a time. The bowl is deeply spiritual and, allegedly, tax-exempt." }}</p>
        <button v-if="offerings < maxOfferings" class="cult-action cult-action--quiet" type="button" @click="offerSardine"><Fish :size="17" aria-hidden="true" /> Offer another imaginary sardine</button>
        <p class="cult-offering__count" aria-live="polite">Sacred sardines surrendered: {{ offerings }} / {{ maxOfferings }}</p>
        <p v-if="offerings === maxOfferings" class="cult-offering__reward"><Crown :size="19" aria-hidden="true" /> {{ visitorRank }}</p>
      </div>

      <div v-else class="cult-offering__content">
        <p class="cult-kicker"><Crown :size="16" aria-hidden="true" /> A suspiciously exclusive inner circle</p>
        <h2 id="offering-title">There is more under the altar.</h2>
        <p>Complete the initiation above, and the congregation may trust you with its most sacred, most fish-shaped secret.</p>
      </div>
    </section>

    <footer class="cult-dismissal">
      <span>GO FORTH. WADDLE IN DARKNESS. BE NICE ABOUT IT.</span>
      <a href="/haven/"><ArrowLeft :size="16" aria-hidden="true" /> Return to the Haven</a>
    </footer>
  </main>
</template>

<style scoped>
.prinny-sanctum {
  --sanctum-gutter: clamp(1rem, 5vw, 4.5rem);
  --cult-ink: #faf0e8;
  --cult-muted: #c9b4bc;
  --cult-gold: #edc78e;
  --cult-line: rgb(244 207 174 / 18%);
  position: relative;
  min-height: 100svh;
  padding: 0 var(--sanctum-gutter) 2.5rem;
  overflow: hidden;
  color: var(--cult-ink);
  background:
    radial-gradient(ellipse at 20% 12%, rgb(122 54 72 / 31%), transparent 30%),
    radial-gradient(ellipse at 82% 30%, rgb(94 60 112 / 24%), transparent 29%),
    radial-gradient(ellipse at 50% 70%, rgb(111 55 64 / 12%), transparent 35%),
    linear-gradient(180deg, #171019, #20121b 35%, #120d14 78%, #171016);
  isolation: isolate;
}

.prinny-sanctum > section,
.prinny-sanctum > nav,
.prinny-sanctum > footer,
.cult-divider {
  position: relative;
  z-index: 1;
  max-width: 76rem;
  margin-inline: auto;
}

.prinny-sanctum__grain {
  position: fixed;
  z-index: 0;
  inset: 0;
  background:
    repeating-linear-gradient(90deg, transparent 0 6.2rem, rgb(246 215 191 / 2%) 6.2rem 6.25rem),
    radial-gradient(ellipse at 50% 100%, rgb(0 0 0 / 24%), transparent 65%);
  pointer-events: none;
}

.prinny-sanctum__escape {
  display: flex;
  min-height: 4.7rem;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  border-bottom: 1px solid var(--cult-line);
}

.prinny-sanctum__escape > a,
.cult-dismissal > a {
  display: inline-flex;
  min-height: 2.75rem;
  align-items: center;
  gap: 0.45rem;
  color: var(--cult-ink);
  font-size: 0.76rem;
  font-weight: 710;
  text-decoration: none;
}

.prinny-sanctum__escape > span,
.cult-dismissal > span {
  color: var(--cult-muted);
  font-family: var(--font-detail);
  font-size: 0.59rem;
  letter-spacing: 0.12em;
}

.cult-descent {
  position: relative;
  display: grid;
  grid-template-columns: 1fr;
  gap: 0;
  align-items: center;
  min-height: 39rem;
  padding: 3.5rem var(--sanctum-gutter) 2.2rem;
  isolation: isolate;
}

.prinny-sanctum > .cult-descent {
  width: calc(100% + 2 * var(--sanctum-gutter));
  max-width: none;
  margin-inline: calc(-1 * var(--sanctum-gutter));
}

.cult-descent__environment {
  position: absolute;
  z-index: -2;
  inset: 0;
  overflow: hidden;
}

.cult-descent__environment > img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: 54% center;
}

.cult-descent__environment::after {
  position: absolute;
  inset: 0;
  background:
    linear-gradient(180deg, rgb(17 10 16 / 47%) 0%, rgb(19 11 17 / 20%) 43%, #171019 100%),
    linear-gradient(90deg, rgb(17 10 16 / 88%), rgb(19 11 17 / 49%) 51%, rgb(18 10 17 / 12%));
  content: "";
}

.cult-descent__story,
.cult-descent__chamber {
  width: min(100%, 38rem);
  margin-inline: auto;
}

.cult-descent__story {
  z-index: 2;
  order: 0;
  padding-block: 0.8rem 1.8rem;
}

.cult-descent__chamber {
  position: relative;
  min-height: 18rem;
  order: 1;
  overflow: hidden;
  background: radial-gradient(ellipse at 50% 87%, rgb(219 153 101 / 23%), transparent 58%);
  border: 0;
  border-radius: 0;
  isolation: isolate;
}

.cult-descent__arch {
  display: none;
}

.cult-descent__stars {
  position: absolute;
  z-index: 2;
  top: 24%;
  color: var(--cult-gold);
  font-size: 1.1rem;
}

.cult-descent__stars--left {
  left: 14%;
}

.cult-descent__stars--right {
  right: 14%;
}

.cult-descent__circle {
  position: absolute;
  right: 12%;
  bottom: 13%;
  left: 12%;
  width: 76%;
  margin-inline: auto;
  opacity: 0.55;
  filter: drop-shadow(0 0 1rem rgb(207 147 97 / 42%));
}

.cult-descent__herald {
  position: absolute;
  z-index: 3;
  right: 13%;
  bottom: 2rem;
  left: 13%;
  width: 74%;
  max-width: 18.5rem;
  margin-inline: auto;
  filter: drop-shadow(0 1rem 1.6rem rgb(0 0 0 / 60%));
}

.cult-descent__acolyte {
  position: absolute;
  z-index: 2;
  bottom: 2.85rem;
  width: 33%;
  opacity: 0.84;
  filter: drop-shadow(0 0.75rem 1rem rgb(0 0 0 / 45%));
}

.cult-descent__acolyte--left {
  left: 5%;
}

.cult-descent__acolyte--right {
  right: 5%;
}

.cult-descent__candle {
  position: absolute;
  z-index: 4;
  bottom: 5rem;
  width: 0.55rem;
  height: 2.5rem;
  background: linear-gradient(90deg, #c6a993, #f1dccc 52%, #b89680);
  border-radius: 0.12rem 0.12rem 0 0;
}

.cult-descent__candle::before {
  position: absolute;
  bottom: 96%;
  left: 0.12rem;
  width: 0.35rem;
  height: 0.7rem;
  background: #f7cc79;
  border-radius: 60% 30% 55% 45%;
  box-shadow: 0 0 0.8rem 0.35rem rgb(246 169 72 / 45%);
  content: "";
  transform: rotate(-12deg);
}

.cult-descent__candle--one {
  left: 10%;
}

.cult-descent__candle--two {
  left: 15%;
  height: 1.8rem;
}

.cult-descent__candle--three {
  right: 10%;
}

.cult-descent__candle--four {
  right: 15%;
  height: 1.85rem;
}

.cult-descent__plaque {
  position: absolute;
  z-index: 5;
  right: 1.2rem;
  bottom: 0.9rem;
  left: 1.2rem;
  display: grid;
  gap: 0.2rem;
  padding: 0.65rem 0.8rem;
  color: #f8e9d8;
  background: linear-gradient(145deg, #684752, #3e2839);
  border: 1px solid rgb(242 194 142 / 66%);
  border-radius: 0.28rem;
  box-shadow: 0 0.3rem 0 #21141d;
  text-align: center;
}

.cult-descent__plaque > span {
  font-family: var(--font-detail);
  font-size: 0.5rem;
  letter-spacing: 0.11em;
}

.cult-descent__plaque > strong {
  font-family: var(--font-display);
  font-size: 1rem;
}

.cult-kicker {
  display: flex;
  align-items: center;
  gap: 0.4rem;
  margin: 0 0 0.85rem;
  color: var(--cult-gold);
  font-family: var(--font-detail);
  font-size: 0.65rem;
  font-weight: 760;
  letter-spacing: 0.06em;
  text-transform: uppercase;
}

.cult-descent__pretitle {
  margin: 0 0 0.4rem;
  color: var(--cult-muted);
  font-family: var(--font-display);
  font-size: 1.02rem;
  font-style: italic;
}

.cult-descent h1 {
  max-width: 12ch;
  margin: 0 0 0.75rem;
  color: var(--cult-ink);
  font-size: clamp(2.9rem, 9vw, 5.3rem);
  line-height: 0.96;
}

.cult-descent h1 > span {
  color: var(--cult-gold);
  font-style: italic;
}

.cult-descent__designation {
  max-width: 33rem;
  margin: 0 0 1.05rem;
  color: #e7cfbd;
  font-family: var(--font-detail);
  font-size: 0.59rem;
  letter-spacing: 0.12em;
}

.cult-descent__lede,
.cult-section-heading > p:last-child,
.cult-congregation__heading > div:first-child > p:last-child,
.cult-offering__content > p:not(.cult-kicker):not(.cult-offering__count):not(.cult-offering__reward) {
  max-width: 36rem;
  color: var(--cult-muted);
  font-size: 0.91rem;
  line-height: 1.75;
}

.cult-descent__insignia {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.65rem;
  margin-block-start: 1.3rem;
  color: var(--cult-gold);
  font-family: var(--font-detail);
  font-size: 0.57rem;
  letter-spacing: 0.09em;
}

.cult-descent__invitation {
  display: inline-flex;
  min-height: 2.9rem;
  align-items: center;
  gap: 0.48rem;
  padding: 0.7rem 0.9rem;
  margin-block-start: 1.4rem;
  color: #2b1920;
  background: linear-gradient(135deg, #efd19e, #d5a870);
  border: 1px solid #f3d3a0;
  border-radius: 0.3rem;
  font-size: 0.74rem;
  font-weight: 820;
  text-decoration: none;
}

.cult-divider {
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  gap: 1rem;
  align-items: center;
  color: var(--cult-gold);
}

.cult-divider > span:first-child,
.cult-divider > span:last-child {
  height: 1px;
  background: linear-gradient(90deg, transparent, var(--cult-line), transparent);
}

.cult-ritual,
.cult-doctrine,
.cult-congregation {
  padding-block: 4rem 0.5rem;
}

.cult-section-heading h2,
.cult-congregation__heading h2,
.cult-offering__content h2 {
  margin: 0 0 0.5rem;
  color: var(--cult-ink);
  font-size: clamp(2rem, 6vw, 3.35rem);
  line-height: 1.04;
}

.cult-section-heading h2 > em {
  color: var(--cult-gold);
}

.cult-section-heading > p:last-child {
  margin-block-end: 0;
}

.cult-ritual__altar {
  display: grid;
  grid-template-columns: 1fr;
  gap: 0;
  overflow: hidden;
  margin-block-start: 1.7rem;
  background: linear-gradient(150deg, #2c1c29, #20141d);
  border: 1px solid var(--cult-line);
  border-radius: 0.8rem;
}

.cult-ritual__illustration {
  position: relative;
  display: grid;
  min-height: 18rem;
  place-items: center;
  overflow: hidden;
  background: #1b121b;
}

.cult-ritual__illustration > img {
  position: absolute;
  z-index: 0;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}

.cult-ritual__altar-glow {
  position: absolute;
  z-index: 1;
  top: 26%;
  left: 14%;
  width: 12rem;
  aspect-ratio: 1;
  background: radial-gradient(circle, rgb(239 171 93 / 29%), transparent 63%);
  opacity: 0.25;
  pointer-events: none;
  transition: opacity 220ms ease;
}

.cult-ritual__altar-glow.is-lit {
  opacity: 1;
}

.cult-ritual__hotspot {
  position: absolute;
  z-index: 3;
  display: grid;
  width: 2.8rem;
  aspect-ratio: 1;
  place-items: center;
  color: #f1dcbf;
  background: rgb(31 19 29 / 82%);
  border: 1px solid rgb(243 210 173 / 56%);
  border-radius: 50%;
  cursor: pointer;
}

.cult-ritual__hotspot > span {
  position: absolute;
  right: -0.35rem;
  bottom: -0.22rem;
  display: grid;
  min-width: 1.2rem;
  height: 1.2rem;
  place-items: center;
  color: #2b1920;
  background: #ecc98f;
  border-radius: 50%;
  font-family: var(--font-detail);
  font-size: 0.55rem;
  font-weight: 850;
}

.cult-ritual__hotspot--1 {
  top: 45%;
  left: 19%;
}

.cult-ritual__hotspot--2 {
  top: 56%;
  left: 44%;
}

.cult-ritual__hotspot--3 {
  top: 47%;
  right: 20%;
}

.cult-ritual__hotspot.is-current {
  color: #fff2d9;
  border-color: #f4cf96;
  box-shadow: 0 0 0 0.28rem rgb(235 185 111 / 25%), 0 0 1.4rem rgb(237 178 89 / 65%);
}

.cult-ritual__hotspot.is-complete {
  color: #243926;
  background: #dbc593;
  border-color: #fae1af;
}

.cult-ritual__hotspot:disabled:not(.is-complete) {
  color: rgb(249 231 218 / 54%);
  background: rgb(30 20 29 / 72%);
  cursor: not-allowed;
}

.cult-ritual__scene-caption {
  position: absolute;
  z-index: 2;
  right: 0.8rem;
  bottom: 0.6rem;
  left: 0.8rem;
  padding: 0.42rem 0.6rem;
  margin: 0;
  color: #f6e8d6;
  background: rgb(22 14 22 / 78%);
  border: 1px solid rgb(242 210 174 / 22%);
  border-radius: 0.22rem;
  font-family: var(--font-detail);
  font-size: 0.62rem;
  text-align: center;
}

.cult-ritual__content {
  min-height: 20rem;
  padding: 1.3rem;
}

.cult-ritual__progress {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 0.35rem;
  padding: 0 0 1.1rem;
  margin: 0 0 1.1rem;
  border-bottom: 1px solid var(--cult-line);
  list-style: none;
}

.cult-ritual__progress > li {
  display: grid;
  gap: 0.35rem;
  color: var(--cult-muted);
}

.cult-ritual__progress > li > span {
  display: grid;
  width: 2rem;
  aspect-ratio: 1;
  place-items: center;
  border: 1px solid var(--cult-line);
  border-radius: 50%;
  font-family: var(--font-detail);
  font-size: 0.72rem;
}

.cult-ritual__progress > li > strong {
  max-width: 8rem;
  font-size: 0.63rem;
  line-height: 1.35;
}

.cult-ritual__progress > li.is-current,
.cult-ritual__progress > li.is-complete {
  color: var(--cult-gold);
}

.cult-ritual__progress > li.is-current > span,
.cult-ritual__progress > li.is-complete > span {
  background: rgb(235 188 130 / 12%);
  border-color: var(--cult-gold);
}

.cult-ritual__stage {
  margin: 0 0 0.4rem;
  color: var(--cult-gold);
  font-family: var(--font-detail);
  font-size: 0.62rem;
  letter-spacing: 0.075em;
}

.cult-ritual__content h3 {
  margin: 0 0 0.5rem;
  color: var(--cult-ink);
  font-size: clamp(1.35rem, 4vw, 1.8rem);
}

.cult-ritual__instruction,
.cult-ritual__content blockquote {
  margin: 0 0 1rem;
  color: var(--cult-muted);
  font-size: 0.82rem;
  line-height: 1.72;
}

.cult-ritual__content blockquote {
  padding-left: 0.85rem;
  border-left: 2px solid var(--cult-gold);
  font-style: italic;
}

.cult-action {
  display: inline-flex;
  min-height: 2.8rem;
  align-items: center;
  gap: 0.48rem;
  padding: 0.65rem 0.9rem;
  color: #2c1920;
  background: linear-gradient(145deg, #f3d6a5, #d7ad75);
  border: 1px solid #f4d5a3;
  border-radius: 0.35rem;
  font-size: 0.72rem;
  font-weight: 790;
  cursor: pointer;
}

.cult-action:hover,
.cult-action:focus-visible {
  border-color: #fff1d3;
  filter: brightness(1.07);
}

.cult-ritual__rank,
.cult-offering__reward {
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
  color: var(--cult-gold);
  font-size: 0.8rem;
  font-weight: 760;
}

.cult-doctrine__articles {
  display: grid;
  grid-template-columns: 1fr;
  gap: 0.7rem;
  margin-block-start: 1.45rem;
}

.cult-doctrine__articles > article {
  min-height: 11.4rem;
  padding: 1.1rem;
  background: rgb(43 27 37 / 70%);
  border: 1px solid var(--cult-line);
  border-radius: 0.55rem;
}

.cult-doctrine__number {
  display: block;
  margin-block-end: 0.8rem;
  color: var(--cult-muted);
  font-family: var(--font-detail);
  font-size: 0.62rem;
}

.cult-doctrine__articles > article > svg {
  color: var(--cult-gold);
}

.cult-doctrine__articles h3 {
  margin: 0.65rem 0 0.35rem;
  color: var(--cult-ink);
  font-size: 1.11rem;
}

.cult-doctrine__articles p {
  margin: 0;
  color: var(--cult-muted);
  font-size: 0.77rem;
  line-height: 1.6;
}

.cult-congregation {
  padding-block-start: 4.5rem;
}

.cult-congregation__heading {
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: 1rem;
  align-items: end;
}

.cult-congregation__count {
  display: grid;
  justify-items: center;
  padding: 0.5rem 0.75rem;
  border-left: 1px solid var(--cult-line);
}

.cult-congregation__count > strong {
  color: var(--cult-gold);
  font-family: var(--font-display);
  font-size: 2rem;
  line-height: 1;
}

.cult-congregation__count > span {
  color: var(--cult-muted);
  font-family: var(--font-detail);
  font-size: 0.55rem;
}

.cult-congregation__gallery {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 0.55rem;
  margin-block-start: 1.5rem;
}

.cult-congregation__whisper {
  max-width: 42rem;
  padding: 0.72rem 0.9rem;
  margin-block: 1rem 0;
  color: #f2dcbd;
  background: rgb(84 55 62 / 47%);
  border-left: 2px solid var(--cult-gold);
  font-family: var(--font-display);
  font-size: 0.91rem;
  font-style: italic;
}

.cult-congregation__member {
  position: relative;
  display: grid;
  aspect-ratio: 1;
  place-items: center;
  overflow: hidden;
  background: radial-gradient(ellipse at 50% 80%, rgb(185 119 119 / 17%), transparent 55%), #281924;
  border: 1px solid var(--cult-line);
  border-radius: 0.42rem;
  transition: border-color 160ms ease, transform 160ms ease;
}

.cult-congregation__member > button {
  position: absolute;
  inset: 0;
  display: grid;
  width: 100%;
  height: 100%;
  place-items: center;
  padding: 0;
  background: transparent;
  border: 0;
  cursor: pointer;
}

.cult-congregation__member > button[aria-pressed="true"] {
  background: radial-gradient(ellipse at 50% 80%, rgb(221 167 101 / 28%), transparent 70%);
}

.cult-congregation__member:hover {
  border-color: rgb(240 196 139 / 62%);
  transform: translateY(-2px);
}

.cult-congregation__member > button > img {
  width: 88%;
  height: 88%;
  object-fit: contain;
}

.cult-congregation__member > button > span:first-child,
.cult-congregation__member > button > span:last-child {
  position: absolute;
  z-index: 1;
  color: var(--cult-gold);
  font-family: var(--font-detail);
  font-size: 0.58rem;
}

.cult-congregation__member > button > span:first-child {
  top: 0.45rem;
  left: 0.5rem;
}

.cult-congregation__member > button > span:last-child {
  right: 0.5rem;
  bottom: 0.38rem;
}

.cult-offering {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
  align-items: center;
  padding: 1.5rem;
  margin-block: 4rem 2.5rem;
  background: radial-gradient(ellipse at 0% 0%, rgb(229 166 109 / 13%), transparent 45%), #291b25;
  border: 1px solid var(--cult-line);
  border-radius: 0.8rem;
}

.cult-offering__seal {
  width: 5.5rem;
  opacity: 0.92;
}

.cult-offering__content h2 {
  font-size: clamp(1.7rem, 5vw, 2.25rem);
}

.cult-action--quiet {
  margin-block: 0.35rem 0.55rem;
}

.cult-offering__count {
  margin: 0.45rem 0 0;
  color: var(--cult-muted);
  font-family: var(--font-detail);
  font-size: 0.66rem;
}

.cult-dismissal {
  display: grid;
  gap: 0.8rem;
  align-items: center;
  padding-block: 1rem;
  border-top: 1px solid var(--cult-line);
}

@media (min-width: 33rem) {
  .cult-congregation__gallery {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  .cult-doctrine__articles {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (min-width: 48rem) {
  .cult-descent {
    grid-template-columns: minmax(17rem, 0.9fr) minmax(0, 1.1fr);
    gap: 2.5rem;
    min-height: 39rem;
    padding-block: 5rem 4rem;
  }

  .cult-descent__chamber {
    min-height: 29rem;
  }

  .cult-ritual__altar {
    grid-template-columns: minmax(18rem, 1.12fr) minmax(17rem, 0.88fr);
  }

  .cult-ritual__illustration {
    min-height: 26rem;
  }

  .cult-ritual__content {
    padding: 1.6rem;
  }

  .cult-doctrine__articles {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  .cult-congregation__gallery {
    grid-template-columns: repeat(5, minmax(0, 1fr));
  }

  .cult-offering {
    grid-template-columns: auto minmax(0, 1fr);
    gap: 1.7rem;
    padding: 1.8rem;
  }

  .cult-offering__seal {
    width: 7rem;
  }

  .cult-dismissal {
    grid-template-columns: 1fr auto;
  }
}

@media (min-width: 72rem) {
  .cult-descent {
    grid-template-columns: minmax(21rem, 0.88fr) minmax(0, 1.12fr);
    gap: 4.5rem;
    min-height: 45rem;
  }

  .cult-descent__chamber {
    min-height: 33rem;
  }

  .cult-ritual__illustration {
    min-height: 29rem;
  }

  .cult-congregation__gallery {
    grid-template-columns: repeat(7, minmax(0, 1fr));
  }
}

@media (max-width: 33rem) {
  .prinny-sanctum__escape > span {
    display: none;
  }

  .cult-congregation__heading {
    grid-template-columns: 1fr;
  }

  .cult-congregation__count {
    width: fit-content;
  }
}

@media (prefers-reduced-motion: reduce) {
  .cult-ritual__altar-glow,
  .cult-congregation__member {
    transition: none;
  }

  .cult-congregation__member:hover {
    transform: none;
  }
}
</style>
