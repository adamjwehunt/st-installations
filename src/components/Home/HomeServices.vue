<template>
  <section class="container">
    <div class="row">
      <h1 class="section-title">{{ header }}</h1>
      <hr class="section-hr" />
      <div class="col-sm-1"></div>
      <div class="home-services-panel col-sm-10">
        <p>{{ summary }}</p>
        <div class="home-services-grid" v-if="services">
          <HomeServicesLink
            v-for="service in services"
            :key="service.id"
            :service="service"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import HomeServicesLink from "./HomeServicesLink.vue";

export default {
  name: "HomeServices",
  props: ["header", "summary", "services"],
  components: {
    HomeServicesLink,
  },
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
