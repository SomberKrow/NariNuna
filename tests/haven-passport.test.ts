// Exercise the versioned local-only persistence contract without requiring a browser or adding a DOM test dependency.
import { describe, expect, it } from "vitest";
import { createSSRApp, h } from "vue";
import { renderToString } from "vue/server-renderer";
import { havenJourney } from "@/data/journey";
import HavenPassport from "@/components/layout/HavenPassport.vue";
import {
  createHavenPassportPersistence,
  HAVEN_PASSPORT_STORAGE_KEY,
  HAVEN_PASSPORT_VERSION,
  parseHavenPassport,
  type PassportStorage
} from "@/composables/useHavenPassport";

class MemoryStorage implements PassportStorage {
  value: string | null = null;
  getItem() { return this.value; }
  setItem(_key: string, value: string) { this.value = value; }
  removeItem() { this.value = null; }
}

describe("Haven Passport", () => {
  it("records first, repeat, and multiple ordinary-room visits in canonical order", () => {
    const storage = new MemoryStorage();
    const passport = createHavenPassportPersistence(storage);
    expect(passport.visit("/")).toEqual(["/"]);
    expect(passport.visit("/")).toEqual(["/"]);
    expect(passport.visit("/haven/")).toEqual(["/", "/haven/"]);
    expect(JSON.parse(storage.value ?? "").version).toBe(HAVEN_PASSPORT_VERSION);
  });

  it("persists progress across instances and resets only its own key", () => {
    const storage = new MemoryStorage();
    createHavenPassportPersistence(storage).visit("/credits/");
    const restored = createHavenPassportPersistence(storage);
    expect(restored.rooms()).toEqual(["/credits/"]);
    expect(restored.reset()).toEqual([]);
    expect(storage.value).toBeNull();
    expect(HAVEN_PASSPORT_STORAGE_KEY).toBe("nari-haven-passport:v1");
  });

  it("ignores malformed, old-version, secret, 404, and unknown values", () => {
    expect(parseHavenPassport("not-json")).toEqual(new Set());
    expect(parseHavenPassport(JSON.stringify({ version: 0, visited: ["/"] }))).toEqual(new Set());
    const storage = new MemoryStorage();
    const passport = createHavenPassportPersistence(storage);
    passport.visit("/the-prinny-cult/");
    passport.visit("/404.html");
    passport.visit("/missing/");
    expect(passport.rooms()).toEqual([]);
  });

  it("derives its exact count from the canonical journey", () => {
    const storage = new MemoryStorage();
    const passport = createHavenPassportPersistence(storage);
    havenJourney.forEach((room) => passport.visit(room.href));
    expect(passport.rooms()).toHaveLength(havenJourney.length);
  });

  it("keeps working in memory when browser storage throws", () => {
    const broken: PassportStorage = {
      getItem: () => { throw new Error("denied"); },
      setItem: () => { throw new Error("denied"); },
      removeItem: () => { throw new Error("denied"); }
    };
    const passport = createHavenPassportPersistence(broken);
    expect(passport.visit("/streams/")).toEqual(["/streams/"]);
    expect(passport.reset()).toEqual([]);
  });

  it("renders its optional disclosure without requiring browser storage", async () => {
    const html = await renderToString(createSSRApp({ render: () => h(HavenPassport, { currentPath: "/" }) }));
    expect(html).toContain("Haven Passport");
    expect(html).toContain(`0 / ${havenJourney.length} rooms visited`);
    expect(html).toContain("Reset passport");
  });
});
