import type { SocialLink } from "@/types/content";

export type NariLinkPlatform = "twitch" | "youtube" | "x" | "tiktok" | "instagram" | "throne";
export type NariLinkCategory = "social" | "support";

export type NariLink = SocialLink & {
  platform: NariLinkPlatform;
  category: NariLinkCategory;
};

export const nariLinks: NariLink[] = [
  {
    label: "Twitch",
    handle: "nari_nuna",
    url: "https://www.twitch.tv/nari_nuna",
    purpose: "Live streams and the heart of the on-air Haven",
    verifiedAt: "2026-08-13",
    external: true,
    platform: "twitch",
    category: "social"
  },
  {
    label: "YouTube",
    handle: "@Nari_Nuna",
    url: "https://www.youtube.com/@Nari_Nuna",
    purpose: "Curated videos, Shorts, nail content, and highlights",
    verifiedAt: "2026-08-13",
    external: true,
    platform: "youtube",
    category: "social"
  },
  {
    label: "X",
    handle: "@Nari_Nuna",
    url: "https://x.com/Nari_Nuna",
    purpose: "Updates, art credits, and creator conversation",
    verifiedAt: "2026-08-13",
    external: true,
    platform: "x",
    category: "social"
  },
  {
    label: "TikTok",
    handle: "@narinuna",
    url: "https://www.tiktok.com/@narinuna",
    purpose: "Short-form stream chaos and clips",
    verifiedAt: "2026-08-13",
    external: true,
    platform: "tiktok",
    category: "social"
  },
  {
    label: "Instagram",
    handle: "@narinunagotu",
    url: "https://www.instagram.com/narinunagotu",
    purpose: "Gaming moments, nail-polish life, and visual updates",
    verifiedAt: "2026-08-13",
    external: true,
    platform: "instagram",
    category: "social"
  },
  {
    label: "Throne",
    handle: "narinuna",
    url: "https://throne.com/narinuna",
    purpose: "Optional support and wishlist gifts",
    verifiedAt: "2026-08-13",
    external: true,
    platform: "throne",
    category: "support"
  }
];

export const socialLinks: SocialLink[] = nariLinks.filter(({ category }) => category === "social");

function requireNariLink(platform: NariLinkPlatform): NariLink {
  const link = nariLinks.find((candidate) => candidate.platform === platform);

  if (!link) {
    throw new Error(`Missing Nari link for ${platform}`);
  }

  return link;
}

export const twitchUrl = requireNariLink("twitch").url;
export const discordUrl = "https://discord.com/invite/f25YtvtnbV";
export const throneUrl = requireNariLink("throne").url;
