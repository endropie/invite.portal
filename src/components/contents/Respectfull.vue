<template>
  <div class="w-4/5 mx-auto">
    <div
      class="whitespace-pre-line"
      v-text="$props.context?.title || 'Quote'"
    />
    <div
      class="pt-4"
      :class="[
        `${$props.context?.fontType || 'roboto-font'}`,
        `${$props.context?.fontSize || ''}`,
      ]"
      v-text="$props.context?.value"
    />
  </div>
</template>

<script>
import { defineComponent } from "@vue/runtime-core";

export default defineComponent({
  name: "Respectfull",
  props: {
    context: {
      required: true,
    },
  },
});
</script>
