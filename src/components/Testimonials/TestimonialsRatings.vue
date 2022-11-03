<template>
  <section>
    <div class="container">
      <div class="row">
        <h1 class="section-title">{{ testimonialsView.ratingsHeader }}</h1>
        <hr class="section-hr" />
      </div>
      <div class="row">
        <div class="ratings-wrapper">
          <a
            class="thumbtack-ratings-wrapper"
            :href="basicInfo.thumbtackLink"
            target="_blank"
          >
            <img
              class="thumbtack-logo img-responsive"
              :src="imageUrlFor(testimonialsView.thumbtackLogoLarge)"
              :alt="'Thumbtack logo'"
            />
            <img
              class="thumbtack-ratings-img img-responsive"
              :src="imageUrlFor(testimonialsView.thumbtackRatingSummary)"
              :alt="'Thumbtack ratings'"
            />
          </a>
          <a
            class="facebook-ratings-wrapper"
            :href="basicInfo.facebookLink"
            target="_blank"
          >
            <img
              class="facebook-logo img-responsive"
              :src="imageUrlFor(testimonialsView.facebookLogoLarge)"
              :alt="'Facebook logo'"
            />
            <img
              class="facebook-ratings-img img-responsive"
              :src="imageUrlFor(testimonialsView.facebookRatingSummary)"
              :alt="'Facebook ratings'"
            />
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import imageUrlBuilder from '@sanity/image-url';
import sanity from '../../client';

const imageBuilder = imageUrlBuilder(sanity);

export default {
	name: 'TestimonialsRatings',
	props: ['testimonialsView', 'basicInfo'],
	methods: {
		imageUrlFor(source) {
			return imageBuilder.image(source);
		},
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
