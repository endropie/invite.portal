import { computed, reactive, readonly, toRef, watch } from "@vue/runtime-core";

export function useInvite(property = null) {
  const state = reactive({
    record: null,
    loading: false,
    section: {
      background: undefined,
      share: property?.share || undefined,
      dev: property?.dev || undefined,
      index: undefined,
      isOpen: false,
      isLeaving: false,
    },
    visitor: property?.visitor || null,
  });

  var autoNextSection;

  const onFetch = (callback = undefined) => {
    state.loading = true;

    setTimeout(() => {
      const resdata = require("./resdata/index");

      state.record = resdata;
      state.section.background = state.record.background || undefined;

      state.section.index =
        typeof state.section.dev === "number" ? state.section.dev : 0;

      state.loading = false;

      if (typeof callback === "function") callback(state);
    }, 0);
  };

  const nextSection = (v = undefined) => {
    if (state.section.isLeaving) return;

    if (autoNextSection) clearTimeout(autoNextSection);

    if (v === undefined) v = (state.section.index || -1) + 1;

    if (v >= state.record?.sections?.length) return;

    state.section.isLeaving = true;

    setTimeout(() => {
      state.section.index = v;
      state.section.isLeaving = false;
      if (state.dev !== "number") setAutoplay(state.record?.autoplay);
    }, 3000);
  };

  const startSection = () => {
    const find = state.record?.sections.findIndex((e, i) => {
      if (i === 0 || e.disabled === true) return false;
      return true;
    });

    state.section.isOpen = true;
    nextSection(find > -1 ? find : 0);
  };

  const setAutoplay = (v = null) => {
    if (v === true || typeof v === "number") {
      if (v < 5) v = 5;
      autoNextSection = setTimeout(() => nextSection(), v * 1000);
    }
  };

  const stopAutoplay = () => {
    if (autoNextSection) clearTimeout(autoNextSection);
  };

  const frames = computed(() => {
    return state.section?.row?.frames || state.record?.frames || [];
  });

  const audio = computed(() => {
    return {
      show:
        !state.section.share &&
        state.section.isOpen &&
        state.section?.index > -1 &&
        typeof state.section.dev !== "number",
      src: state.record?.audio,
    };
  });

  const tab = computed(() => {
    return {
      show:
        !state.section.share &&
        state.section.isOpen &&
        state.section?.index > -1 &&
        typeof state.section.dev !== "number",
      rows: state.record?.sections || [],
    };
  });

  const sections = computed(() => {
    return (
      state.record?.sections.map((s) => ({
        ...s,
        frames: s.frames || state.record.frames || [],
      })) || []
    );
  });

  return {
    record: readonly(toRef(state, "record")),
    section: readonly(state.section),
    sections,
    // frames,
    audio,
    tab,
    onFetch,
    startSection,
    nextSection,
    stopAutoplay,
  };
}
