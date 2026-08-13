import type { NavigationItem } from "@/types/content";

export const primaryNavigation: NavigationItem[] = [
  { label: "Home", href: "/" },
  { label: "Meet Nari", href: "/meet-nari/" },
  { label: "Streams", href: "/streams/" },
  { label: "Nail Studio", shortLabel: "Nails", href: "/nail-studio/" },
  { label: "The Haven", shortLabel: "Haven", href: "/haven/" },
  { label: "Resources", href: "/resources/" },
  { label: "Work With Nari", shortLabel: "Work", href: "/work-with-nari/" }
];

export const footerNavigation: NavigationItem[] = [
  { label: "Story Time", href: "/stories/" },
  { label: "Support", href: "/support/" }
];
