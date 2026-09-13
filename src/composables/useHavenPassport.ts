// Persist only canonical room paths. Storage failures fall back to this page's memory without affecting navigation.
import { computed, onMounted, ref, toValue, watch, type MaybeRefOrGetter } from "vue";
import { havenJourney } from "@/data/journey";

export const HAVEN_PASSPORT_STORAGE_KEY = "nari-haven-passport:v1";
export const HAVEN_PASSPORT_VERSION = 1;
const canonicalRoomIds = havenJourney.map((room) => room.href);
const canonicalRoomSet = new Set(canonicalRoomIds);

export interface PassportStorage {
  getItem(key: string): string | null;
  setItem(key: string, value: string): void;
  removeItem(key: string): void;
}

interface StoredPassport {
  version: number;
  visited: string[];
}

export function parseHavenPassport(raw: string | null): Set<string> {
  if (!raw) return new Set();
  try {
    const value = JSON.parse(raw) as Partial<StoredPassport>;
    if (value.version !== HAVEN_PASSPORT_VERSION || !Array.isArray(value.visited)) return new Set();
    return new Set(value.visited.filter((room): room is string => typeof room === "string" && canonicalRoomSet.has(room)));
  } catch {
    return new Set();
  }
}

export function createHavenPassportPersistence(storage?: PassportStorage) {
  let visited = new Set<string>();
  try {
    visited = parseHavenPassport(storage?.getItem(HAVEN_PASSPORT_STORAGE_KEY) ?? null);
  } catch {
    // Browser privacy settings may reject even reads; the in-memory Set remains the safe fallback.
  }

  const persist = () => {
    try {
      storage?.setItem(HAVEN_PASSPORT_STORAGE_KEY, JSON.stringify({ version: HAVEN_PASSPORT_VERSION, visited: canonicalRoomIds.filter((room) => visited.has(room)) }));
    } catch {
      // Progress still works for the current document when persistence is unavailable.
    }
  };

  return {
    rooms: () => canonicalRoomIds.filter((room) => visited.has(room)),
    visit(room: string) {
      if (canonicalRoomSet.has(room)) {
        visited.add(room);
        persist();
      }
      return this.rooms();
    },
    reset() {
      visited = new Set();
      try {
        storage?.removeItem(HAVEN_PASSPORT_STORAGE_KEY);
      } catch {
        // Reset always clears in-memory progress even if browser storage refuses the removal.
      }
      return this.rooms();
    }
  };
}

function browserStorage(): PassportStorage | undefined {
  try {
    return typeof window === "undefined" ? undefined : window.localStorage;
  } catch {
    return undefined;
  }
}

export function useHavenPassport(currentPath: MaybeRefOrGetter<string>) {
  const visitedRooms = ref<string[]>([]);
  let persistence = createHavenPassportPersistence();
  let hydrated = false;

  const recordVisit = (path: string) => {
    if (hydrated) visitedRooms.value = persistence.visit(path);
  };

  onMounted(() => {
    persistence = createHavenPassportPersistence(browserStorage());
    hydrated = true;
    recordVisit(toValue(currentPath));
  });
  watch(() => toValue(currentPath), recordVisit);

  const visitedSet = computed(() => new Set(visitedRooms.value));
  const visitedCount = computed(() => visitedRooms.value.length);
  const complete = computed(() => visitedCount.value === havenJourney.length);

  return {
    rooms: havenJourney,
    visitedSet,
    visitedCount,
    complete,
    reset() {
      visitedRooms.value = persistence.reset();
    }
  };
}
