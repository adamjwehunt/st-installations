<template>
  <transition name="fade" mode="out-in">
    <main v-if="!isLoading">
      <HomeHero :headerTop="homeView.headerTop" :headerBottom="homeView.headerBottom" :imageSrc="imageUrlFor(homeView.headerImage)" />
      <HomeServices :header="homeView.servicesHeader" :summary="homeView.servicesSummary" :services="services" />
      <HomeSocial :header="homeView.facebookFeedHeader" />
      <PartnersCarousel :header="homeView.ourPartnersHeader" :partners="partners" />
    </main>
  </transition>
</template>

<script>
import HomeHero from '@/components/Home/HomeHero.vue';
import HomeServices from '@/components/Home/HomeServices.vue';
import HomeSocial from '@/components/Home/HomeSocial.vue';
import PartnersCarousel from '@/components/PartnersCarousel.vue';
import imageUrlBuilder from '@sanity/image-url';
import sanity from '../client';

const imageBuilder = imageUrlBuilder(sanity);
const query = `
{
	"homeView": *[_type == "homeView"] {
    headerTop,
    headerBottom,
    headerImage,
    servicesHeader,
		servicesSummary,
    facebookFeedHeader,
    ourPartnersHeader,
	}[0],
	"services": *[_type == "services"] {
		serviceId,
		name,
		icon,
	},
  "partners": *[_type == "partners"] {
		_id,
		image,
		imageAlt,
	}
}
`;

export default {
	name: 'HomeView',
	components: {
		HomeHero,
		HomeServices,
		HomeSocial,
		PartnersCarousel,
	},
	data() {
		return {
			isLoading: true,
			homeView: null,
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
				({ homeView, services, partners }) => {
					this.isLoading = false;
					this.homeView = homeView;
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
