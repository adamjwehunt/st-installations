<template>
  <section class="service-panel" :id="data.id">
    <div class="col-sm-1"></div>
    <div class="col-sm-6">
      <img class="img-responsive" :src="data.image.src" :alt="data.image.alt" />
    </div>
    <div class="col-sm-4">
      <h1>{{ data.name }}</h1>
      <p>{{ data.text }}</p>
    </div>
    <div class="col-sm-1"></div>
  </section>
</template>

<script>
export default {
  props: ["data"],
  name: "ServicesPanel",
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
