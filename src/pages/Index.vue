<template>
  <q-page class="flex flex-center">
    <q-img
      alt="Quasar logo"
      src="~assets/quasar-logo-vertical.svg"
      style="width: 200px; height: 200px"
    />
  </q-page>
</template>

<script>
import { api } from "src/boot/axios";
import { defineComponent } from "vue";

export default defineComponent({
  name: "PageIndex",
});
</script>
