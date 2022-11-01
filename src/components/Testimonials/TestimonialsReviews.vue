<template>
  <section class="reviews">
    <div class="container">
      <div class="row">
        <h1 class="section-title">{{ reviews.header }}</h1>
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
          <slide v-for="review in reviews.tt.reviewList" :key="review.id">
            <TestimonialsReviewsSlides
              :data="review"
              :info="info.tt"
              :logo="reviews.tt.logo"
              :rating="`tt tt-${review.rating}`"
            />
          </slide>
          <slide v-for="review in reviews.fb.reviewList" :key="review.id">
            <TestimonialsReviewsSlides
              :data="review"
              :info="info.fb"
              :logo="reviews.fb.logo"
              :rating="`fb fb-${review.rating}`"
            />
          </slide>
        </carousel>
      </div>
    </div>
  </section>
</template>

<script>
import content from "@/services/content.js";
import { Carousel, Slide } from "vue-carousel";
import TestimonialsReviewsSlides from "./TestimonialsReviewsSlides.vue";

export default {
  components: {
    Carousel,
    Slide,
    TestimonialsReviewsSlides,
  },
  name: "TestimonialsReviews",
  data() {
    return {
      reviews: content.page.testimonials.reviews,
      info: content.info,
    };
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
