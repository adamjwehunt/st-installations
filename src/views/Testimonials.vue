<template>
  <transition name="fade" mode="out-in">
    <main>
      <Banner :data="testimonials.banner" />
      <TestimonialsReviews />
      <TestimonialsRatings />
    </main>
  </transition>
</template>

<script>
import content from "@/services/content.js";
import Banner from "@/components/Banner.vue";
import TestimonialsRatings from "@/components/Testimonials/TestimonialsRatings.vue";
import TestimonialsReviews from "@/components/Testimonials/TestimonialsReviews.vue";

export default {
  components: {
    Banner,
    TestimonialsRatings,
    TestimonialsReviews
  },
  name: "Testimonials",
  data() {
    return {
      testimonials: content.page.testimonials
    };
  }
};
</script>
