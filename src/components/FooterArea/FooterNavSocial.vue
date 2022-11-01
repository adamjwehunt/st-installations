<template>
  <ul class="footer-nav-social">
    <li>
      <a :href="info.fb.link" target="_blank">
        <i class="fa fa-facebook" aria-hidden="true" />
      </a>
    </li>
    <li>
      <div
        class="fb-like"
        :data-href="info.fb.link"
        data-layout="button"
        data-action="like"
        data-size="small"
        data-show-faces="false"
        data-share="true"
      ></div>
    </li>
    <li class="thumbtack">
      <a target="_blank" :href="info.tt.link">
        <img
          src="https://static.thumbtackstatic.com/media/pages/profile/standard-widgets/pro-svg/inline.svg"
          :alt="info.tt.alt"
        />
      </a>
    </li>
  </ul>
</template>

<script>
import content from "@/services/content.js";

export default {
  name: "FooterNavSocial",
  data() {
    return {
      info: content.info,
    };
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

  .thumbtack {
    margin-top: 4px;

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
