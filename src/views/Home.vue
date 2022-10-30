<template>
  <transition name="fade" mode="out-in">
    <main>
      <HomeHero/>
      <HomeServices/>
      <HomeSocial/>
      <Partners/>
    </main>
  </transition>
</template>

<script>
import HomeHero from "@/components/Home/HomeHero.vue";
import HomeServices from "@/components/Home/HomeServices.vue";
import HomeSocial from "@/components/Home/HomeSocial.vue";
import Partners from "@/components/Partners.vue";

export default {
  components: {
    HomeHero,
    HomeServices,
    HomeSocial,
    Partners
  },
  name: "Home"
};
</script>
