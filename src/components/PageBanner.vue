<template>
  <div class="banner">
    <div class="img" :style="{ backgroundImage: `url('${imageSrc}')` }" />
    <div class="banner-filter"></div>
    <h1>{{ header }}</h1>
  </div>
</template>

<script>
export default {
  props: ["header", "imageSrc"],
  name: "PageBanner",
};
</script>

<style lang="less">
.banner {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 230px;
  text-align: center;
  overflow: hidden;
  background-color: #000;

  .banner-filter {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.6);
  }

  h1 {
    position: absolute;
    align-self: center;
    font-family: "Open Sans", sans-serif;
    z-index: 1;
    font-size: 22px;
    margin-bottom: 20px;
    color: #fff;
    letter-spacing: 1px;
  }

  .img {
    height: 100%;
    width: 100%;
    max-width: 1600px;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }
}

@media only screen and (min-width: 336px) {
  .banner {
    height: 240px;

    h1 {
      font-size: 24px;
    }
  }
}

@media only screen and (min-width: 420px) {
  .banner {
    height: 280px;

    h1 {
      font-size: 26px;
    }
  }
}

@media only screen and (min-width: 768px) {
  .banner {
    height: 320px;

    h1 {
      font-size: 28px;
    }
  }
}

@media only screen and (min-width: 992px) {
  .banner {
    height: 360px;

    h1 {
      font-size: 34px;
    }
  }
}
</style>
