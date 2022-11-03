<template>
  <section class="container">
    <div class="row">
      <div class="col-sm-1"></div>
      <div class="col-sm-10">
        <div class="contact-form">
          <h1 class="section-title">{{ header }}</h1>
          <hr class="section-hr" />
          <v-form
            class="v-form"
            method="POST"
            v-model="form.valid"
            action="https://formspree.io/f/xnqrorya"
          >
            <v-flex class="form-input-wrapper xs12 sm6">
              <v-text-field
                :rules="form.nameRules"
                v-model="form.name"
                name="Name"
                label="Name"
                required
              ></v-text-field>
            </v-flex>
            <v-flex class="form-input-wrapper xs12 sm6">
              <v-text-field
                :rules="form.emailRules"
                v-model="form.email"
                name="Email"
                label="Email Address"
                required
              ></v-text-field>
            </v-flex>
            <v-flex class="form-input-wrapper xs12 sm12">
              <v-textarea
                v-model="form.message"
                rows="2"
                name="Message"
                label="Your Message"
              ></v-textarea>
            </v-flex>
            <div id="button-wrapper">
              <button :disabled="!form.valid" type="submit">
                Send Message
              </button>
            </div>
          </v-form>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "ContactForm",
  props: ["header"],
  data() {
    return {
      form: {
        valid: false,
        name: "",
        nameRules: [(v) => !!v || "Name is required"],
        email: "",
        emailRules: [
          (v) => !!v || "E-mail is required",
          (v) => /.+@.+/.test(v) || "E-mail must be valid",
        ],
        message: "",
      },
    };
  },
};
</script>

<style lang="less">
.contact-form {
  padding-top: 25px;

  .v-form {
    margin-top: 60px;

    .form-input-wrapper {
      margin-bottom: 24px;

      .v-label {
        cursor: text;
        font-size: 14px;
        color: #999;
      }
    }

    #button-wrapper {
      display: flex;
      justify-content: flex-end;
      height: 80px;
      width: 100%;

      button {
        position: absolute;
        right: 0;
        bottom: 0;
        margin-right: 27px;
        border: 0;
        text-transform: uppercase;
        padding: 18px 26px;
        border-radius: 2px;
        font-size: 16px;
        font-weight: 500;
        line-height: 22px;
        letter-spacing: 2px;
        transition: background 0.2s ease-in-out, color 0.2s ease-in-out,
          box-shadow 0.2s ease-in-out;
        box-shadow: 0 12px 19px 0 rgba(0, 0, 0, 0.24);
        background: #a7090a;
        color: #fff;

        &:hover {
          box-shadow: 0 5px 15px 0 rgba(0, 0, 0, 0.5);
          text-decoration: none;
        }
      }

      button[disabled] {
        background: #999;
        box-shadow: none;
      }
    }
  }
}
</style>
