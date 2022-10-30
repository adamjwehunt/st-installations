<template>
  <section class="container">
    <div class="row">
      <h1 class="section-title">{{ homeServices.headerText }}</h1>
      <hr class="section-hr">
      <div class="col-sm-1"></div>
      <div class="home-services-panel col-sm-10">
        <p>{{ homeServices.summary }}</p>
        <div class="home-services-grid">
          <HomeServicesLink
            v-for="service in services.servicesList"
            :key="service.id"
            :data="service"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import content from "@/services/content.js";
import HomeServicesLink from "./HomeServicesLink.vue";

export default {
  components: {
    HomeServicesLink
  },
  name: "HomeServices",
  data() {
    return {
      homeServices: content.page.home.services,
      services: content.page.services
    };
  }
};
</script>

<style lang="less">
.home-services-panel {
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 50px 14px;
  margin-top: 10px;
  box-shadow: 0 3px 30px 5px rgba(0, 0, 0, 0.15);

  p {
    padding: 0 10%;
    font-size: 17px;
    line-height: 36px;
    color: #797979;
    margin-bottom: 20px;
    text-align: center;
  }
}

.home-services-grid {
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 0px;
}

@media only screen and (min-width: 460px) {
  .home-services-grid {
    grid-template-columns: 1fr 1fr;
    grid-gap: 0px 60px;
  }
}

@media only screen and (min-width: 992px) {
  .home-services-grid {
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 10px 100px;
  }
}
</style>
