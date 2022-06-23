<template>
  <transition
    class="flex-none"
    appear
    leave-class="hidden"
    :enter-active-class="transition.getEnterClass()"
    :leave-active-class="transition.getLeaveClass()"
  >
    <q-btn
      v-show="$props.show"
      color="present"
      rounded
      label="Buka Undangan"
      @click="$emit('open'), setFullscreen()"
    />
  </transition>
</template>

<script>
import { defineComponent } from "@vue/runtime-core";
import { useQuasar } from "quasar";
import { useTransite } from "src/composables/transite";

export default defineComponent({
  name: "InviteStartButton",
  props: {
    show: Boolean,
  },
  setup(props) {
    const $q = useQuasar();

    const transition = useTransite({
      name: props.transite?.name || "zoom",
      delay: props.transite?.delay || null,
      duration: props.transite?.duration || null,
    });

    return {
      transition,
      setFullscreen: () => {
        setTimeout(() => {
          const target = document.getElementById("invite-page");
          // $q.fullscreen.request(target);
        }, 500);
      },
    };
  },
});
</script>
