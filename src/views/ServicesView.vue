<template>
  <transition name="fade" mode="out-in">
    <main>
      <PageBanner :data="services.banner" />
      <section class="services-panel-wrapper container">
        <Services-panel
          v-for="service in services.servicesList"
          :key="service.id"
          :data="service"
        />
      </section>
      <PartnersCarousel />
    </main>
  </transition>
</template>

<script>
import content from "@/services/content.js";
import PageBanner from "@/components/PageBanner.vue";
import ServicesPanel from "@/components/ServicesPanel.vue";
import PartnersCarousel from "@/components/PartnersCarousel.vue";

export default {
  components: {
    PageBanner,
    ServicesPanel,
    PartnersCarousel,
  },
  name: "ServicesView",
  data() {
    return {
      services: content.page.services,
    };
  },
};
</script>

<style>
.services-panel-wrapper .service-panel:last-child {
  border: 0;
}
</style>
