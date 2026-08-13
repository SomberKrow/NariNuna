import type { CommunityValue, ResourceCategory } from "@/types/content";

export const communityValues: CommunityValue[] = [
  {
    title: "Treat people like people",
    description: "Decency is the floor. Respect, kindness, and care are how the room stays safe enough for real joy."
  },
  {
    title: "Bring your whole weird self",
    description: "The Haven has room for loud laughs, quiet corners, strange interests, and people who need time to warm up."
  },
  {
    title: "Protect without controlling",
    description: "Found family means support and boundaries together—not ownership, pressure, or cruelty disguised as loyalty."
  },
  {
    title: "Make something together",
    description: "Games, nails, stories, jokes, and shared learning turn a chat room into a place people remember."
  }
];

export const resourceCategories: ResourceCategory[] = [
  {
    title: "Nail desk",
    description: "Products, tools, storage, and learning references Nari has personally reviewed.",
    status: "curating",
    examples: ["Polish and color systems", "Prep and art tools", "Practice and organization"]
  },
  {
    title: "Creator shelf",
    description: "Streaming, editing, and creative tools with an honest note about who they suit.",
    status: "curating",
    examples: ["Streaming setup", "Editing workflow", "Accessible creator tools"]
  },
  {
    title: "Game pile",
    description: "Games and software that genuinely earned a place in the room.",
    status: "curating",
    examples: ["Community-night games", "Story-rich favorites", "Chaos generators"]
  }
];

export const identityPillars = [
  {
    eyebrow: "The host",
    title: "Big-sister warmth",
    text: "Nari wants people to laugh, learn, feel comfortable, and occasionally hear the direct truth they needed."
  },
  {
    eyebrow: "The spark",
    title: "Playful chaos",
    text: "Gaming panic, tangents, sharp jokes, and wholehearted enthusiasm keep the Haven from ever feeling staged."
  },
  {
    eyebrow: "The craft",
    title: "Nail-art curiosity",
    text: "Self-taught practice, color, process, and a frankly unreasonable affection for nail polish all belong here."
  }
];
