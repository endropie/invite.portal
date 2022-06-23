<template>
  <div>
    <div v-html="$props.context?.embed" />
  </div>
</template>

<script>
import { defineComponent } from "@vue/runtime-core";

export default defineComponent({
  name: "Ytube",
  props: {
    context: {
      required: true,
    },
  },
});
</script>
