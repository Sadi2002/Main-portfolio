<template>
  <div v-if="isShowing" class="welcome-banner">
    <img src="../assets/banner.png" alt="" />
  </div>
  <div class="welcome-text">
    <h1 class="welcome-title">
      Hi, i'm Lukas, creative
      <ul class="words-container">
        <li><span data-text="Developer" class="word">Developer</span></li>
      </ul>
    </h1>
    <p class="welcome-description">
      I am a dedicated front-end developer with a passion for crafting
      delightful and intuitive digital experiences. Grounded in strong design
      principles and possessing a meticulous eye for detail, I specialize in
      transforming intricate concepts into user-friendly interfaces that
      captivate and engage.
    </p>
    <a class="cv" href="#">Download CV</a>
  </div>
</template>

<script>
import { onMounted, onUnmounted, ref } from "vue";
export default {
  setup() {
    const isShowing = ref(false);

    const computeWidth = ref(window.innerWidth);

    const updateWidth = () => {
      computeWidth.value = window.innerWidth;
      if (computeWidth.value >= 992) {
        isShowing.value = true;
      } else {
        isShowing.value = false;
      }
    };

    onMounted(() => {
      updateWidth();
      window.addEventListener("resize", updateWidth);
    });

    onUnmounted(() => {
      window.removeEventListener("resize", updateWidth);
    });

    return { isShowing, updateWidth };
  },
};
</script>

<style></style>
