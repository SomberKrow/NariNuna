import { computed, onMounted, onUnmounted, ref } from "vue";

/** Local three-knock state and one-shot image eligibility; motion stays in door CSS. */
export function useHavenDoor() {
  const knocksRequired = 3;
  const step = ref(0);
  const threshold = ref<HTMLElement | null>(null);
  const loadInterior = ref(false);
  const isOpen = computed(() => step.value === knocksRequired);
  let observer: IntersectionObserver | undefined;

  function prepareInterior(): void {
    loadInterior.value = true;
    observer?.disconnect();
  }

  function knock(): void {
    // Image readiness never gates the narrative or the final destination.
    prepareInterior();
    step.value = Math.min(step.value + 1, knocksRequired);
  }

  function closeDoor(): void {
    step.value = 0;
    // Keep the same loaded image behind the door when the sequence restarts.
  }

  onMounted(() => {
    if (!("IntersectionObserver" in window)) {
      prepareInterior();
      return;
    }
    observer = new IntersectionObserver((entries) => {
      if (entries.some((entry) => entry.isIntersecting)) prepareInterior();
    }, { rootMargin: "300px" });
    if (threshold.value) observer.observe(threshold.value);
  });

  onUnmounted(() => observer?.disconnect());

  return { knocksRequired, step, threshold, loadInterior, prepareInterior, isOpen, knock, closeDoor };
}
