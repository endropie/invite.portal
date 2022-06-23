<template>
  <div
    :class="[
      `${$props.context?.fontType || 'Roboto-font'}`,
      `${$props.context?.fontSize || 'text-xl'}`,
      `${$props.context?.fontWeight || 'font-medium'}`,
    ]"
    class="flex flex-row gap-2"
  >
    <span v-text="$props.context?.value[0]" />
    <span>&</span>
    <span v-text="$props.context?.value[1]" />
  </div>
</template>

<script>
import { defineComponent } from "@vue/runtime-core";

export default defineComponent({
  name: "Coupletext",
  props: {
    context: {
      required: true,
    },
  },
});
</script>
