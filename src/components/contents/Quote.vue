<template>
  <div
    :class="[
      `${$props.context?.fontType || 'roboto-font'}`,
      `${$props.context?.fontSize || ''}`,
    ]"
  >
    <div
      class="w-4/5 mx-auto whitespace-pre-line"
      :class="[`${$props.context?.isItalic || true ? 'text-italic' : ''}`]"
      v-text="$props.context?.caption || 'Quote'"
    />
    <div class="text-sm pt-4" v-text="$props.context?.author" />
  </div>
</template>

<script>
import { defineComponent } from "@vue/runtime-core";

export default defineComponent({
  name: "Quote",
  props: {
    context: {
      required: true,
    },
  },
});
</script>
