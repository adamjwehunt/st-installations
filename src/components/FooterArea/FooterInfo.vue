<template>
  <section class="footer-info container">
    <div class="row">
      <div class="col-sm-5 col-sm-offset-1">
        <h1>ABOUT US</h1>
        <p>{{ basicInfo.aboutUs }}</p>
      </div>
      <FooterInfoContact :phone="basicInfo.phone" :email="basicInfo.email" />
    </div>
  </section>
</template>

<script>
import FooterInfoContact from "./FooterInfoContact.vue";

export default {
  props: ["basicInfo"],
  components: {
    FooterInfoContact,
  },
  name: "FooterInfo",
};
</script>

<style lang="less">
.footer-info {
  display: block;
  border-top: 2px solid #f6f6f6;

  .row {
    margin: 20px 0 10px;
  }

  h1 {
    font-size: 14px;
    font-weight: 700;
    line-height: 19px;
    letter-spacing: 2px;
    margin: 38px 0 22px 0;
  }
}

@media only screen and (min-width: 768px) {
  .footer-info h1 {
    margin-top: 32px;
  }
}
</style>
