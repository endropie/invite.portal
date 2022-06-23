<template>
  <div class="py-4 w-4/5">
    <div
      :class="[
        'grid grid-cols-3 grid-rows-4',
        $props.context?.noSpace ? '' : 'gap-2 md:gap-4',
      ]"
    >
      <div
        v-for="(photo, i) in $props.context?.values || []"
        :key="i"
        :class="[photo?.span]"
      >
        <q-img
          :src="photo.src"
          width="100%"
          height="100%"
          fit="cover"
          spinner-color="present"
          spinner-size="82px"
          :img-class="[$props.context?.rounded ? 'rounded' : ''].join(' ')"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "@vue/runtime-core";

export default defineComponent({
  name: "Photos",
  props: {
    context: {
      required: true,
    },
  },
});
</script>
