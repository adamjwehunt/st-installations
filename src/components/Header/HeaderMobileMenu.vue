<template>
  <div data-app>
    <v-menu
      attach="#header-nav-wrap"
      absolute
    >
      <v-icon
        slot="activator"
        class="mobile-menu-icon"
      >menu</v-icon>
      <NavLinks class="mobile-nav-links" />
    </v-menu>
  </div>
</template>

<script>
import NavLinks from "@/components/NavLinks.vue";

export default {
  components: {
    NavLinks
  },
  name: "HeaderMobileMenu"
};
</script>

<style lang="less">
.v-menu__content {
  display: block;
  max-width: 290px;
  top: 70px !important;
  right: 0px !important;
  left: auto !important;
  border-radius: 0px;
  box-shadow: -4px 6px 8px -1px rgba(0, 0, 0, 0.3);

  ul {
    flex-direction: column;
    align-items: center;
  }

  li {
    font-size: 28px;
    line-height: 32px;
  }
}

.mobile-menu-icon {
  display: block;
  font-size: 50px;
  user-select: none;
}

.mobile-nav-links {
  background: #fff;
  padding: 10px 10px 20px;

  li {
    width: 85%;
    text-align: center;
  }
}

@media only screen and (min-width: 680px) {
  .mobile-menu-icon,
  .v-menu__content {
    display: none;
  }
}
</style>
