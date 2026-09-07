import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { useHavenDoor } from "@/composables/useHavenDoor";

const lifecycle = vi.hoisted(() => ({ mount: () => {}, unmount: () => {} }));
vi.mock("vue", async (original) => ({
  ...await original<typeof import("vue")>(),
  onMounted: (callback: () => void) => { lifecycle.mount = callback; },
  onUnmounted: (callback: () => void) => { lifecycle.unmount = callback; }
}));

describe("Haven doorway state and image lifecycle", () => {
  const disconnect = vi.fn();
  const observe = vi.fn();
  let intersection: (entries: { isIntersecting: boolean }[]) => void;

  beforeEach(() => {
    vi.clearAllMocks();
    class Observer {
      constructor(callback: typeof intersection, options: IntersectionObserverInit) {
        intersection = callback;
        expect(options.rootMargin).toBe("300px");
      }
      observe = observe;
      disconnect = disconnect;
    }
    vi.stubGlobal("window", { IntersectionObserver: Observer });
    vi.stubGlobal("IntersectionObserver", Observer);
  });
  afterEach(() => vi.unstubAllGlobals());

  it("opens only at the third knock, clamps repeated knocks and retains the image on reset", () => {
    const door = useHavenDoor();
    expect(door.loadInterior.value).toBe(false);
    for (let knock = 1; knock <= 5; knock++) {
      door.knock();
      expect(door.step.value).toBe(Math.min(knock, 3));
      expect(door.isOpen.value).toBe(knock >= 3);
    }
    expect(door.loadInterior.value).toBe(true);
    door.closeDoor();
    expect(door.step.value).toBe(0);
    expect(door.isOpen.value).toBe(false);
    expect(door.loadInterior.value).toBe(true);
  });

  it("observes the owned threshold, ignores distant entries and disconnects after proximity/unmount", () => {
    const door = useHavenDoor();
    const element = {} as HTMLElement;
    door.threshold.value = element;
    lifecycle.mount();
    expect(observe).toHaveBeenCalledWith(element);
    intersection([{ isIntersecting: false }]);
    expect(door.loadInterior.value).toBe(false);
    intersection([{ isIntersecting: true }]);
    expect(door.loadInterior.value).toBe(true);
    expect(disconnect).toHaveBeenCalledTimes(1);
    lifecycle.unmount();
    expect(disconnect).toHaveBeenCalledTimes(2);
  });

  it("supports focus-triggered loading and cleans up before any intersection", () => {
    const door = useHavenDoor();
    lifecycle.mount();
    door.prepareInterior();
    expect(door.loadInterior.value).toBe(true);
    expect(door.step.value).toBe(0);
    lifecycle.unmount();
    expect(disconnect).toHaveBeenCalledTimes(2);
  });

  it("loads immediately without IntersectionObserver without advancing the narrative", () => {
    vi.stubGlobal("window", {});
    const door = useHavenDoor();
    lifecycle.mount();
    expect(door.loadInterior.value).toBe(true);
    expect(door.step.value).toBe(0);
    lifecycle.unmount();
  });
});
