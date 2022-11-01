<template>
  <section>
    <div class="container">
      <div class="row">
        <h2 class="section-title">{{ homeSocial.headerText }}</h2>
        <hr class="section-hr" />
        <div class="col-sm-1"></div>
        <div class="plugin-container col-sm-10">
          <div class="fb-plugin">
            <div
              class="fb-page"
              data-href="https://www.facebook.com/strongtowerinstallations/"
              data-tabs="timeline"
              data-small-header="true"
              data-width="600"
              data-adapt-container-width="true"
              data-hide-cover="false"
              data-show-facepile="false"
            >
              <blockquote
                cite="https://www.facebook.com/strongtowerinstallations/"
                class="fb-xfbml-parse-ignore"
              >
                <a href="https://www.facebook.com/strongtowerinstallations/">
                  Strong Tower Installations on Facebook
                </a>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import content from "@/services/content.js";

/*eslint-disable*/
export default {
  name: "HomeSocial",
  data () {
    return {
      homeSocial: content.page.home.social,
    };
  }, 
  created() {
    function loadFacebookIframe() {
      setTimeout(() => {
        if (FB) {
          FB.XFBML.parse();
        }
      }, 0);
    }
    loadFacebookIframe();
  }
};
</script>

<style lang="less">
.plugin-container {
  display: flex;
  justify-content: center;
  background-repeat: no-repeat;
  background-size: contain;

  .fb-plugin {
    position: relative;
    margin: 10px;
    box-shadow: 0 3px 30px 5px rgba(0, 0, 0, 0.15);
    height: 500px;
    width: 100%;
    max-width: 500px;
  }
}
</style>
