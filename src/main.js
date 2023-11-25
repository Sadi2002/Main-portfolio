import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./assets/global.css";
import "aos/dist/aos.css";
import AOS from "aos";

AOS.init({
  duration: 1000,
  offset: 200,
  once: true,
  startEvent: "DOMContentLoaded",
});

createApp(App).use(router).mount("#app");
