# Content Data Schemas

Schemas distinguish draft/approved state so missing facts cannot masquerade as content. Examples use structural placeholders, not production claims.

## Shared fields

```ts
type PublishState = "draft" | "approved" | "retired";
type ISODate = string;

interface Provenance {
  sourceUrl?: string;
  verifiedAt: ISODate;
  approvedBy?: string;
  approvalNote?: string;
}

interface AssetRef {
  src: string;
  width: number;
  height: number;
  alt: string;
  credit?: string;
  licenseRecord?: string;
}
```

Production loaders should reject approved records without required provenance/rights fields.

## Stories

```ts
interface Story {
  id: string;
  slug: string;
  title: string;
  dek: string;
  body: string;                 // sanitized Markdown or structured rich text
  publishedAt?: ISODate;
  state: PublishState;
  privacyReviewedAt?: ISODate;
  contentRating: "general" | "adult-opt-in";
  relatedMediaIds: string[];
  hero?: AssetRef;
  provenance: Provenance;
}
```

No draft story renders publicly. Removal must not require component edits.

## Clips and VODs

```ts
interface MediaMoment {
  id: string;
  title: string;
  description: string;
  platform: "YouTube" | "Twitch" | "Instagram";
  url: string;
  thumbnail?: AssetRef | { remoteUrl: string; alt: string };
  contentRating: "general" | "adult-opt-in";
  state: PublishState;
  provenance: Provenance;
}
```

Remote thumbnails require an allowlisted origin and working text fallback. Adult content is never selected as general by default.

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

Never use `other-approved` to imply public client services. An image needs permission/credit independently of the record's copy approval.

## Tutorials and education

```ts
interface NailGuide {
  id: string;
  title: string;
  summary: string;
  difficulty: "beginner" | "intermediate" | "advanced";
  steps: Array<{ title: string; text: string; image?: AssetRef }>;
  productIds: string[];
  safetyScope?: string;
  reviewedAt: ISODate;
  state: PublishState;
  provenance: Provenance;
}
```

Medical or chemical claims need appropriate authoritative sourcing and a scope disclaimer.

## Resources/products

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
  priceNote?: string;           // optional, dated, never guaranteed
  reviewedAt: ISODate;
  state: PublishState;
  provenance: Provenance;
}
```

An affiliated/sponsored/gifted relationship requires visible disclosure. No item publishes without Nari approval.

## Social and support links

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
  state: PublishState;
}
```

Discord links need guild verification; support links need optionality context; professional links may not expose a private contact method.

## Schedule

```ts
interface ScheduleItem {
  id: string;
  startsAt: string;             // ISO 8601 with explicit offset
  title: string;
  platform: "Twitch" | "YouTube";
  destinationUrl?: string;
  status: "planned" | "changed" | "cancelled";
  verifiedAt: ISODate;
}
```

Do not render a schedule without an owner-approved update workflow, timezone display, stale-state policy, and cancellation behavior.

## Collaboration types and metrics

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
  source: string;
  approvedForPublicUse: boolean;
}
```

The current build contains no `MetricSnapshot`. Never derive sponsor metrics from third-party estimators.

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
  state: PublishState;
  provenance: Provenance;
}
```

Private messages are excluded. Redact identifiers that are unnecessary to the story.

## Optional emote/Ghostie interactions

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

No idle cue may autoplay sound or repeatedly demand attention.

## Validation policy

At current scale, TypeScript interfaces plus Vitest invariants are sufficient. Introduce a runtime schema library only when data enters from JSON, CMS, user input, or another trust boundary. Validate URL protocols, unique IDs/slugs, ISO dates, allowed origins, publish state, content rating, and required rights/provenance before rendering.
