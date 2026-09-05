export interface NavigationItem {
  label: string;
  href: string;
  shortLabel?: string;
}

export interface SocialLink {
  label: string;
  handle: string;
  url: string;
  purpose: string;
  verifiedAt: string;
  external: true;
}

export interface MediaMoment {
  id: string;
  title: string;
  description: string;
  platform: "YouTube" | "Twitch" | "Instagram";
  url: string;
  thumbnailUrl?: string;
  alt?: string;
  contentRating: "general" | "adult-opt-in";
  verifiedAt: string;
}

export interface ResourceCategory {
  title: string;
  description: string;
  status: "curating" | "published";
  examples: string[];
}

export interface CommunityValue {
  title: string;
  description: string;
}
