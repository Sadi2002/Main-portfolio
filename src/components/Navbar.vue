<template>
  <nav class="navigation" :class="{ show: isShowing }">
    <div class="show-navigation" @click="showNav">
      <div :class="{ show_bar: !isShowing, close_bar: isShowing }"></div>
    </div>
  </nav>
</template>

<script>
import { ref } from "vue";
export default {
  setup() {
    const isShowing = ref(false);

    const showNav = () => {
      isShowing.value = !isShowing.value;
    };

    return { showNav, isShowing };
  },
};
</script>

<style></style>
