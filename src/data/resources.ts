export type ResourceDemoLayout = "compact" | "standard" | "wide";

export interface ResourceDemoEntry {
  id: string;
  category: "Nail desk" | "Creator shelf" | "Game pile";
  title: string;
  summary: string;
  details: string[];
  layout: ResourceDemoLayout;
}

export const resourceDemoEntries = [
  {
    id: "practice-station-reset",
    category: "Nail desk",
    title: "Practice-station reset",
    summary: "A compact example of how a future resource could explain a small desk habit without turning it into a product pitch.",
    details: ["Prep area", "Tool cleanup", "Storage note"],
    layout: "compact"
  },
  {
    id: "color-map-notes",
    category: "Nail desk",
    title: "Color-map notes before painting",
    summary: "A slightly longer demonstration entry for process notes: map the palette, decide where the loud accent belongs, and leave enough breathing room for the design to read at nail scale.",
    details: ["Palette sketch", "Accent placement"],
    layout: "standard"
  },
  {
    id: "tiny-tool-organization",
    category: "Nail desk",
    title: "Tiny-tool organization that survives a chaotic desk",
    summary: "A wider card showing how a denser practical resource can carry more context without becoming a wall of copy. The final version could hold an approved tool, storage method, or learning reference once Nari actually wants to recommend one.",
    details: ["Keep daily tools visible", "Separate clean and used items", "Label only what helps", "Make reset time obvious"],
    layout: "wide"
  },
  {
    id: "pre-stream-accessibility-pass",
    category: "Creator shelf",
    title: "Pre-stream accessibility pass",
    summary: "A demonstration checklist for the kind of creator resource that can be useful without claiming there is one perfect setup.",
    details: ["Readable scene text", "Caption plan", "Keyboard check", "Audio balance note"],
    layout: "wide"
  },
  {
    id: "clip-triage",
    category: "Creator shelf",
    title: "Clip triage after a stream",
    summary: "Short example content for sorting moments worth revisiting before the backlog becomes a small monster.",
    details: ["Keep", "Maybe", "Let it go"],
    layout: "compact"
  },
  {
    id: "scene-change-checklist",
    category: "Creator shelf",
    title: "Scene-change checklist",
    summary: "A medium-density example for a repeatable creator workflow: what changed, what might break, and what deserves one quick test before going live.",
    details: ["Sources", "Hotkeys", "Text legibility"],
    layout: "standard"
  },
  {
    id: "community-night-fit-check",
    category: "Game pile",
    title: "Community-night fit check",
    summary: "A broader example showing how a future game recommendation could explain why something fits the room instead of simply dropping a title and a buy link.",
    details: ["Player count", "Round length", "Spectator friendliness", "Chaos level"],
    layout: "wide"
  },
  {
    id: "story-game-notes",
    category: "Game pile",
    title: "Story-game notes",
    summary: "A small card for the kind of game that is better described by the mood it creates than by a score.",
    details: ["Pacing", "Conversation fuel"],
    layout: "compact"
  },
  {
    id: "backup-chaos-pile",
    category: "Game pile",
    title: "The backup chaos pile",
    summary: "A medium example for quick, low-commitment options when the original plan collapses and everybody still wants to hang out.",
    details: ["Fast start", "Easy reset", "Room for spectators"],
    layout: "standard"
  }
] as const satisfies readonly ResourceDemoEntry[];
