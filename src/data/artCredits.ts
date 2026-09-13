// Public-safe attribution records only. Private evidence, contracts and approval messages never belong in this browser-facing registry.
import registry from "./artCredits.json" with { type: "json" };
import type { ArtCreditRegistry, CreditGroup } from "@/types/content";
import type { ArtworkKey } from "@/data/artworkDelivery";

export const artCreditRegistry = registry as ArtCreditRegistry;
export const publicCredits = artCreditRegistry.credits.filter((credit) => credit.pageVisible && credit.creditStatus !== "blocked");

export const publicCreditGroups = artCreditRegistry.groups
  .map((group): CreditGroup & { credits: typeof publicCredits } => ({
    ...group,
    credits: publicCredits.filter((credit) => credit.groupId === group.id)
  }))
  .filter((group) => group.credits.length > 0);

export const approvedArchiveArtwork = publicCredits.flatMap((credit) =>
  credit.artworkDisplayStatus === "approved"
    ? credit.artwork.map((artwork) => ({ ...artwork, src: artwork.src as ArtworkKey, credit }))
    : []
);

/** Resolve contextual links through the canonical public registry so page components never duplicate attribution strings. */
export function publicCreditById(id: string) {
  return publicCredits.find((credit) => credit.id === id);
}
