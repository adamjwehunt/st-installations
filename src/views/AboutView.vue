<template>
  <transition name="fade" mode="out-in">
    <main>
      <PageBanner :data="about.banner" />
      <AboutMission />
      <AboutTeam />
    </main>
  </transition>
</template>

<script>
import content from "@/services/content.js";
import PageBanner from "@/components/PageBanner.vue";
import AboutMission from "@/components/About/AboutMission.vue";
import AboutTeam from "@/components/About/AboutTeam.vue";

export default {
  components: {
    PageBanner,
    AboutMission,
    AboutTeam,
  },
  name: "AboutView",
  data() {
    return {
      about: content.page.about,
    };
  },
};
</script>
