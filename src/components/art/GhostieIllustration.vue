<script setup lang="ts">
import { computed } from "vue";

export type GhostieVariant =
  | "guardian"
  | "chaos"
  | "artist"
  | "portfolio"
  | "play"
  | "study"
  | "kindness"
  | "weird"
  | "protect"
  | "together"
  | "welcome"
  | "share"
  | "lost"
  | "lantern";

const props = withDefaults(
  defineProps<{
    variant: GhostieVariant;
    decorative?: boolean;
    bare?: boolean;
    label?: string;
  }>(),
  {
    decorative: true,
    bare: false,
    label: "A hand-drawn Haven Ghostie"
  }
);

const poseTransform = computed(() => {
  const transforms: Record<GhostieVariant, string> = {
    guardian: "translate(0 0)",
    chaos: "translate(2 1) rotate(-3 160 112)",
    artist: "translate(-4 2)",
    portfolio: "translate(12 1)",
    play: "translate(-2 0) rotate(2 160 112)",
    study: "translate(0 -2)",
    kindness: "translate(0 1)",
    weird: "translate(3 0) rotate(-2 160 112)",
    protect: "translate(-5 0)",
    together: "translate(22 0)",
    welcome: "translate(-8 0)",
    share: "translate(-3 0)",
    lost: "translate(8 0) rotate(2 160 112)",
    lantern: "translate(-9 0)"
  };
  return transforms[props.variant];
});
</script>

<template>
  <figure
    class="ghostie-illustration"
    :class="[`ghostie-illustration--${variant}`, { 'ghostie-illustration--bare': bare }]"
    :aria-hidden="decorative ? 'true' : undefined"
  >
    <svg
      viewBox="0 0 320 210"
      xmlns="http://www.w3.org/2000/svg"
      :role="decorative ? undefined : 'img'"
      :aria-label="decorative ? undefined : label"
    >
      <g v-if="!bare" class="ghostie-paper">
        <rect width="320" height="210" rx="18" />
        <circle cx="54" cy="42" r="46" />
        <circle cx="272" cy="168" r="62" />
        <path d="M20 166C73 146 98 181 150 162s91-7 150 19" />
        <path d="M35 54c20 8 29 2 41-11M259 34c-16 10-19 20-15 35" />
      </g>

      <g :transform="poseTransform">
        <ellipse class="ghostie-shadow" cx="158" cy="184" rx="72" ry="13" />

        <g v-if="variant === 'portfolio'" class="ghostie-prop ghostie-prop--frame">
          <rect x="38" y="58" width="88" height="76" rx="8" />
          <path d="M50 117l20-21 15 14 19-25 12 32z" />
          <circle cx="105" cy="77" r="7" />
        </g>

        <g v-if="variant === 'together'" class="ghostie-mini">
          <path d="M45 160c-8-11-9-24-6-36 4-18 16-31 31-32 17-1 31 12 35 30 3 13 1 26-3 36l9 16c-11-1-19-6-24-12-5 9-12 14-21 14-8 0-14-5-18-13-4 5-9 8-15 9 4-5 8-9 12-12z" />
          <circle cx="60" cy="124" r="3.5" />
          <circle cx="80" cy="124" r="3.5" />
          <path d="M66 138c5 4 10 4 15 0" />
        </g>

        <path
          class="ghostie-body"
          d="M112 165c-11-14-16-33-14-55 3-34 23-58 52-63 32-6 59 16 66 49 4 18 2 39-5 56-4 11-2 23 6 33-15-2-27-9-36-19-7 12-18 19-31 19-12 0-22-7-29-19-5 7-12 12-21 14 4-7 8-12 12-15z"
        />
        <path class="ghostie-wash" d="M119 84c10-21 30-31 50-30 18 1 34 11 44 27-30-11-62-10-94 3z" />
        <circle class="ghostie-eye" cx="140" cy="106" r="5" />
        <circle class="ghostie-eye" cx="176" cy="105" r="5" />
        <circle class="ghostie-eye-glint" cx="142" cy="104" r="1.3" />
        <circle class="ghostie-eye-glint" cx="178" cy="103" r="1.3" />
        <path class="ghostie-mouth" d="M150 122c6 5 12 5 18 0" />
        <path class="ghostie-cheek" d="M124 121l8 1M184 121l8-2" />

        <g v-if="variant === 'guardian'" class="ghostie-prop ghostie-prop--shield">
          <path d="M201 116l26 10v21c0 20-13 29-26 36-13-7-26-16-26-36v-21z" />
          <path class="ghostie-accent" d="M201 140c-7-9-18 1-9 10l9 9 9-9c9-9-2-19-9-10z" />
        </g>

        <g v-else-if="variant === 'chaos'" class="ghostie-prop ghostie-prop--chaos">
          <rect x="185" y="130" width="58" height="32" rx="13" />
          <path d="M199 146h14M206 139v14" />
          <circle cx="227" cy="143" r="3" />
          <circle cx="235" cy="151" r="3" />
          <path class="ghostie-spark" d="M67 64l5 11 11 5-11 5-5 11-5-11-11-5 11-5zM242 59l3 7 7 3-7 3-3 7-3-7-7-3 7-3z" />
        </g>

        <g v-else-if="variant === 'artist'" class="ghostie-prop ghostie-prop--artist">
          <rect x="192" y="132" width="28" height="36" rx="6" />
          <rect x="198" y="122" width="16" height="12" rx="3" />
          <path d="M220 113l30-28M224 117l30-28" />
          <path class="ghostie-accent" d="M239 91l11-10 5 5-10 11z" />
          <circle class="ghostie-spark" cx="72" cy="76" r="5" />
        </g>

        <g v-else-if="variant === 'portfolio'" class="ghostie-prop ghostie-prop--portfolio">
          <path d="M91 144c14 4 22 10 29 20" />
          <path d="M209 143c-11 4-18 10-24 18" />
          <circle class="ghostie-swatch ghostie-swatch--one" cx="231" cy="83" r="8" />
          <circle class="ghostie-swatch ghostie-swatch--two" cx="250" cy="100" r="7" />
          <circle class="ghostie-swatch ghostie-swatch--three" cx="236" cy="117" r="6" />
        </g>

        <g v-else-if="variant === 'play'" class="ghostie-prop ghostie-prop--play">
          <path class="ghostie-spark" d="M67 68l4 9 9 4-9 4-4 9-4-9-9-4 9-4zM246 79l4 9 9 4-9 4-4 9-4-9-9-4 9-4z" />
          <rect x="205" y="137" width="24" height="31" rx="5" transform="rotate(9 217 152)" />
          <path d="M213 130l20-20" />
          <circle class="ghostie-swatch ghostie-swatch--one" cx="79" cy="142" r="4" />
          <circle class="ghostie-swatch ghostie-swatch--two" cx="96" cy="156" r="5" />
        </g>

        <g v-else-if="variant === 'study'" class="ghostie-prop ghostie-prop--book">
          <path d="M111 147c14-9 30-8 46 1v28c-15-8-30-9-46-1zM157 148c16-9 32-10 48-1v28c-16-8-32-7-48 1z" />
          <path d="M157 149v27" />
          <path class="ghostie-accent" d="M126 157h18M126 164h13M170 157h18M170 164h13" />
        </g>

        <g v-else-if="variant === 'kindness'" class="ghostie-prop ghostie-prop--heart">
          <path d="M158 146c-14-19-38-2-23 14l23 22 23-22c15-16-9-33-23-14z" />
          <path d="M112 145c12 4 20 10 27 19M204 145c-10 4-18 10-24 19" />
        </g>

        <g v-else-if="variant === 'weird'" class="ghostie-prop ghostie-prop--weird">
          <path class="ghostie-accent" d="M147 49l10-18 8 20 20-5-8 19 16 13-21 5-1 21-17-12-17 13 1-22-21-5 17-13-8-19z" />
          <circle class="ghostie-swatch ghostie-swatch--one" cx="77" cy="111" r="8" />
          <path class="ghostie-spark" d="M238 102l4 9 9 4-9 4-4 9-4-9-9-4 9-4z" />
        </g>

        <g v-else-if="variant === 'protect'" class="ghostie-prop ghostie-prop--protect">
          <path d="M159 132l34 13v24c0 22-16 31-34 40-18-9-34-18-34-40v-24z" />
          <path class="ghostie-accent" d="M145 166l10 10 20-24" />
        </g>

        <g v-else-if="variant === 'together'" class="ghostie-prop ghostie-prop--together">
          <path d="M81 103c15-18 28-25 42-29M91 91l-2 14 13-4M95 166c15-3 27-8 36-18" />
          <path class="ghostie-spark" d="M240 76l4 9 9 4-9 4-4 9-4-9-9-4 9-4z" />
        </g>

        <g v-else-if="variant === 'welcome'" class="ghostie-prop ghostie-prop--welcome">
          <path d="M107 139c-17-10-25-23-22-38M86 100c-7-6-11-13-11-21M87 101c-9-1-16-5-21-11" />
          <path class="ghostie-accent" d="M226 111c-8-11-22 0-12 11l12 12 12-12c10-11-4-22-12-11z" />
        </g>

        <g v-else-if="variant === 'share'" class="ghostie-prop ghostie-prop--share">
          <rect x="188" y="126" width="58" height="42" rx="7" />
          <path class="ghostie-accent" d="M201 154l13-14 10 9 9-10M226 121l8-13 8 13" />
          <path d="M234 109v24" />
        </g>

        <g v-else-if="variant === 'lost'" class="ghostie-prop ghostie-prop--lost">
          <path d="M101 143c-17 4-27 12-34 24" />
          <rect x="55" y="154" width="27" height="31" rx="5" />
          <path d="M61 154c1-12 14-12 15 0M68 145v-9" />
          <path class="ghostie-accent" d="M67 163c8 3 8 11 0 15-8-4-8-12 0-15z" />
          <path class="ghostie-question" d="M221 75c2-11 20-12 23-1 3 13-14 13-14 24M230 110h.1" />
        </g>

        <g v-else-if="variant === 'lantern'" class="ghostie-prop ghostie-prop--lantern">
          <path d="M205 137c16 1 25 8 29 21" />
          <rect x="226" y="151" width="28" height="34" rx="5" />
          <path d="M232 151c1-13 15-13 16 0M240 143v-9" />
          <path class="ghostie-emerald" d="M240 160c10 4 10 13 0 18-10-5-10-14 0-18z" />
          <path class="ghostie-spark" d="M75 79l4 9 9 4-9 4-4 9-4-9-9-4 9-4z" />
        </g>
      </g>
    </svg>
  </figure>
</template>

<style scoped>
.ghostie-illustration {
  --paper: #ead9d0;
  --ink: #624a68;
  --body: #fff8ec;
  --wash: #e4d3ea;
  --shadow: rgb(72 42 62 / 18%);
  --accent: #d68d6e;
  --spark: #e4b66f;
  --emerald: #5d9d83;
  width: 100%;
  margin: 0;
  overflow: hidden;
  background: color-mix(in srgb, var(--paper) 82%, transparent);
  border-radius: inherit;
}

.ghostie-illustration svg {
  width: 100%;
  height: 100%;
}

.ghostie-paper > rect { fill: var(--paper); }
.ghostie-paper > circle:first-of-type { fill: rgb(255 249 238 / 35%); }
.ghostie-paper > circle:last-of-type { fill: rgb(143 94 129 / 9%); }
.ghostie-paper > path { fill: none; stroke: rgb(98 74 104 / 15%); stroke-width: 2; stroke-linecap: round; }
.ghostie-shadow { fill: var(--shadow); }
.ghostie-body,
.ghostie-mini > path:first-child { fill: var(--body); stroke: var(--ink); stroke-width: 3.2; stroke-linecap: round; stroke-linejoin: round; }
.ghostie-wash { fill: var(--wash); opacity: 0.48; }
.ghostie-eye { fill: var(--ink); }
.ghostie-eye-glint { fill: #fff; }
.ghostie-mouth,
.ghostie-cheek,
.ghostie-mini path:not(:first-child),
.ghostie-prop path:not(.ghostie-accent, .ghostie-spark, .ghostie-emerald),
.ghostie-prop rect { fill: none; stroke: var(--ink); stroke-width: 3; stroke-linecap: round; stroke-linejoin: round; }
.ghostie-cheek { stroke: #c9858c; opacity: 0.62; }
.ghostie-prop--shield > path:first-child,
.ghostie-prop--protect > path:first-child,
.ghostie-prop--heart > path:first-child,
.ghostie-prop--share > rect,
.ghostie-prop--book > path:first-child,
.ghostie-prop--book > path:nth-child(2),
.ghostie-prop--artist > rect:first-child,
.ghostie-prop--play > rect { fill: #f2dfd4; }
.ghostie-prop--chaos > rect { fill: #d9c4e2; }
.ghostie-prop--frame > rect { fill: #f6e7da; }
.ghostie-prop--frame > path { fill: #d8b6c8; }
.ghostie-prop--frame > circle { fill: var(--spark); }
.ghostie-accent { fill: var(--accent) !important; stroke: var(--ink) !important; stroke-width: 2.4 !important; }
.ghostie-spark { fill: var(--spark) !important; stroke: var(--ink) !important; stroke-width: 2 !important; }
.ghostie-emerald { fill: var(--emerald) !important; stroke: var(--ink) !important; stroke-width: 2.4 !important; }
.ghostie-swatch--one { fill: #b89ac8; stroke: var(--ink); stroke-width: 2; }
.ghostie-swatch--two { fill: #d38e78; stroke: var(--ink); stroke-width: 2; }
.ghostie-swatch--three { fill: #719d85; stroke: var(--ink); stroke-width: 2; }
.ghostie-question { fill: none; stroke: var(--ink); stroke-width: 3; stroke-linecap: round; }
.ghostie-illustration--bare { background: transparent; }

:global(:root[data-theme="dark"]) .ghostie-illustration {
  --paper: #2f2131;
  --ink: #785f80;
  --body: #fff5e9;
  --wash: #d5bfe2;
  --shadow: rgb(7 3 8 / 32%);
}

:global(:root[data-theme="light"]) .ghostie-illustration {
  --paper: #f4e6d9;
  --ink: #644d67;
  --body: #fffaf0;
  --wash: #e3d3ea;
  --shadow: rgb(84 60 69 / 14%);
}
</style>
