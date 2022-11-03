<template>
  <section class="service-panel" :id="service.serviceId">
    <div class="col-sm-1"></div>
    <div class="col-sm-6">
      <img
        class="img-responsive"
        :src="imageUrlFor(service.image)"
        :alt="service.imageAlt"
      />
    </div>
    <div class="col-sm-4">
      <h1>{{ service.name }}</h1>
      <p>{{ service.description }}</p>
    </div>
    <div class="col-sm-1"></div>
  </section>
</template>

<script>
import imageUrlBuilder from "@sanity/image-url";
import sanity from "../client";
const imageBuilder = imageUrlBuilder(sanity);

export default {
  props: ["service"],
  name: "ServicesPanel",
  methods: {
    imageUrlFor(source) {
      return imageBuilder.image(source);
    },
  },
};
</script>

<style lang="less">
.service-panel {
  display: flex;
  flex-direction: column;
  background-color: #fff;
  border-bottom: 2px solid #f4f4f4;
  margin-left: -5px;
  margin-right: -5px;
  padding: 50px 0;

  h1 {
    font-family: "Open Sans", sans-serif;
    font-size: 20px;
    line-height: 1;
    text-transform: uppercase;
    padding-top: 18px;
    margin-bottom: 16px;
  }
}

@media only screen and (min-width: 768px) {
  .service-panel {
    flex-direction: row;
    padding: 70px 0;

    h1 {
      padding-top: 0px;
    }
  }

  .service-panel:nth-child(even) {
    flex-direction: row-reverse;
  }
}
</style>
