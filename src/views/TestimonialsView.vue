<template>
  <transition name="fade" mode="out-in">
    <main v-if="!isLoading">
      <PageBanner :header="testimonialsView.header" :imageSrc="imageUrlFor(testimonialsView.headerImage)" />
      <TestimonialsReviews :testimonialsView="testimonialsView" :reviews="reviews" :basicInfo="basicInfo" />
      <TestimonialsRatings :testimonialsView="testimonialsView" :basicInfo="basicInfo" />
    </main>
  </transition>
</template>

<script>
import PageBanner from '@/components/PageBanner.vue';
import TestimonialsRatings from '@/components/Testimonials/TestimonialsRatings.vue';
import TestimonialsReviews from '@/components/Testimonials/TestimonialsReviews.vue';
import imageUrlBuilder from '@sanity/image-url';
import sanity from '../client';

const imageBuilder = imageUrlBuilder(sanity);
const query = `
{
  "testimonialsView": *[_type == "testimonialsView"][0],
  "reviews": *[_type == "reviews"] {
    _id,
    source,
    name,
    text,
    date
  },
  "basicInfo": *[_type == "basicInfo"] {
    thumbtackLink,
    facebookLink,
  }[0]
}
`;

export default {
	components: {
		PageBanner,
		TestimonialsReviews,
		TestimonialsRatings,
	},
	name: 'TestimonialsView',
	data() {
		return {
			isLoading: true,
			testimonialsView: null,
			reviews: null,
			basicInfo: null,
		};
	},
	created() {
		this.fetchData();
	},
	watch: {
		$route: 'fetchData',
	},
	methods: {
		imageUrlFor(source) {
			return imageBuilder.image(source);
		},
		fetchData() {
			sanity.fetch(query).then(
				({ testimonialsView, reviews, basicInfo }) => {
					this.isLoading = false;
					this.testimonialsView = testimonialsView;
					this.reviews = reviews;
					this.basicInfo = basicInfo;
				},
				(error) => {
					this.error = error;
				}
			);
		},
	},
};
</script>
