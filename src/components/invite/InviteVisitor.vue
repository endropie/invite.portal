<template>
  <transition
    class="flex-none"
    appear
    leave-class="hidden"
    :enter-active-class="transition.getEnterClass()"
    :leave-active-class="transition.getLeaveClass()"
  >
    <div class="mt-2 mb-2" style="min-width: 16rem">
      <div
        v-text="$props.context?.title || 'Kepada YTH'"
        class="pb-4 whitespace-pre-line"
      />
      <div
        class="p-4 rounded"
        :class="[
          'border-2 border-present-3',
          `${$props.context?.fontWeight || 'font-medium'}`,
          $props.context.border ? 'border-2 border-present-3' : '',
          `${
            $props.context?.boxshadow || true
              ? 'text-present-1 bg-present-5 shadow-2'
              : 'text-present-5'
          }`,
        ]"
      >
        <div
          v-text="$props.context?.name || 'Tamu Undangan'"
          class="whitespace-pre-line"
          :class="[
            `${$props.context?.fontType || 'roboto-font'}`,
            `${$props.context?.fontSize || 'text-lg'}`,
          ]"
        />
        <div
          v-text="$props.context?.address || 'Ditempat'"
          class="pt-2 whitespace-pre-line"
        />
      </div>
      <div class="mt-5" v-if="$props.share">
        <q-btn
          icon-right="share"
          label="Bagikan"
          :color="$props.context?.boxshadow || true ? 'present-7' : 'present-4'"
          @click="dialog = true"
        />
        <q-dialog
          v-model="dialog"
          position="bottom"
          @before-show="setRawDefault"
        >
          <q-card class="bg-present-1" style="min-width: 285px">
            <q-bar class="bg-present-5 text-present-2">
              <div class="col text-center text-weight-bold text-uppercase">
                Bagikan Undangan
              </div>
              <q-btn
                dense
                flat
                round
                icon="clear"
                color="present-1"
                v-close-popup
              />
            </q-bar>
            <q-tabs
              dense
              left-icon
              inline-label
              v-model="tab"
              class="bg-present-2 text-present"
            >
              <q-tab name="whatsapp" icon="whatsapp" label="whatsapp" />
              <q-tab name="link" icon="public" label="link" />
            </q-tabs>
            <q-card-section>
              <div class="grid grid-cols-1 gap-2">
                <q-input
                  filled
                  dense
                  type="textarea"
                  color="present"
                  v-model="raw.name"
                  :placeholder="'Nama Tamu'.toUpperCase()"
                  autogrow
                  autofocus
                  input-style="text-align:center"
                />
                <q-input
                  filled
                  dense
                  type="textarea"
                  color="present"
                  v-model="raw.address"
                  :placeholder="'Di Tempat'.toUpperCase()"
                  autogrow
                  input-style="text-align:center;min-height:4rem;vertical-align:middle"
                />
                <q-input
                  v-if="tab == 'whatsapp'"
                  filled
                  dense
                  color="present"
                  type="text"
                  v-model="raw.wa"
                  placeholder="+62-888-XXXX-XXX"
                  mask="+##-###-####-#####"
                  input-style="text-align:center"
                />
                <q-field v-else borderless outlined readonly>
                  <template v-slot:control>
                    <div v-text="computeLink" class="ellipsis-2-lines" />
                  </template>
                </q-field>
              </div>
            </q-card-section>
            <q-card-actions align="right">
              <q-btn
                v-if="tab == 'whatsapp'"
                label="Kirim"
                color="present"
                @click="sendWA"
              />
              <q-btn v-else outline label="Salin" color="present" />
              <q-btn outline label="Batal" color="present" v-close-popup />
            </q-card-actions>
          </q-card>
        </q-dialog>
      </div>
    </div>
  </transition>
</template>

<script>
import { computed, defineComponent, ref } from "@vue/runtime-core";
import { useTransite } from "src/composables/transite";
import { useRoute } from "vue-router";

const vRaw = () => ({
  name: null,
  address: "Di Tempat",
  wa: +62,
});

export default defineComponent({
  name: "InviteVisitor",
  props: {
    share: Boolean,
    context: {
      required: true,
    },
  },
  setup(props) {
    const $route = useRoute();
    const dialog = ref(false);
    const tab = ref("whatsapp");
    const raw = ref(null);
    const transition = useTransite({
      name: props.transite?.name || "zoom",
      delay: props.transite?.delay || null,
      duration: props.transite?.duration || null,
    });

    const setRawDefault = () => {
      console.warn("SET DEFAULT");
      raw.value = vRaw();
    };

    const createLink = (v) => {
      const params = new URLSearchParams({
        visitor: v.name,
        address: v.address,
      }).toString();

      return `http://invite.local:8080/u/${$route.params.slug}?${params}`;
    };

    const sendWA = () => {
      const contact = String(raw.value.wa).replace(/\D/g, "");
      const link = createLink(raw.value);

      const params = new URLSearchParams({
        text: `Tes kirim link: ${link}`,
      }).toString();
      const wa = `https://wa.me/${contact}?${params}`;

      console.warn("URL", link, wa);
    };

    const computeLink = computed(() => {
      return createLink(raw.value);
    });

    return { dialog, tab, raw, transition, computeLink, sendWA, setRawDefault };
  },
});
</script>
