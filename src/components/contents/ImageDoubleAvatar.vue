<template>
  <div class="flex flex-row gap-10">
    <q-avatar color="present-2" :size="$props.context?.size || '6rem'">
      <img :src="$props.context?.value[0]" class="object-cover" />
    </q-avatar>

    <q-avatar color="present-2" :size="$props.context?.size || '6rem'">
      <img :src="$props.context?.value[1]" class="object-cover" />
    </q-avatar>
  </div>
</template>

<script>
import { defineComponent } from "@vue/runtime-core";

export default defineComponent({
  name: "ImageDoubleAvatar",
  props: {
    context: {
      required: true,
    },
  },
});
</script>
