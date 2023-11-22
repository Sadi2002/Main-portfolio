<template>
  <Navbar />
  <Welcome />
  <AboutMe />
  <Loading :close="closeLoading" />
  <Service />
</template>

<script>
import Navbar from "../components/Navbar.vue";
import Welcome from "../components/Welcome.vue";
import AboutMe from "../components/AboutMe.vue";
import Loading from "../components/Loading.vue";
import Service from "../components/Service.vue";
import { onMounted, ref } from "vue";
export default {
  components: { Navbar, Welcome, Loading, AboutMe, Service },

  setup() {
    const closeLoading = ref(false);

    onMounted(() => {
      window.addEventListener("load", () => {
        document.body.style.overflow = "hidden";

        setTimeout(() => {
          closeLoading.value = true;
          setTimeout(() => {
            document.body.style.overflow = "visible";
          }, 1500);
        }, 3000);
      });
    });

    return { closeLoading };
  },
};
</script>

<style></style>
