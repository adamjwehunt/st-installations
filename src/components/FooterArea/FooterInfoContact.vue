<template>
  <section class="col-sm-4 col-sm-offset-1">
    <h1>{{ contact.headerText }}</h1>
    <address class="footer-info-contact">
      <div>
        <i class="fa fa-phone" aria-hidden="true"></i>
        <a :href="`tel:${info.phone}`">{{ info.phone }}</a>
      </div>
      <div>
        <i class="fa fa-envelope" aria-hidden="true"></i>
        <a
          :href="
            `mailto:${info.email}` +
            `?subject=${email.subject}&amp;` +
            `body=${email.intro}%0A%0A${email.body}%0A%0A${email.outro}`
          "
        >
          {{ info.email }}
        </a>
      </div>
    </address>
  </section>
</template>

<script>
import content from "@/services/content.js";

export default {
  name: "FooterInfoContact",
  data() {
    return {
      info: content.info,
      contact: content.component.footer.contact,
      email: content.component.footer.contact.email,
    };
  },
};
</script>

<style lang="less" scoped>
.footer-info-contact {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: -8px;

  div {
    display: flex;
    align-items: center;
    margin: 10px 0;

    i {
      width: 22px;
      margin-right: 8px;
      font-size: 20px;
      color: #a7090a;
      text-align: center;
    }

    a {
      font-size: 14px;
      color: #4a4a4a;
    }
  }
}

@media only screen and (min-width: 375px) {
  .footer-info-contact div {
    a {
      font-size: 18px;
    }

    i {
      width: 30px;
      margin-right: 16px;
    }
  }
}

@media only screen and (min-width: 768px) {
  .footer-info-contact div {
    i {
      font-size: 16px;
      margin-right: 10px;
    }

    a {
      font-size: 15px;
    }
  }
}
</style>
