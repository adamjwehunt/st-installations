<template>
  <transition name="fade" mode="out-in">
    <main>
      <PageBanner :data="testimonials.banner" />
      <TestimonialsReviews />
      <TestimonialsRatings />
    </main>
  </transition>
</template>

<script>
import content from "@/services/content.js";
import PageBanner from "@/components/PageBanner.vue";
import TestimonialsRatings from "@/components/Testimonials/TestimonialsRatings.vue";
import TestimonialsReviews from "@/components/Testimonials/TestimonialsReviews.vue";

export default {
  components: {
    PageBanner,
    TestimonialsRatings,
    TestimonialsReviews,
  },
  name: "TestimonialsView",
  data() {
    return {
      testimonials: content.page.testimonials,
    };
  },
};
</script>
