<template>
  <footer v-if="basicInfo">
    <FooterInfo :basicInfo="basicInfo" />
    <FooterNav :facebookLink="basicInfo.facebookLink" :thumbtackLink="basicInfo.thumbtackLink" :logoLarge="basicInfo.logoLarge" :logoSmall="basicInfo.logoSmall" :thumbtackLogo="basicInfo.thumbtackLogo"  />
  </footer>
</template>

<script>
import FooterInfo from './FooterInfo.vue';
import FooterNav from './FooterNav.vue';

export default {
	props: ['basicInfo'],
	components: {
		FooterInfo,
		FooterNav,
	},
	name: 'FooterArea',
};
</script>
