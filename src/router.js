import Vue from "vue";
import Router from "vue-router";
import HomeView from "@/views/HomeView";
import ServicesView from "@/views/ServicesView";
import AboutView from "@/views/AboutView";
import FaqsView from "@/views/FaqsView";
import TestimonialsView from "@/views/TestimonialsView";
import ContactView from "@/views/ContactView";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "HOME",
      component: HomeView,
      meta: {
        scrollToTop: true,
      },
    },
    {
      path: "/services",
      name: "SERVICES",
      component: ServicesView,
      meta: {
        scrollToTop: true,
      },
    },
    {
      path: "/about",
      name: "ABOUT",
      component: AboutView,
      meta: {
        scrollToTop: true,
      },
    },
    {
      path: "/faqs",
      name: "FAQS",
      component: FaqsView,
      meta: {
        scrollToTop: true,
      },
    },
    {
      path: "/testimonials",
      name: "TESTIMONIALS",
      component: TestimonialsView,
      meta: {
        scrollToTop: true,
      },
    },
    {
      path: "/contact",
      name: "CONTACT US",
      component: ContactView,
      meta: {
        scrollToTop: true,
      },
    },
    {
      path: "*",
      redirect: "/",
      meta: {
        scrollToTop: true,
        hidden: true,
      },
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      const position = {};

      if (to.hash) {
        position.selector = to.hash;
      }

      if (to.matched.some((m) => m.meta.scrollToTop)) {
        position.x = 0;
        position.y = 0;
      }

      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(position);
        }, 0);
      });
    }
  },
});
