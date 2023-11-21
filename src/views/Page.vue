<template>
  <Navbar />
  <Welcome />
  <AboutMe />
  <!-- <Loading :close="closeLoading" /> -->
</template>

<script>
import Navbar from "../components/Navbar.vue";
import Welcome from "../components/Welcome.vue";
import AboutMe from "../components/AboutMe.vue";
import Loading from "../components/Loading.vue";
import { onMounted, ref } from "vue";
export default {
  components: { Navbar, Welcome, Loading, AboutMe },

  setup() {
    // const showLoading = ref(true);

    const closeLoading = ref(false);

    onMounted(() => {
      window.addEventListener("load", () => {
        setTimeout(() => {
          // showLoading.value = false;
          closeLoading.value = true;
        }, 3500);
      });
    });

    return { closeLoading };
  },
};
</script>

<style></style>
