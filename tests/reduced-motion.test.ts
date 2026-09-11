// Mock only mounting and matchMedia; real Vue refs verify independent consumer lifetime.
import { afterEach, describe, expect, it, vi } from "vitest";
import { useReducedMotion } from "@/composables/useReducedMotion";

const hooks = vi.hoisted(() => ({ mount: [] as (() => void)[], unmount: [] as (() => void)[] }));
vi.mock("vue", async (original) => ({
  ...await original<typeof import("vue")>(),
  onMounted: (callback: () => void) => hooks.mount.push(callback),
  onBeforeUnmount: (callback: () => void) => hooks.unmount.push(callback)
}));
afterEach(() => {
  vi.unstubAllGlobals();
  hooks.mount.length = 0;
  hooks.unmount.length = 0;
});

describe("reduced-motion consumer ownership", () => {
  it("keeps the remaining consumer subscribed after another unmounts", () => {
    const listeners = new Set<(event: { matches: boolean }) => void>();
    const query = {
      matches: true,
      addEventListener: (_type: string, listener: (event: { matches: boolean }) => void) => listeners.add(listener),
      removeEventListener: (_type: string, listener: (event: { matches: boolean }) => void) => listeners.delete(listener)
    };
    vi.stubGlobal("window", { matchMedia: () => query });
    const first = useReducedMotion();
    const second = useReducedMotion();
    hooks.mount.forEach((mount) => mount());
    expect(first.value).toBe(true);
    expect(second.value).toBe(true);
    expect(listeners.size).toBe(2);
    hooks.unmount[0]();
    listeners.forEach((listener) => listener({ matches: false }));
    expect(first.value).toBe(true);
    expect(second.value).toBe(false);
    hooks.unmount[1]();
    expect(listeners.size).toBe(0);
  });
});
