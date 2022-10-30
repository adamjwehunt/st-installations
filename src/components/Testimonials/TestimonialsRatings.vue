<template>
  <section>
    <div class="container">
      <div class="row">
        <h1 class="section-title">{{ ratings.header }}</h1>
        <hr class="section-hr">
      </div>
      <div class="row">
        <div class="ratings-wrapper">
          <a class="thumbtack-ratings-wrapper"
            :href="info.tt.link"
            target='_blank'
          >
            <img 
              class="thumbtack-logo img-responsive"
              :src="ratings.thumbtack.logo.src"
              :alt="info.tt.alt"
            />
            <img 
              class="thumbtack-ratings-img img-responsive"
              :src="ratings.thumbtack.image.src"
              :alt="ratings.thumbtack.image.alt"
            />
          </a>
          <a class="facebook-ratings-wrapper"
            :href="info.fb.link"
            target='_blank'
          >
            <img 
              class="facebook-logo img-responsive"
              :src="ratings.facebook.logo.src"
              :alt="info.fb.alt"
            />
            <img 
              class="facebook-ratings-img img-responsive"
              :src="ratings.facebook.image.src"
              :alt="ratings.facebook.image.alt"
            />
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import content from '@/services/content.js';

export default {
	name: 'TestimonialsRatings',
	data() {
		return {
			ratings: content.page.testimonials.ratings,
			info: content.info,
		};
	},
};
</script>

<style lang="less">
.ratings-wrapper {
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	align-items: center;
	width: 100%;
	padding: 0 30px;

	a {
		display: flex;
		flex-direction: column;
		margin: 40px 0 32px;
	}

	.thumbtack-ratings-wrapper {
		width: 350px;
		max-width: 100%;

		.thumbtack-logo {
			width: 130px;
		}
	}

	.facebook-ratings-wrapper {
		justify-content: space-between;
		height: 100px;
		width: 220px;

		.facebook-ratings-img {
			width: 220px;
		}

		.facebook-logo {
			width: 130px;
		}
	}
}

@media only screen and (min-width: 992px) {
	.ratings-wrapper {
		flex-direction: row;
	}
}
</style>
