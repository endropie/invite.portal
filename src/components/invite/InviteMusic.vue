<template>
  <q-btn
    v-if="$props.audio"
    class="absolute-bottom-right no-padding"
    icon="play_circle_outline"
    @click="toggle"
    v-bind="$attrs"
  >
    <audio ref="audref" :src="$props.audio" autoplay loop></audio>
  </q-btn>
</template>

<script>
import { defineComponent, ref } from "@vue/runtime-core";

export default defineComponent({
  name: "InviteMusic",
  props: {
    audio: String,
  },
  setup() {
    const audref = ref();
    const toggle = () => {
      if (audref.value.paused) {
        audref.value.play();
      } else {
        audref.value.pause();
      }
    };

    return { audref, toggle };
  },
});
</script>
