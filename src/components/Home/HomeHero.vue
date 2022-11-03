<template>
  <section class="home-hero">
    <div class="hero-text-box">
      <h2>{{ headerTop }}</h2>
      <h2>{{ headerBottom }}</h2>
    </div>
    <div class="home-hero-changer">
      <div class="hero-filter"></div>
      <div
        class="main-hero"
        :style="{ backgroundImage: `url('${imageSrc}')` }"
      />
    </div>
  </section>
</template>

<script>

export default {
  name: "HomeHero",
  props: ["headerTop", "headerBottom", "imageSrc"],
};
</script>

<style lang="less">
.home-hero-changer {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  max-height: 540px;
  max-width: 1920px;
}

.hero-filter {
  position: absolute;
  background-color: rgba(0, 0, 0, 0.5);
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 2;
}

.main-hero {
  height: 310px;
  width: 100%;
  background-position: center;
  background-size: cover;
  z-index: 1;
}

.home-hero {
  position: relative;
  display: flex;
  justify-content: center;
  background: black;
}

.hero-text-box {
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  top: 70px;
  left: 0;
  right: 0;
  z-index: 3;

  h2 {
    font-family: "Open Sans", sans-serif;
    font-weight: 600;
    font-size: 22px;
    line-height: 24px;
    color: #fff;
    user-select: none;
    text-transform: uppercase;
    text-align: center;
    margin-bottom: 12px;
  }
}

@media only screen and (min-width: 336px) {
  .hero-text-box {
    top: 80px;

    h2 {
      font-size: 24px;
      line-height: 28px;
      margin-bottom: 14px;
    }
  }
}

@media only screen and (min-width: 420px) {
  .main-hero {
    height: 350px;
  }

  .hero-text-box {
    top: 90px;

    h2 {
      font-size: 26px;
      line-height: 32px;
      margin-bottom: 16px;
    }
  }
}

@media only screen and (min-width: 768px) {
  .main-hero {
    height: 450px;
  }

  .hero-text-box {
    top: 120px;

    h2 {
      font-size: 32px;
      line-height: 38px;
      margin-bottom: 18px;
    }
  }
}

@media only screen and (min-width: 992px) {
  .home-hero .VueCarousel-wrapper {
    max-height: 800px;
  }

  .main-hero {
    height: 540px;
  }

  .hero-text-box {
    top: 160px;

    h2 {
      font-size: 40px;
      line-height: 40px;
      margin-bottom: 20px;
    }
  }
}
</style>
