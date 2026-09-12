// Types describe current local content, not runtime validation or approved future CMS records. Preserve explicit rating and review-date fields.
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

export type CreditStatus = "verified" | "pending" | "internal" | "not-required" | "blocked";
export type ArtworkDisplayStatus = "approved" | "not-approved" | "not-applicable";
export type PublicationStatus = "approved" | "pending" | "blocked";

export interface CreditLink {
  label: string;
  url: string;
}

export interface CreditArtwork {
  src: string;
  alt: string;
  width: number;
  height: number;
}

export interface CreditGroup {
  id: string;
  label: string;
  description: string;
}

export interface AssetFamilyCreditDisposition {
  id: string;
  label: string;
  assetRecord: string | null;
  trackedAssets: string[];
  publicationStatus: PublicationStatus;
}

export interface ArtCredit {
  id: string;
  groupId: string;
  displayName: string;
  roles: string[];
  contribution: string;
  creditText: string;
  links: CreditLink[];
  assetFamilyIds: string[];
  creditStatus: CreditStatus;
  artworkDisplayStatus: ArtworkDisplayStatus;
  artwork: CreditArtwork[];
  pageVisible: boolean;
}

export interface ArtCreditRegistry {
  schemaVersion: number;
  groups: CreditGroup[];
  assetFamilies: AssetFamilyCreditDisposition[];
  credits: ArtCredit[];
}
