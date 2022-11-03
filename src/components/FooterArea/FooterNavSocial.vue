<template>
  <ul class="footer-nav-social">
    <li>
      <a :href="facebookLink" target="_blank">
        <i class="fab fa-facebook" aria-hidden="true" />
      </a>
    </li>
    <li>
      <div
        class="fb-like"
        :data-href="facebookLink"
        data-layout="button"
        data-action="like"
        data-size="small"
        data-show-faces="false"
        data-share="true"
      ></div>
    </li>
    <li class="thumbtack">
      <a target="_blank" :href="thumbtackLink">
        <img :src="imageUrlFor(thumbtackLogo)" alt="Our Thumbtack.com Page" />
      </a>
    </li>
  </ul>
</template>

<script>
import imageUrlBuilder from "@sanity/image-url";
import sanity from "../../client";

const imageBuilder = imageUrlBuilder(sanity);
export default {
  name: "FooterNavSocial",
  props: ["facebookLink", "thumbtackLink", "thumbtackLogo"],
  methods: {
    imageUrlFor(source) {
      return imageBuilder.image(source);
    },
  },
};
</script>

<style lang="less">
.footer-nav-social {
  display: flex;
  align-items: flex-start;
  justify-content: center;
  user-select: none;
  margin-left: 12px;

  li {
    padding: 0 2px;

    a {
      color: #4a4a4a;
      padding: 6px;
      font-size: 21px;

      .fa-facebook {
        margin-top: 4px;
        padding-right: 4px;
      }
    }
  }

  .fb-like {
    padding-top: 5px;
  }

  .thumbtack {
    margin-top: 4px;
    margin-left: 8px;

    img {
      height: 20px;
    }
  }
}

@media only screen and (min-width: 768px) {
  .footer-nav-social {
    justify-content: end;
    margin-top: 18px;
    margin-left: 30px;
  }
}

@media only screen and (min-width: 992px) {
  .footer-nav-social {
    margin-left: 0px;
  }
}
</style>
