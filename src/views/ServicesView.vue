<template>
  <transition name="fade" mode="out-in">
    <main v-if="!isLoading">
      <PageBanner :header="servicesView.header" :imageSrc="imageUrlFor(servicesView.headerImage)" />
      <section class="services-panel-wrapper container">
        <ServicesPanel
          v-for="service in services"
          :key="service.serviceId"
          :service="service"
        />
      </section>
      <PartnersCarousel :header="servicesView.ourPartnersHeader" :partners="partners" />
    </main>
  </transition>
</template>

<script>
import PageBanner from '@/components/PageBanner.vue';
import ServicesPanel from '@/components/ServicesPanel.vue';
import PartnersCarousel from '@/components/PartnersCarousel.vue';
import imageUrlBuilder from '@sanity/image-url';
import sanity from '../client';

const imageBuilder = imageUrlBuilder(sanity);
const query = `
{
	"servicesView": *[_type == "servicesView"] {
		header,
		headerImage,
		ourPartnersHeader,
	}[0],
	"services": *[_type == "services"] {
		serviceId,
		name,
		icon,
		description,
		image,
		imageAlt
	},
	"partners": *[_type == "partners"] {
		_id,
		image,
		imageAlt,
	}
}
`;

export default {
	components: {
		PageBanner,
		ServicesPanel,
		PartnersCarousel,
	},
	name: 'ServicesView',
	data() {
		return {
			isLoading: true,
			servicesView: null,
			services: null,
			partners: null,
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
				({ servicesView, services, partners }) => {
					this.isLoading = false;
					this.servicesView = servicesView;
					this.services = services;
					this.partners = partners;
				},
				(error) => {
					this.error = error;
				}
			);
		},
	},
};
</script>

<style>
.services-panel-wrapper .service-panel:last-child {
	border: 0;
}
</style>
