<template>
  <q-dialog v-model="dialog" maximized persistent>
    <q-layout view="lHh Lpr lFf" class="bg-grey-3">
      <q-page-container>
        <q-page id="invite-page">
          <q-card
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
              v-if="record"
              :class="[
                'flex flex-col no-wrap items-center justify-center gap-4',
                'roboto-font text-present text-center',
              ]"
              :style="{
                backgroundImage: `url('${record.background}') !important`,
                backgroundPosition: 'fixed',
                backgroundSize: '100% 100% !important',
                height: `calc(100vh - ${tab.show ? 3 : 0}rem)`,
                overflow: 'hidden',
              }"
              v-on:click="stopAutoplay"
            >
              <div>
                <InviteFrame
                  v-for="(trx, index) in frames || []"
                  :key="`transite-${index}`"
                  :as="trx.mode"
                  :show="!section.isLeaving"
                  :animate="trx.animate"
                  v-bind="trx.attrs"
                />
              </div>
              <InviteContent
                v-for="(content, index) in section.row.contents || []"
                :key="`content-${section.index}-${index}`"
                :show="!section.isLeaving"
                :mode="content.mode"
                :context="content.context"
                :transite-name="content.transite?.name"
                :transite-duration="content.transite?.duration"
                :transite-delay="content.transite?.delay"
                v-bind="content.attrs || undefined"
                :class="['mx-auto max-w-sm sm:max-w-md md:max-w-lg px-none']"
                style="z-index: 5"
              />

              <InviteStartButton
                v-if="!$props.linkForm && section.index === -1"
                :show="!section.isLeaving"
                @open="nextSection(1)"
              />
            </q-card-section>
            <InviteTabs
              v-if="!$props.linkForm && tab.show"
              :section="section"
              :sections="tab.rows"
              :model-value="section?.index"
              @update:model-value="(v) => nextSection(v)"
            />
            <InviteMusic
              v-if="!$props.linkForm && record?.audio"
              :audio="record?.audio"
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
import InviteLinkForm from "src/components/invite/InviteLinkForm";
import { useRoute } from "vue-router";
import { useInvite } from "src/composables/invite";

export default defineComponent({
  name: "Invite",
  components: {
    InviteFrame,
    InviteMusic,
    InviteContent,
    InviteTabs,
    InviteStartButton,
  },
  props: {
    share: String, // [whatsapp]
  },
  setup(props) {
    const dialog = ref(true);

    const $route = useRoute();

    const dev = $route.query?.dev ? Number($route.query?.dev) : undefined;
    const visitor = $route.query?.visitor
      ? {
          name: $route.query.visitor,
          address: $route.query?.address,
        }
      : undefined;
    const invite = useInvite({
      dev,
      visitor,
    });

    const {
      record,
      section,
      sections,
      frames,
      tab,
      onFetch,
      nextSection,
      stopAutoplay,
    } = invite;

    console.warn("sections", sections);

    onMounted(() => {
      onFetch();
    });
    console.warn(props);
    return {
      sections,
      dialog,
      frames,
      record,
      section,
      tab,
      nextSection,
      stopAutoplay,
    };
  },
});
</script>
