import { readFileSync } from "node:fs";
import { describe, expect, it } from "vitest";

const tokenSource = readFileSync(new URL("../src/styles/_tokens.scss", import.meta.url), "utf8");

type ThemeName = "nari" | "dark" | "light";

function themeTokens(theme: ThemeName): Map<string, string> {
  const marker = `:root[data-theme="${theme}"]`;
  const markerIndex = tokenSource.indexOf(marker);
  const blockStart = tokenSource.indexOf("{", markerIndex);

  if (markerIndex < 0 || blockStart < 0) {
    throw new Error(`Missing ${theme} theme token block.`);
  }

  let depth = 0;
  let blockEnd = -1;

  for (let index = blockStart; index < tokenSource.length; index += 1) {
    if (tokenSource[index] === "{") depth += 1;
    if (tokenSource[index] === "}") depth -= 1;

    if (depth === 0) {
      blockEnd = index;
      break;
    }
  }

  const block = tokenSource.slice(blockStart, blockEnd + 1);
  const tokens = new Map<string, string>();

  for (const match of block.matchAll(/--([\w-]+):\s*(#[\da-f]{6})\s*;/gi)) {
    tokens.set(match[1], match[2]);
  }

  return tokens;
}

function relativeLuminance(hex: string): number {
  const channels = [1, 3, 5].map((index) => Number.parseInt(hex.slice(index, index + 2), 16) / 255);
  const [red, green, blue] = channels.map((channel) =>
    channel <= 0.04045 ? channel / 12.92 : ((channel + 0.055) / 1.055) ** 2.4
  );

  return 0.2126 * red + 0.7152 * green + 0.0722 * blue;
}

function contrastRatio(first: string, second: string): number {
  const firstLuminance = relativeLuminance(first);
  const secondLuminance = relativeLuminance(second);
  const lighter = Math.max(firstLuminance, secondLuminance);
  const darker = Math.min(firstLuminance, secondLuminance);

  return (lighter + 0.05) / (darker + 0.05);
}

const semanticPairs: Array<[string, string, number]> = [
  ["text", "bg", 4.5],
  ["text-muted", "bg", 4.5],
  ["ink", "surface", 4.5],
  ["ink-muted", "surface", 4.5],
  ["emerald", "bg", 4.5],
  ["emerald-on-surface", "surface", 4.5],
  ["ember-ink", "ember", 4.5],
  ["emerald-ink", "emerald", 4.5],
  ["focus", "bg", 3]
];

describe("theme contrast contracts", () => {
  for (const theme of ["nari", "dark", "light"] as const) {
    it(`${theme} theme keeps semantic foreground/background pairs above target`, () => {
      const tokens = themeTokens(theme);

      for (const [foregroundName, backgroundName, minimum] of semanticPairs) {
        const foreground = tokens.get(foregroundName);
        const background = tokens.get(backgroundName);

        expect(foreground, `${theme} --${foregroundName}`).toBeDefined();
        expect(background, `${theme} --${backgroundName}`).toBeDefined();
        expect(
          contrastRatio(foreground!, background!),
          `${theme} --${foregroundName} on --${backgroundName}`
        ).toBeGreaterThanOrEqual(minimum);
      }
    });
  }
});
