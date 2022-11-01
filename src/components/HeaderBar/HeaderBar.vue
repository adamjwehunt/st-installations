<template>
  <header>
    <HeaderContact />
    <HeaderNav />
  </header>
</template>

<script>
import HeaderContact from "./HeaderContact.vue";
import HeaderNav from "./HeaderNav.vue";

export default {
  components: {
    HeaderContact,
    HeaderNav,
  },
  name: "HeaderBar",
};
</script>
