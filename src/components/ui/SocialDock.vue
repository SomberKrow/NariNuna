<script setup lang="ts">
import { AtSign, Camera, Crown, Radio, Sparkles, Video, type LucideIcon } from "@lucide/vue";
import { socialLinks, throneUrl } from "@/data/socials";

interface DockLink {
  label: string;
  href: string;
  icon: LucideIcon;
}

const twitch = socialLinks.find((link) => link.label === "Twitch");
const youtube = socialLinks.find((link) => link.label === "YouTube");
const tiktok = socialLinks.find((link) => link.label === "TikTok");
const instagram = socialLinks.find((link) => link.label === "Instagram");
const x = socialLinks.find((link) => link.label === "X");

const links: DockLink[] = [
  ...(twitch ? [{ label: "Twitch", href: twitch.url, icon: Radio }] : []),
  ...(youtube ? [{ label: "YouTube", href: youtube.url, icon: Video }] : []),
  ...(tiktok ? [{ label: "TikTok", href: tiktok.url, icon: Sparkles }] : []),
  ...(instagram ? [{ label: "Instagram", href: instagram.url, icon: Camera }] : []),
  ...(x ? [{ label: "X", href: x.url, icon: AtSign }] : []),
  { label: "Throne", href: throneUrl, icon: Crown }
];
</script>

<template>
  <nav class="social-dock" aria-label="Nari's verified public profiles">
    <a v-for="link in links" :key="link.label" :href="link.href" target="_blank" rel="noreferrer noopener">
      <span class="social-dock__icon" aria-hidden="true"><component :is="link.icon" :size="18" /></span>
      <span class="social-dock__label">{{ link.label }}</span>
      <span class="sr-only"> (opens in a new tab)</span>
    </a>
  </nav>
</template>
