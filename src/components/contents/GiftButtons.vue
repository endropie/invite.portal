<template>
  <div class="w-2/3" style="max-width: 25rem">
    <div class="flex flex-row justify-around">
      <q-btn
        v-if="$props.context.bank"
        rounded
        color="present-5"
        :label="$props.context.bank.label || 'Hadiah'"
        @click="toggle('bank')"
      />
      <q-btn
        v-if="$props.context.delivery"
        rounded
        color="present-5"
        :label="$props.context.delivery.label || 'Kirim Kado'"
        @click="toggle('delivery')"
      />
    </div>
    <div
      class="p-4 whitespace-pre-line"
      style="min-height: 250px"
      :class="[
        `${$props.context?.fontWeight || ''}`,
        `${$props.context?.fontType || 'roboto-font'}`,
        `${$props.context?.fontSize || 'text-md'}`,
      ]"
    >
      <transition
        class="flex-none"
        appear
        leave-class="hidden"
        enter-active-class="animated zoomIn slow"
        leave-active-class="animated zoomOut slow"
      >
        <div
          v-if="$props.context[layer]"
          class="w-full"
          :hidden="$props.context[layer]?.hidden"
        >
          <div v-text="$props.context[layer]?.caption" class="pb-4" />
          <div
            v-for="(row, i) in $props.context[layer]?.rows || []"
            :key="i"
            class="pb-4"
          >
            <div v-text="row.name" class="font-medium" />
            <div v-text="row.description" />

            <q-btn
              v-if="row.description"
              :label="$props.context[layer].copyLabel || 'Salin'"
              color="present-5"
              outline
              dense
              @click:debounce="onCopy(row.description)"
            />
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref } from "@vue/runtime-core";
import { copyToClipboard, debounce, Notify } from "quasar";

export default defineComponent({
  name: "GiftButtons",
  props: {
    context: {
      required: true,
    },
  },
  setup() {
    const layer = ref(null);
    return {
      layer,
      toggle: (v) => {
        const old = layer.value;
        layer.value = null;
        if (v !== old) {
          setTimeout(() => (layer.value = v), old === null ? 0 : 800);
        }
      },
      onCopy: (v) => {
        debounce(() => {
          copyToClipboard(v)
            .then(() => {
              Notify.create("The description has copied");
            })
            .catch(() => {
              Notify.create({
                type: "negative",
                message: "The description copy failed!",
              });
            });
        }, 2500);
      },
    };
  },
});
</script>
