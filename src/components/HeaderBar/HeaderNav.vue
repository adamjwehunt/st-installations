<template>
  <div id="header-nav-wrap" class="header-nav-wrap">
    <div class="header-nav-main">
      <router-link to="/">
        <img
          class="logo-main"
          :src="imageUrlFor(logoLarge)"
          alt="Strong tower Installations Logo"
        />
        <img
          class="logo-small"
          :src="imageUrlFor(logoSmall)"
          alt="Strong tower Installations Logo"
        />
      </router-link>
      <HeaderMobileMenu />
      <NavLinks class="header-nav-links" />
    </div>
  </div>
</template>

<script>
import NavLinks from "@/components/NavLinks.vue";
import HeaderMobileMenu from "./HeaderMobileMenu.vue";
import imageUrlBuilder from "@sanity/image-url";
import sanity from "../../client";

const imageBuilder = imageUrlBuilder(sanity);

export default {
  name: "HeaderNav",
  props: ["logoLarge", "logoSmall"],
  components: {
    HeaderMobileMenu,
    NavLinks,
  },
  methods: {
    imageUrlFor(source) {
      return imageBuilder.image(source);
    },
  },
};
</script>

<style lang="less">
.header-nav-wrap {
  background: #fff;
  z-index: 6;
  box-shadow: 0 5px 15px 0 rgba(0, 0, 0, 0.3);
  top: 48px;
}

.header-nav-main {
  display: flex;
  position: relative;
  align-items: flex-end;
  justify-content: space-between;
  height: 70px;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 10px;
  transition: padding 0.1s;
  transition-delay: 0.1s;
  will-change: padding;

  img {
    position: absolute;
    cursor: pointer;
    user-select: none;
    height: 103px;
    bottom: 10px;
  }

  .logo-main {
    visibility: visible;
    opacity: 1;
    transition: opacity 0.25s linear;
    transition-delay: 0.25s;
    will-change: opacity;
    z-index: 10;
  }

  .logo-small {
    margin-left: -2px;
    transition: height 0.1s linear;
    transition-delay: 0.1s;
    will-change: height;
  }
}

.sticky-both {
  .header-nav-main {
    padding-bottom: 0px;

    .header-nav-links {
      max-width: 100% !important;
    }

    img {
      bottom: 5px;
      height: 46px;
      transition: bottom 0.08s linear, height 0.1s linear;
      transition-delay: 0.1s;
      will-change: bottom, height;
    }

    .logo-small {
      margin-left: 0px;
    }

    .logo-main {
      visibility: hidden;
      opacity: 0;
      transition: visibility 0s 0.5s, opacity 0.5s linear, height 0.09s linear;
      transition-delay: 0.1s;
      will-change: opacity, height;
    }
  }
}

.header-nav-links {
  display: none;

  li {
    font-size: 16px;
    font-weight: 700;
  }
}

@media only screen and (min-width: 680px) {
  .header-nav-main {
    height: 128px;

    img {
      height: 150px;
      bottom: 20px;
    }

    .header-nav-links {
      display: flex;
      max-width: 330px;
    }
  }
}

@media only screen and (min-width: 940px) {
  .header-nav-main .header-nav-links {
    display: flex;
    max-width: 100%;
  }
}
</style>
