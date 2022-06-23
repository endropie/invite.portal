<template>
  <vue-countdown
    :time="$props.context?.value"
    v-slot="{ days, hours, minutes, seconds }"
  >
    <div class="flex flex-row items-center gap-4">
      <div
        v-for="(v, i) in [days, hours, minutes, seconds]"
        :key="i"
        class="w-12 bg-present rounded text-present-1"
        :class="[
          `${$props.context?.fontType || 'roboto-font'}`,
          `${$props.context?.fontSize || 'text-xl'}`,
          `${$props.context?.fontWeight || 'font-medium'}`,
        ]"
      >
        {{ v }}
        <div class="font-light text-sm">
          <span v-if="i == 0" v-text="'Hari'" />
          <span v-else-if="i == 1" v-text="'Jam'" />
          <span v-else-if="i == 2" v-text="'Menit'" />
          <span v-else-if="i == 3" v-text="'Detik'" />
        </div>
      </div>
    </div>
  </vue-countdown>
</template>

<script>
import { defineComponent } from "@vue/runtime-core";
import VueCountdown from "@chenfengyuan/vue-countdown";
export default defineComponent({
  name: "CountDown",
  components: { VueCountdown },
  props: {
    context: {
      required: true,
    },
  },
});
</script>
