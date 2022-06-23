<template>
  <q-tabs
    ref="eTabs"
    v-bind="$attrs"
    @update:model-valuexx="(v) => onChange(v)"
    inline-label
    outside-arrows
    mobile-arrows
    align="justify"
    :breakpoint="0"
    class="bg-present-1 text-present-5 absolute-bottom"
    content-class="eTabScroll"
  >
    <q-tab
      v-for="(item, index) in $props.sections"
      :key="`tab-${index}`"
      :id="`eTab-${index}`"
      :name="index"
      no-caps
      style="min-width: 33%"
    >
      <div>
        <q-icon class="mr-1" size="16px" :name="item.icon || 'subject'" />
        <span class="yanone-font leading-none">
          {{ item.label }}
        </span>
      </div>
    </q-tab>
  </q-tabs>
</template>

<script>
import { scroll } from "quasar";
import { defineComponent, ref, watch } from "@vue/runtime-core";

export default defineComponent({
  name: "InviteTabs",
  props: {
    section: Object,
    sections: Array,
  },
  setup(props) {
    const eTabs = ref();
    const { setHorizontalScrollPosition } = scroll;

    watch(props.section, (x, y) => {
      if (x.isLeaving || x.index < 0) return;

      const v = props.section.index;
      const el = document.querySelector("#eTab-" + v);
      if (el) {
        const target = document.querySelector(".eTabScroll");
        let to = (v - 1 > 0 ? v : 0) * el.clientWidth - el.clientWidth;
        setHorizontalScrollPosition(target, to, 800);
      }
    });
    return {
      eTabs,
    };
  },
});
</script>
