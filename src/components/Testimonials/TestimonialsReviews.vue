<template>
  <section class="reviews">
    <div class="container">
      <div class="row">
        <h1 class="section-title">{{ testimonialsView.reviewsHeader }}</h1>
        <hr class="section-hr" />
      </div>
      <div class="reviews-carousel">
        <carousel
          :navigationEnabled="true"
          navigationNextLabel="<i class='fa fa-chevron-right' aria-hidden='true'></i>"
          navigationPrevLabel="<i class='fa fa-chevron-left' aria-hidden='true'></i>"
          :perPageCustom="[
            [0, 1],
            [992, 2],
          ]"
        >
          <slide v-for="review in thumbtackReviews" :key="review._id">
            <TestimonialsReviewsSlides
              v-if="review.source === 'thumbtack'"
              :data="review"
              :link="basicInfo.thumbtackLink"
              :alt="'Thumbtack logo'"
              :logo="imageUrlFor(testimonialsView.thumbtackLogo)"
              :rating="'tt tt-5'"
            />
          </slide>
          <slide v-for="review in facebookReviews" :key="review._id">
            <TestimonialsReviewsSlides
              v-if="review.source === 'facebook'"
              :data="review"
              :link="basicInfo.facebookLink"
              :alt="'Facebook logo'"
              :logo="imageUrlFor(testimonialsView.facebookLogo)"
              :rating="'fb fb-5'"
            />
          </slide>
        </carousel>
      </div>
    </div>
  </section>
</template>

<script>
import { Carousel, Slide } from "vue-carousel";
import TestimonialsReviewsSlides from "./TestimonialsReviewsSlides.vue";
import imageUrlBuilder from "@sanity/image-url";
import sanity from "../../client";

const imageBuilder = imageUrlBuilder(sanity);

export default {
  name: "TestimonialsReviews",
  props: ["testimonialsView", "reviews", "basicInfo"],
  data: (instance) => ({
    facebookReviews: instance.reviews.filter(
      (review) => review.source === "facebook"
    ),
    thumbtackReviews: instance.reviews.filter(
      (review) => review.source === "thumbtack"
    ),
  }),
  components: {
    Carousel,
    Slide,
    TestimonialsReviewsSlides,
  },
  methods: {
    imageUrlFor(source) {
      return imageBuilder.image(source);
    },
  },
};
</script>

<style lang="less">
.reviews {
  .reviews-carousel {
    display: flex;
    justify-content: center;
  }

  .VueCarousel {
    width: 680px;

    .VueCarousel-slide {
      display: flex;
      justify-content: center;
    }

    .VueCarousel-navigation--disabled {
      display: none;
    }

    .VueCarousel-navigation-button {
      font-size: 30px !important;
      top: 200px !important;
    }

    .VueCarousel-navigation-prev {
      left: 32%;
    }

    .VueCarousel-navigation-next {
      right: 32%;
    }

    .VueCarousel-navigation-prev,
    .VueCarousel-navigation-next {
      color: #797979;
    }

    .VueCarousel-pagination,
    .VueCarousel-navigation--disabled {
      display: none;
    }
  }
}

@media only screen and (min-width: 400px) {
  .reviews {
    .VueCarousel {
      .VueCarousel-navigation-prev {
        left: 28%;
      }

      .VueCarousel-navigation-next {
        right: 28%;
      }
    }
  }
}

@media only screen and (min-width: 460px) {
  .reviews {
    .VueCarousel {
      .VueCarousel-navigation-prev {
        left: 24%;
      }

      .VueCarousel-navigation-next {
        right: 24%;
      }
    }
  }
}

@media only screen and (min-width: 520px) {
  .reviews {
    .VueCarousel {
      .VueCarousel-navigation-prev {
        left: 20%;
      }

      .VueCarousel-navigation-next {
        right: 20%;
      }
    }
  }
}

@media only screen and (min-width: 768px) {
  .reviews {
    .VueCarousel .VueCarousel-pagination {
      display: block;
    }
  }
}

@media only screen and (min-width: 992px) {
  .reviews {
    .VueCarousel {
      width: 900px;

      .VueCarousel-navigation-prev {
        left: 5%;
      }

      .VueCarousel-navigation-next {
        right: 5%;
      }
    }
  }
}

@media only screen and (min-width: 1260px) {
  .reviews {
    .VueCarousel {
      .VueCarousel-navigation-prev {
        left: -4%;
      }

      .VueCarousel-navigation-next {
        right: -4%;
      }
    }
  }
}
</style>
