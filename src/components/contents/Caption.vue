<template>
  <div
    v-text="$props.context?.value"
    class="whitespace-pre-line"
    :class="[
      `${$props.context?.fontType || 'roboto-font'}`,
      `${$props.context?.fontSize || ''}`,
      `${$props.context?.isItalic ? 'text-italic' : ''}`,
    ]"
  />
</template>

<script>
import { defineComponent } from "@vue/runtime-core";

export default defineComponent({
  name: "Caption",
  props: {
    context: {
      required: true,
    },
  },
});
</script>
