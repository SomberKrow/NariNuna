export interface HavenJourneyRoom {
  label: string;
  href: string;
  note: string;
}

/**
 * The intended narrative order through the ordinary public rooms. This is
 * deliberately separate from header priority: navigation helps visitors find
 * a destination, while the journey helps them keep wandering once they arrive.
 */
export const havenJourney: readonly HavenJourneyRoom[] = [
  { label: "Home", href: "/", note: "The little world next door." },
  { label: "Meet Nari", href: "/meet-nari/", note: "The warmth, the chaos, and the craft." },
  { label: "Streams", href: "/streams/", note: "There's always one more good bit." },
  { label: "Nail Studio", href: "/nail-studio/", note: "A little glitter gets everywhere." },
  { label: "The Haven", href: "/haven/", note: "Leave the room a little kinder." },
  { label: "Resources", href: "/resources/", note: "A few good things, chosen with care." },
  { label: "Work With Nari", href: "/work-with-nari/", note: "Good ideas start with a conversation." },
  { label: "Story Time", href: "/stories/", note: "Keep the moments. Make some more." },
  { label: "Support", href: "/support/", note: "Thank you for being part of the room." }
];

export const havenRoomNotes = Object.fromEntries(
  havenJourney.map(({ href, note }) => [href, note])
) as Record<string, string>;
