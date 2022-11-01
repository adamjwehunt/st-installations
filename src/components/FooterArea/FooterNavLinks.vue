<template>
  <NavLinks class="footer-nav-links" />
</template>

<script>
import NavLinks from "../NavLinks.vue";

export default {
  components: {
    NavLinks,
  },
  name: "FooterNavLinks",
};
</script>

<style lang="less">
.footer-nav-links {
  font-weight: 700;
  flex-wrap: wrap;
  justify-content: space-evenly;
  max-width: 350px;
  margin: 24px auto 32px;
}

@media only screen and (min-width: 768px) {
  .footer-nav-links {
    justify-content: flex-start;
    padding-left: 20px;
    max-width: 400px;
    margin: 8px 0;
  }
}

@media only screen and (min-width: 1260px) {
  .footer-nav-links {
    max-width: 800px;
  }
}
</style>
