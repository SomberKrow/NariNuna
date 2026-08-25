export type PrinnyPublicationState = "approved" | "retired";

export interface PrinnyRosterRecord {
  id: string;
  assetId: string;
  name: string;
  cultTitle: string;
  bio: string;
  status: string;
  rankId: string;
  rankLabel: string;
  publishState: PrinnyPublicationState;
}

export const prinnyRosterCapacity = 27 as const;

export const prinnyCultAssets = {
  sanctumPainting: "/media/prinny-cult/prinny-sanctum-illustrated-v2.webp",
  altarPainting: "/media/prinny-cult/prinny-altar-illustrated-v2.webp",
  room: "/media/prinny-cult/prinny-cult-room.svg",
  altar: "/media/prinny-cult/prinny-altar.svg",
  pedestal: "/media/prinny-cult/prinny-pedestal.svg",
  banner: "/media/prinny-cult/prinny-cult-banner.svg",
  membershipSeal: "/media/prinny-cult/prinny-membership-seal.svg",
  summoningCircle: "/media/prinny-cult/prinny-summoning-circle.svg",
  warningSign: "/media/prinny-cult/prinny-warning-sign.svg",
  offeringBox: "/media/prinny-cult/prinny-offering-box.svg",
  rosterCardTemplate: "/media/prinny-cult/prinny-roster-card-template.svg",
  rankBadgeSet: "/media/prinny-cult/prinny-rank-badge-set.svg",
  titleplateTemplate: "/media/prinny-cult/prinny-titleplate-template.svg",
  entryState: "/media/prinny-cult/prinny-cult-entry-state.svg",
  easterEggReward: "/media/prinny-cult/prinny-cult-easteregg-reward.svg"
} as const;

// Canonical character records remain empty until the supplied images and copy have
// an approved public-use record. This prevents filenames or generated prose from
// quietly becoming canon while still giving the UI a stable typed contract.
export const prinnyRoster: readonly PrinnyRosterRecord[] = [];

// These are the 27 artwork designs supplied in Nari's own project archive. The
// file labels identify web derivatives; they are not invented names, ranks,
// biographies, approvals, or a claim that franchise rights are resolved.
export const suppliedPrinnyArtwork = [
  "batman",
  "bulgarian-traitor",
  "cpurkitty",
  "death",
  "derpy-batman",
  "emo-frog",
  "frog",
  "good-and-evil",
  "hambone-1",
  "monster-hunter-frog",
  "monster-hunter-frog2",
  "monster-hunter-frog3",
  "monster-hunter-frog4",
  "monster-hunter-frog5",
  "monster-hunter-frog6",
  "monster-hunter-kitty",
  "monster-hunter-kitty2",
  "monster-hunter-orin",
  "original",
  "orin-as-prinny-fire-eyes",
  "orin",
  "pajama-batman",
  "panda",
  "prinny",
  "puzzle",
  "slime",
  "traitor"
].map((assetId, index) => ({
  assetId,
  src: `/media/prinny-cult/roster/${assetId}.webp`,
  alt: `Supplied Prinny collection artwork ${String(index + 1).padStart(2, "0")}`
}));

export const prinnyNamesList = prinnyRoster.map(({ id, name }) => ({ id, name }));
export const prinnyCultTitlesList = prinnyRoster.map(({ id, cultTitle }) => ({ id, cultTitle }));
export const prinnyBiosList = prinnyRoster.map(({ id, bio }) => ({ id, bio }));
export const prinnyStatusList = prinnyRoster.map(({ id, status }) => ({ id, status }));
