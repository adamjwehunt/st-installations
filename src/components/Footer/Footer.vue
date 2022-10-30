<template>
    <footer>
        <Footer-info/>
        <Footer-nav/>
    </footer>
</template>

<script>
import FooterInfo from "./FooterInfo.vue";
import FooterNav from "./FooterNav.vue";

export default {
  components: {
    FooterInfo,
    FooterNav
  },
  name: "Footer"
};
</script>
