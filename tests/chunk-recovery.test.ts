import { describe, expect, it, vi } from "vitest";
import { attemptChunkRecovery, clearChunkRecovery } from "@/utils/chunkRecovery";

function memoryStorage() {
  const values = new Map<string, string>();
  return {
    getItem: (key: string) => values.get(key) ?? null,
    setItem: (key: string, value: string) => { values.set(key, value); },
    removeItem: (key: string) => { values.delete(key); }
  };
}

describe("stale chunk recovery", () => {
  it("reloads at most once across failed document attempts until a successful mount", () => {
    const storage = memoryStorage();
    const reload = vi.fn();
    expect(attemptChunkRecovery(storage, "/haven/", reload)).toBe(true);
    expect(attemptChunkRecovery(storage, "/haven/", reload)).toBe(false);
    expect(reload).toHaveBeenCalledTimes(1);
    clearChunkRecovery(storage);
    expect(attemptChunkRecovery(storage, "/haven/", reload)).toBe(true);
    expect(reload).toHaveBeenCalledTimes(2);
  });
  it("allows another document to recover and never auto-reloads with denied storage", () => {
    const storage = memoryStorage();
    const reload = vi.fn();
    attemptChunkRecovery(storage, "/haven/", reload);
    expect(attemptChunkRecovery(storage, "/streams/", reload)).toBe(true);
    const denied = { ...storage, setItem: () => { throw new Error("denied"); } };
    expect(attemptChunkRecovery(denied, "/", reload)).toBe(false);
    expect(reload).toHaveBeenCalledTimes(2);
  });
});
