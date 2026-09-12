// Public-safe attribution records only. Private evidence, contracts and approval messages never belong in this browser-facing registry.
import registry from "./artCredits.json" with { type: "json" };
import type { ArtCreditRegistry, CreditGroup } from "@/types/content";

export const artCreditRegistry = registry as ArtCreditRegistry;
export const publicCredits = artCreditRegistry.credits.filter((credit) => credit.pageVisible && credit.creditStatus !== "blocked");

export const publicCreditGroups = artCreditRegistry.groups
  .map((group): CreditGroup & { credits: typeof publicCredits } => ({
    ...group,
    credits: publicCredits.filter((credit) => credit.groupId === group.id)
  }))
  .filter((group) => group.credits.length > 0);
