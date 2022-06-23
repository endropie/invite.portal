<template>
  <div class="column pb-2">
    <p v-text="$props.context?.date" />
    <p v-text="$props.context?.time" />
    <p
      v-text="$props.context?.address"
      :class="{
        'whitespace-pre-line': true,
      }"
    />
  </div>
</template>

<script>
import { defineComponent } from "@vue/runtime-core";

export default defineComponent({
  name: "Event",
  props: {
    context: {
      required: true,
    },
  },
});
</script>
