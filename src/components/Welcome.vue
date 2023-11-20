<template>
  <div class="welcome-text">
    <h1 class="welcome-title">
      Hi, i'm Lukas creative
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
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  setup() {
    const isHiden = ref(false);
    const isVisible = ref(true);

    return { isHiden, isVisible };
  },
};
</script>

<style></style>
