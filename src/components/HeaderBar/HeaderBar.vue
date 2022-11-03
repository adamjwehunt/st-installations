<template>
  <header>
    <HeaderContact :phone="phone" />
    <HeaderNav :logoLarge="logoLarge" :logoSmall="logoSmall" />
  </header>
</template>

<script>
import HeaderContact from './HeaderContact.vue';
import HeaderNav from './HeaderNav.vue';

export default {
	props: ['phone', 'logoLarge', 'logoSmall'],
	components: {
		HeaderContact,
		HeaderNav,
	},
	name: 'HeaderBar',
};
</script>
