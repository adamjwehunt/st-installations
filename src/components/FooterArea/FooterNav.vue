<template>
  <div class="footer-nav container">
    <div class="row">
      <div class="col-sm-1" />
      <div class="footer-nav-wrapper col-sm-10">
        <div class="footer-logo-wrapper">
          <router-link to="/">
            <img
              class="footer-logo-small img-responsive'"
              :src="imageUrlFor(logoSmall)"
              alt="Strong tower Installations Logo"
            />
            <img
              class="footer-logo img-responsive'"
              :src="imageUrlFor(logoLarge)"
              alt="Strong tower Installations Logo"
            />
          </router-link>
        </div>
        <div class="footer-nav-links-wrapper">
          <FooterNavLinks />
          <FooterNavSocial
            :facebookLink="facebookLink"
            :thumbtackLink="thumbtackLink"
            :thumbtackLogo="thumbtackLogo"
          />
        </div>
      </div>
      <div class="col-sm-1" />
    </div>
  </div>
</template>

<script>
import FooterNavLinks from "./FooterNavLinks.vue";
import FooterNavSocial from "./FooterNavSocial.vue";
import imageUrlBuilder from "@sanity/image-url";
import sanity from "../../client";

const imageBuilder = imageUrlBuilder(sanity);

export default {
  props: [
    "facebookLink",
    "thumbtackLink",
    "logoLarge",
    "logoSmall",
    "thumbtackLogo",
  ],
  components: {
    FooterNavLinks,
    FooterNavSocial,
  },
  name: "FooterNav",
  methods: {
    imageUrlFor(source) {
      return imageBuilder.image(source);
    },
  },
};
</script>

<style>
.footer-nav {
  padding-top: 20px;
  padding-bottom: 20px;
}

.footer-nav-wrapper {
  display: flex;
  flex-direction: column;
  padding: 40px 0;
  border-top: 1px solid #f6f6f6;
}

.footer-logo-wrapper {
  display: flex;
  justify-content: center;
  padding-top: 14px;
}

.footer-logo {
  display: block;
  width: 180px;
}

.footer-logo-small {
  display: none;
}

.footer-nav-links-wrapper {
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: space-between;
}

@media only screen and (min-width: 768px) {
  .footer-logo-small {
    display: block;
    width: 33px;
  }

  .footer-logo {
    display: none;
  }

  .footer-nav-wrapper,
  .footer-nav-links-wrapper {
    flex-direction: row;
  }
}
</style>
