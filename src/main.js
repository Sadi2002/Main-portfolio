// main.js
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./assets/global.css";
import AOS from "aos";
import "aos/dist/aos.css";

const app = createApp(App);
app.use(router);

// Zainicjuj AOS po zamontowaniu aplikacji
app.component("AosInitialized", {
  mounted() {
    AOS.init();
  },
});

app.component("AosRefresh", {
  mounted() {
    AOS.refresh();
  },
});

app.mount("#app");
