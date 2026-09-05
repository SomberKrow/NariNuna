import manifest from "./responsive-artwork.json";

export interface ArtworkCandidate {
  src: string;
  width: number;
  height: number;
  bytes: number;
}

export function artworkCandidates(source: string): readonly ArtworkCandidate[] {
  const asset = manifest[source as keyof typeof manifest];
  if (!asset) throw new Error(`Missing responsive artwork: ${source}`);
  return asset.candidates;
}

export function artworkSrc(source: string, width: number): string {
  const candidates = artworkCandidates(source);
  return (candidates.find((candidate) => candidate.width >= width) ?? candidates[candidates.length - 1]).src;
}

export function artworkSrcset(source: string, maxWidth = Infinity): string {
  return artworkCandidates(source).filter((candidate) => candidate.width <= maxWidth).map(({ src, width }) => `${src} ${width}w`).join(", ");
}

// CSS backgrounds and HTML preloads/pictures use the same media and density rules.
// Mobile cover crops need more pixels than their narrow visible frame. Never upscale
// beyond the preserved 1672px painting, even on wide or high-density screens.
export const heroBands = [
  { media: "(width < 768px)", widths: [768, 1280] },
  { media: "(768px <= width < 1280px)", widths: [1280, 1672] },
  { media: "(width >= 1280px)", widths: [1672] }
] as const;

export function heroSources(source: string) {
  return heroBands.map(({ media, widths }) => ({
    media,
    src: artworkSrc(source, widths[0]),
    srcset: widths.map((width, index) => `${artworkSrc(source, width)} ${index + 1}x`).join(", "),
    background: `image-set(${widths.map((width, index) => `url("${artworkSrc(source, width)}") ${index + 1}x`).join(", ")})`
  }));
}

export function heroStyle(source: string) {
  const sources = heroSources(source);
  return {
    "--hero-art-small": sources[0].background,
    "--hero-art-medium": sources[1].background,
    "--hero-art-wide": sources[2].background,
    "--chapter-painting": "var(--responsive-hero-art)",
    "--haven-scene": "var(--responsive-hero-art)"
  };
}
