import { onBeforeUnmount, onMounted, readonly, ref } from "vue";

const reduced = ref(false);
let query: MediaQueryList | null = null;

function update(event?: MediaQueryListEvent): void {
  reduced.value = event?.matches ?? query?.matches ?? false;
}

export function useReducedMotion() {
  onMounted(() => {
    query ??= window.matchMedia("(prefers-reduced-motion: reduce)");
    update();
    query.addEventListener("change", update);
  });

  onBeforeUnmount(() => query?.removeEventListener("change", update));

  return readonly(reduced);
}
