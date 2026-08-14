# Content Data Schemas

**Status:** Current contracts `IMPLEMENTED`; editorial contracts `TARGET`  
**Owns:** Data shapes, publication states, provenance, validation boundaries, migration rules  
**Implementation files:** `src/types/content.ts`, `src/data/*.ts`, `tests/content-contract.test.ts`  
**Update trigger:** Type/interface, local data record, CMS/JSON boundary, or publication workflow changes

## Critical distinction

This document has two levels:

1. **Implemented contracts** mirror the code at the documented snapshot and are enforced only by TypeScript plus current Vitest invariants.
2. **Target editorial contracts** describe the production-ready shape needed when real galleries, stories, schedules, resources, metrics, and approval workflows arrive.

Do not claim the target schemas are implemented. Migrate one content system at a time and add runtime validation only when data crosses a trust boundary.

## Implemented contracts

The current `src/types/content.ts` contains:

```ts
export type ThemeName = "nari" | "dark" | "light";

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
```

Current data modules:

| Module | Records | Current validation |
|---|---|---|
| `navigation.ts` | Primary and footer routes | Uniqueness, Home presence, trailing slash |
| `socials.ts` | Public social links + Twitch/Discord/Throne constants | HTTPS, unique URLs, date shape |
| `media.ts` | Three outbound YouTube Shorts | Count, ID uniqueness, Shorts URL, thumbnail origin, general rating |
| `content.ts` | Community values, resource categories, identity pillars | TypeScript only |

Current tests are useful invariants, not a complete content approval system.

## Shared target primitives

```ts
type PublishState = "draft" | "approved" | "retired";
type ISODate = string;

interface Provenance {
  sourceUrl?: string;
  sourceRecord?: string;
  verifiedAt: ISODate;
  approvedAt?: ISODate;
  approvedBy?: string;
  approvalRecord?: string;
  reviewAfter?: ISODate;
}

interface RightsRecord {
  assetRecord: string;
  owner: string;
  creator?: string;
  credit?: string;
  approvedUses: string[];
}

interface AssetRef {
  src: string;
  srcset?: string;
  sizes?: string;
  width: number;
  height: number;
  alt: string;
  caption?: string;
  rights: RightsRecord;
}
```

Approved records must not omit required provenance or rights. An `ISODate` alias alone does not validate a string; runtime/schema tests must do so when input is external.

## Stories

```ts
interface Story {
  id: string;
  slug: string;
  title: string;
  dek: string;
  body: string;
  publishedAt?: ISODate;
  state: PublishState;
  privacyReviewedAt?: ISODate;
  contentRating: "general" | "adult-opt-in";
  warnings: string[];
  relatedMediaIds: string[];
  hero?: AssetRef;
  provenance: Provenance;
}
```

Rules:

- Only `approved` records render.
- Slug and ID are unique and stable.
- Adult-opt-in stories are labelled before preview/navigation.
- Privacy review is required before approval.
- Removing/retiring a story requires no page-layout edit.
- Body content must be sanitized if it comes from Markdown/CMS.

## Media moments

```ts
interface ApprovedMediaMoment {
  id: string;
  title: string;
  description: string;
  platform: "YouTube" | "Twitch" | "Instagram";
  url: string;
  thumbnail?: AssetRef | { remoteUrl: string; alt: string };
  contentRating: "general" | "adult-opt-in";
  warnings: string[];
  state: PublishState;
  provenance: Provenance;
}
```

Remote images require an allowlisted origin and text fallback. A platform URL is not itself approval to feature the content permanently.

## Nail gallery

```ts
interface NailWork {
  id: string;
  slug: string;
  title: string;
  images: AssetRef[];
  createdAt?: ISODate;
  techniques: string[];
  materials: string[];
  notes?: string;
  workScope: "self-practice" | "other-approved";
  state: PublishState;
  provenance: Provenance;
}
```

Rules:

- `other-approved` does not imply client services.
- Each image has its own rights record.
- Techniques/materials are factual and Nari-approved.
- Public derivatives pass privacy/metadata inspection.
- No generated or stock nail image can be `approved` as Nari's work.

## Nail guides and education

```ts
interface NailGuide {
  id: string;
  slug: string;
  title: string;
  summary: string;
  difficulty: "beginner" | "intermediate" | "advanced";
  steps: Array<{ title: string; text: string; image?: AssetRef }>;
  resourceIds: string[];
  safetyScope: string;
  sources: Array<{ label: string; url: string; reviewedAt: ISODate }>;
  state: PublishState;
  provenance: Provenance;
}
```

Medical/chemical claims require appropriate sources and a scope disclaimer. Difficulty is an editorial label, not a guarantee of safety or outcome.

## Resources and products

```ts
interface ResourceItem {
  id: string;
  category: "nails" | "creator" | "game" | "learning";
  title: string;
  url: string;
  whyNariUsesIt: string;
  bestFor: string;
  relationship: "none" | "affiliate" | "gifted" | "sponsored";
  disclosure?: string;
  priceNote?: string;
  reviewedAt: ISODate;
  state: PublishState;
  provenance: Provenance;
}
```

Any material relationship other than `none` requires visible disclosure. Price notes are dated and never promised. No item publishes without Nari approval.

## Public links

```ts
interface PublicLink {
  id: string;
  label: string;
  handle?: string;
  url: string;
  purpose: string;
  kind: "social" | "community" | "support" | "professional";
  external: true;
  verifiedAt: ISODate;
  reviewAfter?: ISODate;
  state: PublishState;
}
```

Rules differ by kind:

- community link verifies intended guild and failure path;
- support link appears with optionality context;
- professional link may not expose private contact;
- retired links do not silently redirect to another identity.

## Schedule

```ts
interface ScheduleItem {
  id: string;
  startsAt: string;
  endsAt?: string;
  timezoneLabel: string;
  title: string;
  platform: "Twitch" | "YouTube";
  destinationUrl?: string;
  status: "planned" | "changed" | "cancelled";
  verifiedAt: ISODate;
  expiresAt: ISODate;
}
```

Do not implement schedule records until an owner-approved update source, timezone display, stale-state policy, cancellation behavior, and expiry mechanism exist.

## Collaboration and metrics

```ts
interface CollaborationType {
  id: string;
  title: string;
  description: string;
  examples: string[];
  approved: boolean;
}

interface MetricSnapshot {
  id: string;
  platform: string;
  metric: string;
  value: number;
  measuredFrom: ISODate;
  measuredTo: ISODate;
  sourceRecord: string;
  approvedForPublicUse: boolean;
}
```

The current build has no metric snapshots. Never derive sponsor metrics from estimators or scrape them into the client.

## Community highlights

```ts
interface CommunityHighlight {
  id: string;
  title: string;
  summary: string;
  asset?: AssetRef;
  participantDisplayNames: string[];
  permissionRecordedAt?: ISODate;
  moderationReviewedAt?: ISODate;
  removalContactRecord: string;
  state: PublishState;
  provenance: Provenance;
}
```

Private messages/Discord content are excluded by default. Redact identifiers that are unnecessary to understand the story.

## Interaction cues

```ts
interface InteractionCue {
  id: string;
  trigger: "click" | "completion" | "idle-opt-in";
  asset: AssetRef;
  message?: string;
  maxInstances: number;
  cooldownMs: number;
  durationMs: number;
  reducedMotion: "static" | "none";
  approved: boolean;
}
```

No cue autoplays sound, spawns continuously, or demands attention repeatedly.

## Validation levels

| Level | Use now/when | Mechanism |
|---|---|---|
| Compile-time | Trusted local TypeScript literals | Interfaces/unions + strict TypeScript |
| Repository invariant | Cross-record rules | Vitest tests |
| Build-output | Static artifact contract | `scripts/validate-build.mjs` |
| Runtime schema | JSON/CMS/API/user input | Schema validator at trust boundary |
| Editorial approval | Truth, privacy, rights, tone | Approval records and review |

TypeScript cannot prove a URL is live, permission exists, a date is current, or copy is true.

## Migration rule

When moving a content family from current to target contract:

1. Name the editorial owner and publication workflow.
2. Add the target TypeScript type and records without weakening existing invariants.
3. Add tests for IDs/slugs, URL protocol/origin, date shape/expiry, state filtering, rating, provenance, and rights.
4. Update rendering to show only approved records.
5. Add honest empty/error states.
6. Update content, asset, privacy, page, and QA docs.
7. Run `npm run check` and manual route review.

Do not migrate every content family to a generic mega-schema. Their risks differ.
