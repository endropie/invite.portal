<template>
  <div
    class="absolute top-0 left-0 w-full h-full light-dimmed"
    style="z-index: 10"
  >
    <div class="block" style="z-index: 11">
      <div class="flex flex-center flex-nowrap">
        <q-btn
          color="present"
          rounded
          label="Buat link undangan"
          @click="open()"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref } from "@vue/runtime-core";
import { useQuasar } from "quasar";

export default defineComponent({
  name: "InviteLinkForm",
  props: {
    show: Boolean,
  },
  setup() {
    const form = ref(false);

    return {
      open: () => {
        form.value = true;
        console.warn("OPEN");
      },
    };
  },
});
</script>
