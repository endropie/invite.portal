<template>
  <div
    v-text="$props.context?.value"
    :class="[
      `${$props.context?.fontType || 'roboto-font'}`,
      `${$props.context?.fontSize || 'text-xl'}`,
      `${$props.context?.fontWeight || 'text-bold'}`,
      `${$props.context?.fontColor || 'text-present-5'}`,
      `${$props.context?.underline ? 'underline ' : ''}`,
      `${$props.context?.noSpace ? '-mb-3' : ''}`,
    ]"
  />
</template>

<script>
import { defineComponent } from "@vue/runtime-core";

export default defineComponent({
  name: "Title",
  props: {
    context: {
      required: true,
    },
  },
});
</script>
