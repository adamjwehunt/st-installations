<template>
  <transition name="fade" mode="out-in">
    <main>
      <HomeHero />
      <HomeServices />
      <HomeSocial />
      <PartnersCarousel />
    </main>
  </transition>
</template>

<script>
import HomeHero from "@/components/Home/HomeHero.vue";
import HomeServices from "@/components/Home/HomeServices.vue";
import HomeSocial from "@/components/Home/HomeSocial.vue";
import PartnersCarousel from "@/components/PartnersCarousel.vue";

export default {
  components: {
    HomeHero,
    HomeServices,
    HomeSocial,
    PartnersCarousel,
  },
  name: "HomeView",
};
</script>
