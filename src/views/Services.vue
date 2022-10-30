<template>
    <transition name="fade" mode="out-in">
      <main>
        <Banner :data="services.banner" />
        <section class="services-panel-wrapper container">
          <Services-panel
            v-for="service in services.servicesList"
            :key="service.id"
            :data="service"
          />
        </section>
        <Partners/>
      </main>
    </transition>
</template>

<script>
import content from "@/services/content.js";
import Banner from "@/components/Banner.vue";
import ServicesPanel from "@/components/ServicesPanel.vue";
import Partners from "@/components/Partners.vue";

export default {
  components: {
    Banner,
    ServicesPanel,
    Partners
  },
  name: "Services",
  data() {
    return {
      services: content.page.services
    };
  }
};
</script>

<style>
.services-panel-wrapper .service-panel:last-child {
  border: 0;
}
</style>
