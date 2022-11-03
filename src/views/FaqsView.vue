<template>
  <transition name="fade" mode="out-in">
    <main v-if="!isLoading">
      <PageBanner :header="faqsView.header" :imageSrc="imageUrlFor(faqsView.headerImage)" />
      <QandAs :header="faqsView.faqsHeader" :qAndAs="qAndAs" />
    </main>
  </transition>
</template>

<script>
import PageBanner from '@/components/PageBanner.vue';
import QandAs from '@/components/QandAs.vue';
import imageUrlBuilder from '@sanity/image-url';
import sanity from '../client';

const imageBuilder = imageUrlBuilder(sanity);
const query = `
{
  "faqsView": *[_type == "faqsView"] {
    header,
    headerImage,
    faqsHeader,
  }[0],
  "qAndAs": *[_type == "qAndAs"] {
    _id,
    question,
    answer,
  }
}
`;

export default {
	components: {
		PageBanner,
		QandAs,
	},
	name: 'FaqsView',
	data() {
		return {
			isLoading: true,
			faqsView: null,
			qAndAs: null,
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
				({ faqsView, qAndAs }) => {
					this.isLoading = false;
					this.faqsView = faqsView;
					this.qAndAs = qAndAs;
				},
				(error) => {
					this.error = error;
				}
			);
		},
	},
};
</script>
