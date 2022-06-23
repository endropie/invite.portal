<template>
  <div :class="[`${$props.context?.width || 'w-4/5'}`]">
    <q-img
      :ratio="16 / 9"
      :src="$props.context?.value"
      fit="cover"
      class="border-4 border-present-2 rounded"
    />
  </div>
</template>

<script>
import { defineComponent } from "@vue/runtime-core";

export default defineComponent({
  name: "Image",
  props: {
    context: {
      required: true,
    },
  },
});
</script>
