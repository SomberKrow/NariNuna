<template>
  <svg class="nari-haven-mark" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <circle class="mark-back" cx="32" cy="32" r="30" />
    <path class="mark-arch" d="M17 49V30c0-10 6-18 15-18s15 8 15 18v19" />
    <path class="mark-ghost" d="M23 43c-3-5-4-11-3-17 2-8 7-13 14-13 8 0 14 6 15 14 1 6 0 12-2 16l3 7c-5-1-8-3-11-6-2 4-5 6-8 6s-6-2-8-6c-2 3-5 5-9 6 2-3 5-5 9-7z" />
    <circle class="mark-eye" cx="29" cy="30" r="2.2" />
    <circle class="mark-eye mark-eye--emerald" cx="38" cy="30" r="2.2" />
    <path class="mark-smile" d="M30 36c3 2 5 2 8 0" />
    <path class="mark-spark" d="M49 13l2 5 5 2-5 2-2 5-2-5-5-2 5-2z" />
    <path class="mark-leaf" d="M12 18c8-1 13 3 14 10-7 0-12-3-14-10z" />
    <path class="mark-leaf-line" d="M14 20l10 7" />
  </svg>
</template>

<style scoped>
.nari-haven-mark { width: 100%; height: 100%; }
.mark-back { fill: #432b3a; stroke: rgb(234 201 183 / 45%); stroke-width: 1.5; }
.mark-arch { fill: none; stroke: #c7a3c9; stroke-width: 2.2; stroke-linecap: round; }
.mark-ghost { fill: #fff5e8; stroke: #725978; stroke-width: 2; stroke-linecap: round; stroke-linejoin: round; }
.mark-eye { fill: #725978; }
.mark-eye--emerald { fill: #67a98b; }
.mark-smile,
.mark-leaf-line { fill: none; stroke: #725978; stroke-width: 1.8; stroke-linecap: round; }
.mark-spark { fill: #e4b373; stroke: #725978; stroke-width: 1.3; }
.mark-leaf { fill: #b97b68; stroke: #725978; stroke-width: 1.2; }
:global(:root[data-theme="light"]) .mark-back { fill: #ead4cf; }
:global(:root[data-theme="dark"]) .mark-back { fill: #251827; }
</style>
