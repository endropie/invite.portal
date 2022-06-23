<template>
  <div
    v-text="$props.context?.value"
    :class="[
      `${$props.context?.fontType || 'roboto-font'}`,
      `${$props.context?.fontSize || 'text-lg'}`,
      `${$props.context?.fontWeight || 'font-normal'}`,
    ]"
  />
</template>

<script>
import { defineComponent } from "@vue/runtime-core";

export default defineComponent({
  name: "Subtitle",
  props: {
    context: {
      required: true,
    },
  },
});
</script>
