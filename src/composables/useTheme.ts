import { readonly, ref } from "vue";
import type { ThemeName } from "@/types/content";

const themes: ThemeName[] = ["nari", "dark", "light"];
const initial = themes.includes(document.documentElement.dataset.theme as ThemeName)
  ? (document.documentElement.dataset.theme as ThemeName)
  : "nari";
const currentTheme = ref<ThemeName>(initial);

const themeColors: Record<ThemeName, string> = {
  nari: "#2a1820",
  dark: "#130d13",
  light: "#efe1cd"
};

export function setTheme(theme: ThemeName): void {
  if (!themes.includes(theme)) return;
  currentTheme.value = theme;
  document.documentElement.dataset.theme = theme;
  document.querySelector('meta[name="theme-color"]')?.setAttribute("content", themeColors[theme]);
  try {
    window.localStorage.setItem("nari-haven-theme-v1", theme);
  } catch {
    // Persistence is optional; the selected theme still applies for this page.
  }
}

export function useTheme() {
  return {
    currentTheme: readonly(currentTheme),
    themes,
    setTheme
  };
}
