<template>
  <div>
    <pre>
      COMPONENT REF {{ record?.code }}
    </pre>
    <pre>
      COMPONENT COMPUTE {{ compute?.record?.code }}
    </pre>
  </div>
</template>

<script>
import { defineComponent, onMounted } from "vue";
import { useInvite } from "src/composables/invite";

export default defineComponent({
  name: "TestComponet",
  setup() {
    const { compute, record, onFetch } = useInvite();

    onMounted(() => {
      onFetch((data) => console.warn("mounted fetch", data));
    });

    return {
      compute,
      record,
    };
  },
});
</script>
