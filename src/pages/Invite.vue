<template>
  <q-dialog v-model="dialog" maximized persistent>
    <q-layout view="lHh Lpr lFf" class="bg-grey-3">
      <q-page-container>
        <q-page id="invite-page">
          <q-card
            v-if="section.index !== undefined"
            flat
            id="invite-card bg-grey-1"
            class="relative-position mx-auto"
            :style="{
              height: '100vh',
              overflow: 'hidden',
              width: '100vw',
              maxWidth: '960px',
              minWidth: '320px',
            }"
          >
            <q-card-section
              class="flex flex-col justify-center"
              :style="{
                backgroundImage: `url(${section.background}) !important`,
                backgroundPosition: 'fixed',
                backgroundSize: '100% 100% !important',
                height: `calc(100vh - ${tab.show ? 3 : 0}rem)`,
                overflow: 'hidden',
              }"
              v-on:click="stopAutoplay"
            >
              <div
                v-for="(sc, si) in sections"
                :key="si"
                v-show="si === section.index"
                :class="[
                  'flex flex-col no-wrap justify-center items-center gap-4',
                  'roboto-font text-present text-center',
                ]"
              >
                <InviteFrame
                  v-for="(trx, index) in sc.frames || []"
                  :key="`transite-${index}`"
                  :as="trx.mode"
                  :show="!section.isLeaving"
                  :animate="trx.animate"
                  v-bind="trx.attrs"
                />
                <InviteContent
                  v-for="(content, index) in sc.contents || []"
                  :key="`content-${section.index}-${index}`"
                  :show="!section.isLeaving"
                  :mode="content.mode"
                  :context="content.context"
                  :transite="content.transite"
                  v-bind="content.attrs || undefined"
                  :class="['mx-auto max-w-sm sm:max-w-md md:max-w-lg px-none']"
                  style="z-index: 5"
                />
                <InviteVisitor
                  v-if="section.index === 0"
                  :share="visitor.share"
                  :context="visitor.context"
                  :transite="visitor.transite"
                />
                <InviteStartButton
                  v-if="
                    section.index === 0 && !section.share && !section.isOpen
                  "
                  :show="!section.isLeaving"
                  :context="visitor.context"
                  :transite="visitor.transite"
                  class="self-center"
                  @open="startSection()"
                />
              </div>
            </q-card-section>
            <InviteTabs
              v-if="tab.show"
              :section="section"
              :sections="tab.rows"
              :model-value="section?.index"
              @update:model-value="(v) => nextSection(v)"
            />
            <InviteMusic
              v-if="audio.show"
              :audio="audio.src"
              color="present-4"
              dense
              round
              class="mr-4 mb-4"
              :style="`bottom: ${section?.index < 0 ? 0 : 3}rem`"
            />
          </q-card>
        </q-page>
      </q-page-container>
    </q-layout>
  </q-dialog>
</template>

<script>
import { defineComponent, onMounted, ref } from "@vue/runtime-core";
import InviteFrame from "components/invite/InviteFrame";
import InviteMusic from "components/invite/InviteMusic";
import InviteContent from "components/invite/InviteContent";
import InviteTabs from "components/invite/InviteTabs";
import InviteStartButton from "components/invite/InviteStartButton";
import InviteVisitor from "src/components/invite/InviteVisitor";
import { useRoute } from "vue-router";
import { useInvite } from "src/composables/invite";

export default defineComponent({
  name: "Invite",
  components: {
    InviteFrame,
    InviteMusic,
    InviteContent,
    InviteTabs,
    InviteVisitor,
    InviteStartButton,
  },
  props: {
    share: String, // [whatsapp]
  },
  setup(props) {
    const dialog = ref(true);

    const $route = useRoute();

    const dev = $route.query?.dev ? Number($route.query?.dev) : undefined;
    const share = props.share || undefined;

    const {
      section,
      sections,
      audio,
      tab,
      onFetch,
      startSection,
      nextSection,
      stopAutoplay,
    } = useInvite({ dev, share });

    const visitor = ref({
      share: Boolean(props.share),
      context: {
        title: "Kepada YTH\nBapak/Ibu/Saudara/i",
        name: $route.query.visitor,
        address: $route.query.address,
      },
      transite: {
        name: "runback-down",
      },
    });

    onMounted(() => {
      onFetch();
      console.warn(props);
    });

    return {
      dialog,
      visitor,
      sections,
      section,
      audio,
      tab,
      startSection,
      nextSection,
      stopAutoplay,
    };
  },
});
</script>
