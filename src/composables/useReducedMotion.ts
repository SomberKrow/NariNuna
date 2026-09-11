// Retained motion preference helper for the dormant summoner; each consumer must own and release its own media-query listener.
import { onBeforeUnmount, onMounted, readonly, ref } from "vue";

/** Each mounted consumer owns its listener; unmounting one must not silence another. */
export function useReducedMotion() {
  const reduced = ref(false);
  let query: MediaQueryList | null = null;
  function update(event?: MediaQueryListEvent): void {
    reduced.value = event?.matches ?? query?.matches ?? false;
  }

  onMounted(() => {
    query = window.matchMedia("(prefers-reduced-motion: reduce)");
    update();
    query.addEventListener("change", update);
  });

  onBeforeUnmount(() => query?.removeEventListener("change", update));

  return readonly(reduced);
}
