<template>
  <section class="partners">
    <div class="container">
      <div class="row">
        <h1 class="section-title">{{ header }}</h1>
        <hr class="section-hr" />
        <carousel
          :autoplay="true"
          :navigationEnabled="true"
          :loop="true"
          navigationNextLabel="<i class='fa fa-chevron-right' aria-hidden='true'></i>"
          navigationPrevLabel="<i class='fa fa-chevron-left' aria-hidden='true'></i>"
          :perPageCustom="[
            [0, 1],
            [768, 2],
          ]"
        >
          <slide v-for="partner in partners" :key="partner._id">
            <div>
              <img :src="imageUrlFor(partner.image)" :alt="partner.imageAlt" />
            </div>
          </slide>
        </carousel>
      </div>
    </div>
  </section>
</template>

<script>
import { Carousel, Slide } from "vue-carousel";
import imageUrlBuilder from "@sanity/image-url";
import sanity from "../client";
const imageBuilder = imageUrlBuilder(sanity);

export default {
  name: "PartnersCarousel",
  props: ["header", "partners"],
  components: {
    Carousel,
    Slide,
  },
  methods: {
    imageUrlFor(source) {
      return imageBuilder.image(source);
    },
  },
};
</script>

<style lang="less">
.partners {
  .container {
    padding: 0;
    border-bottom: 2px solid #f4f4f4;

    .row {
      margin: 30px 14% 60px;

      img {
        height: 32px;
        width: auto;
      }
    }
  }

  .VueCarousel-slide {
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: center;

    div {
      display: flex;
      justify-content: center;
    }
  }

  .VueCarousel-navigation-button {
    font-size: 19px !important;
    top: 36px !important;
  }

  .VueCarousel-navigation-prev {
    left: -8%;
    color: #797979;
  }

  .VueCarousel-navigation-next {
    right: -8%;
    color: #797979;
  }

  .VueCarousel-pagination {
    display: none;
  }
}

@media only screen and (min-width: 768px) {
  .partners .VueCarousel-pagination {
    display: block;
  }
}

@media only screen and (min-width: 992px) {
  .partners {
    img {
      height: 50px;
    }

    .VueCarousel-navigation-button {
      font-size: 24px !important;
    }

    .VueCarousel-navigation-prev {
      left: -4%;
    }

    .VueCarousel-navigation-next {
      right: -4%;
    }
  }
}
</style>
