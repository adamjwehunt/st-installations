<template>
  <transition name="fade" mode="out-in">
    <main>
      <Banner :data="about.banner" />
      <AboutMission />
      <AboutTeam />
    </main>
  </transition>
</template>

<script>
import content from "@/services/content.js";
import Banner from "@/components/Banner.vue";
import AboutMission from "@/components/About/AboutMission.vue";
import AboutTeam from "@/components/About/AboutTeam.vue";

export default {
  components: {
    Banner,
    AboutMission,
    AboutTeam
  },
  name: "About",
  data() {
    return {
      about: content.page.about
    };
  }
};
</script>
