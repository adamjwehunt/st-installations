<template>
  <transition name="fade" mode="out-in">
    <main v-if="!isLoading">
      <PageBanner :header="contactUsView.header" :imageSrc="imageUrlFor(contactUsView.headerImage)" />
      <ContactForm :header="contactUsView.formHeader" />
    </main>
  </transition>
</template>

<script>
import PageBanner from '@/components/PageBanner.vue';
import ContactForm from '@/components/ContactForm.vue';
import imageUrlBuilder from '@sanity/image-url';
import sanity from '../client';

const imageBuilder = imageUrlBuilder(sanity);
const query = `*[_type == "contactUsView"][0]`;

export default {
	components: {
		PageBanner,
		ContactForm,
	},
	name: 'ContactView',
	data() {
		return {
			isLoading: true,
			contactUsView: null,
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
				(contactUsView) => {
					this.isLoading = false;
					this.contactUsView = contactUsView;
				},
				(error) => {
					this.error = error;
				}
			);
		},
	},
};
</script>
