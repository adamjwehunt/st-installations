<template>
  <section>
    <div class="container">
      <div class="row">
        <h1 class="section-title">{{ team.header }}</h1>
        <hr class="section-hr" />
        <div class="col-sm-1"></div>
        <div class="about-team-image col-sm-10">
          <img :src="team.image.src" :alt="team.image.alt" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import content from "@/services/content.js";

export default {
  name: "AboutTeam",
  data() {
    return {
      team: content.page.about.team,
    };
  },
};
</script>

<style lang="less">
.about-team-image img {
  width: auto;
  height: auto;
  max-height: 475px;
  margin: 0 auto;
  display: block;
  max-width: 100%;
}
</style>
