<template>
  <div class="flex flex-col flex-center gap-6">
    <div v-html="$props.context?.embed" />
    <div class="whitespace-pre-line" v-text="$props.context?.label" />
    <q-btn
      v-if="$props.context?.linkURL"
      rounded
      color="present"
      icon="pin_drop"
      :label="$props.context?.linkLabel || 'Lokasi'"
      :href="$props.context?.linkURL"
      target="_blank"
    />
  </div>
</template>

<script>
import { defineComponent } from "@vue/runtime-core";

export default defineComponent({
  name: "Location",
  props: {
    context: {
      required: true,
    },
  },
});
</script>
