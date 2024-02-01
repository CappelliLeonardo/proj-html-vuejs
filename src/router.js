import { createRouter, createWebHistory } from "vue-router";
import ContactUsSection from './pages/ContactUsSection.vue';
import AboutUsSection from "./pages/AboutUsSection.vue";
import AppMain from "./pages/AppMain.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "AppMain",
      component: AppMain,
    },
    {
      path: "/ContactUsSection",
      name: "ContactUsSection",
      component: ContactUsSection,
    },

    {
      path: "/AboutUsSection",
      name: "AboutUsSection",
      component: AboutUsSection,
    }

  ],
});

export { router };