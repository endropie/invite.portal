<template>
  <div class="mt-2 mb-2" style="min-width: 16rem">
    <div
      v-text="$props.context?.title || 'Kepada YTH'"
      class="pb-4 whitespace-pre-line"
    />
    <div
      class="p-4 rounded"
      :class="[
        `${$props.context?.fontWeight || 'font-medium'}`,
        $props.context.border ? 'border-2 border-present-3' : '',
        `${
          $props.context?.boxshadow || true
            ? 'text-present-1 bg-present-5 border-2 border-present-3 shadow-2'
            : 'text-present-5'
        }`,
      ]"
    >
      <div
        v-text="$route.query?.visitor || 'Tamu Undangan'"
        class="whitespace-pre-line"
        :class="[
          `${$props.context?.fontType || 'roboto-font'}`,
          `${$props.context?.fontSize || 'text-lg'}`,
        ]"
      />
      <div
        v-text="$route.query?.address || 'Ditempat'"
        class="pt-2 whitespace-pre-line"
      />
    </div>
  </div>
</template>

<script>
import { defineComponent } from "@vue/runtime-core";

export default defineComponent({
  name: "Visitor",
  props: {
    context: {
      required: true,
    },
  },
});
</script>
