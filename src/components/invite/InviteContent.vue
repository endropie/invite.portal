<template>
  <transition
    class="flex-none"
    appear
    leave-class="hidden"
    :enter-active-class="transition.getEnterClass()"
    :leave-active-class="transition.getLeaveClass()"
  >
    <component
      v-show="$props.show"
      :is="$props.mode"
      :context="$props.context"
      v-bind="$attrs"
    />
  </transition>
</template>

<script>
import { defineComponent } from "@vue/runtime-core";
import * as Contents from "src/components/contents";
import { useTransite, transites } from "src/composables/transite";

const modes = [
  "title",
  "subtitle",
  "caption",
  "coupletext",
  "quote",
  "visitor",
  "event",
  "count-down",
  "location",
  "prohealth",
  "photos",
  "ytube",
  "image",
  "image-avatar",
  "image-intersect",
  "image-double-avatar",
  "gift-buttons",
  "respectfull",
];

export default defineComponent({
  name: "InviteContent",
  props: {
    show: Boolean,
    context: {},
    transite: {
      type: Object,
      default: null,
      validator: (val) =>
        val === undefined ||
        val === null ||
        Object.keys(transites).includes(val.name),
    },
    transiteName: {
      type: String,
      default: "fade",
      validator: (val) =>
        val === undefined ||
        val === null ||
        Object.keys(transites).includes(val),
    },
    transiteDelay: {
      type: String,
      default: "delay-2s",
    },
    transiteDuration: {
      type: String,
      default: "slow",
    },
    mode: {
      type: String,
      default: "text",
      validator: (val) => val === "text" || modes.includes(val),
    },
    meta: {
      type: Object,
    },
  },
  components: {
    ...Contents,
  },
  setup(props, vm) {
    const transition = useTransite({
      name: props.transite?.name || null,
      delay: props.transite?.delay || null,
      duration: props.transite?.duration || null,
      // value: vm.attrs.value,
    });
    return {
      transition,
      modes,
      isValidMode: (v) => {
        if (typeof v === "object") return v.includes(props.mode);
        return v === props.mode;
      },
    };
  },
});
</script>
