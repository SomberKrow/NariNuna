import type { NavigationItem } from "@/types/content";

export const primaryNavigation: NavigationItem[] = [
  { label: "Home", href: "/" },
  { label: "Meet Nari", href: "/meet-nari/" },
  { label: "Streams", href: "/streams/" },
  { label: "The Haven", shortLabel: "Haven", href: "/haven/" },
  { label: "Work With Nari", shortLabel: "Work", href: "/work-with-nari/" },
  { label: "Resources", href: "/resources/" },
  { label: "Nail Studio", shortLabel: "Nails", href: "/nail-studio/" }
];

export const footerNavigation: NavigationItem[] = [
  { label: "Story Time", href: "/stories/" },
  { label: "Support", href: "/support/" }
];
