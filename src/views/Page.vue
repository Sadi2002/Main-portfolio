<template>
  <Navbar />
  <Welcome />
  <AboutMe />
  <Loading :close="closeLoading" />
  <Service />
  <Skills />
  <Portfolio />
</template>

<script>
import Navbar from "../components/Navbar.vue";
import Welcome from "../components/Welcome.vue";
import AboutMe from "../components/AboutMe.vue";
// import Loading from "../components/Loading.vue";
import Service from "../components/Service.vue";
import Skills from "../components/Skills.vue";
import Portfolio from "../components/Portfolio.vue";
import { onMounted, ref } from "vue";
export default {
  components: { Navbar, Welcome, AboutMe, Service, Skills, Portfolio },

  setup() {
    // const closeLoading = ref(false);
    // onMounted(() => {
    //   window.addEventListener("load", () => {
    //     document.body.style.overflow = "hidden";
    //     setTimeout(() => {
    //       closeLoading.value = true;
    //       setTimeout(() => {
    //         document.body.style.overflow = "visible";
    //       }, 1500);
    //     }, 3000);
    //   });
    // });
    // return { closeLoading };
  },
};
</script>

<style></style>
