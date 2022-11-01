<template>
  <transition name="fade" mode="out-in">
    <main>
      <PageBanner :data="faqs.banner" />
      <FaqsQandA />
    </main>
  </transition>
</template>

<script>
import content from "@/services/content.js";
import PageBanner from "@/components/PageBanner.vue";
import FaqsQandA from "@/components/FaqsQandA.vue";

export default {
  components: {
    PageBanner,
    FaqsQandA,
  },
  name: "FaqsView",
  data() {
    return {
      faqs: content.page.faqs,
    };
  },
};
</script>
