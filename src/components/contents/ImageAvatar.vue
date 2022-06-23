<template>
  <div>
    <q-avatar color="present-2" :size="$props.context?.size || '6rem'">
      <img :src="$props.context?.value" class="object-cover" />
    </q-avatar>
  </div>
</template>

<script>
import { defineComponent } from "@vue/runtime-core";

export default defineComponent({
  name: "ImageAvatar",
  props: {
    context: {
      required: true,
    },
  },
});
</script>
