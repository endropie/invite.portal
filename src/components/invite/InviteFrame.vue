<template>
  <transition
    appear
    leave-class="hidden"
    :enter-active-class="
      [
        'animated',
        `${$props.animate?.enterName || 'fadeIn'}`,
        `${$props.animate?.enterDuration || 'slow'}`,
        `${$props.animate?.enterDelay || ''}`,
      ].join(' ')
    "
    :leave-active-class="
      [
        'animated',
        `${$props.animate?.leaveName || 'fadeOut'}`,
        `${$props.animate?.leaveDuration || 'slow'}`,
        `${$props.animate?.leaveDelay || 'delay-3s'}`,
      ].join(' ')
    "
    @after-appear="
      (e) =>
        e.classList.add(
          'animated',
          $props.animate?.showName || 'pulse',
          $props.animate?.showDuration || 'slow',
          'infinite'
        )
    "
    @after-enter="
      (e) =>
        e.classList.add(
          'animated',
          $props.animate?.showName || 'pulse',
          $props.animate?.showDuration || 'slow',
          'infinite'
        )
    "
  >
    <img v-if="$props.as === 'img' && $props.show" v-bind="$attrs" />
  </transition>
</template>

<script>
import { defineComponent } from "@vue/runtime-core";

export default defineComponent({
  name: "InviteFrame",
  props: {
    as: { type: String, required: true },
    animate: Object,
    show: Boolean,
  },
  setup() {
    return {};
  },
});
</script>
