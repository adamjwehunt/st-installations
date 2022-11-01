<template>
  <transition name="fade" mode="out-in">
    <main>
      <PageBanner :data="contact.banner" />
      <ContactForm />
    </main>
  </transition>
</template>

<script>
import content from "@/services/content.js";
import PageBanner from "@/components/PageBanner.vue";
import ContactForm from "@/components/ContactForm.vue";

export default {
  components: {
    PageBanner,
    ContactForm,
  },
  name: "ContactView",
  data() {
    return {
      contact: content.page.contact,
    };
  },
};
</script>
