<template>
  <div class="w-full">
    <div class="-rotate-6 mr-6">
      <q-img
        class="border-4 border-present-3 rounded"
        width="60%"
        style="max-width: 15rem"
        :ratio="5 / 4"
        :src="$props.context?.value[0]"
      />
    </div>
    <div class="rotate-6 ml-6 -mt-2">
      <q-img
        class="border-4 border-present-3 rounded"
        width="60%"
        style="max-width: 15rem"
        :ratio="5 / 4"
        :src="$props.context?.value[1]"
      />
    </div>
  </div>
</template>

<script>
import { defineComponent } from "@vue/runtime-core";

export default defineComponent({
  name: "ImageIntersect",
  props: {
    context: {
      required: true,
    },
  },
});
</script>
