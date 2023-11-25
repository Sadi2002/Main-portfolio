<template>
  <nav class="navigation" :class="{ show: isShowing }">
    <div class="show-navigation" @click="showNav">
      <div :class="{ show_bar: !isShowing, close_bar: isShowing }"></div>
    </div>
    <div class="navigation-top"></div>
    <div class="navigation-bottom">
      <ul class="navigation-list">
        <li class="navigation-item" data-aos="fade-right" data-aos-delay="1000">
          <a @click="closeNavigation" href="#" class="navigation-link">
            <span class="navigation-icon"><i class="fas fa-home"></i></span>
            <div class="navigation-text">
              <p class="letter">H</p>
              <p class="letter">O</p>
              <p class="letter">M</p>
              <p class="letter">E</p>
            </div>
          </a>
        </li>
        <li class="navigation-item" data-aos="fade-right" data-aos-delay="1200">
          <a @click="closeNavigation" href="#about" class="navigation-link"
            ><span class="navigation-icon"><i class="far fa-id-card"></i></span>
            <div class="navigation-text">
              <p class="letter">A</p>
              <p class="letter">B</p>
              <p class="letter">O</p>
              <p class="letter">U</p>
              <p class="letter">T</p>
            </div></a
          >
        </li>
        <li class="navigation-item" data-aos="fade-right" data-aos-delay="1400">
          <a @click="closeNavigation" href="#service" class="navigation-link"
            ><span class="navigation-icon"><i class="fas fa-cogs"></i> </span>
            <div class="navigation-text">
              <p class="letter">S</p>
              <p class="letter">E</p>
              <p class="letter">R</p>
              <p class="letter">V</p>
              <p class="letter">I</p>
              <p class="letter">C</p>
              <p class="letter">E</p>
              <p class="letter">S</p>
            </div></a
          >
        </li>
        <li class="navigation-item" data-aos="fade-right" data-aos-delay="1600">
          <a @click="closeNavigation" href="#skills" class="navigation-link"
            ><span class="navigation-icon"><i class="fas fa-code"></i></span>
            <div class="navigation-text">
              <p class="letter">S</p>
              <p class="letter">K</p>
              <p class="letter">I</p>
              <p class="letter">L</p>
              <p class="letter">L</p>
              <p class="letter">S</p>
            </div></a
          >
        </li>
        <li class="navigation-item" data-aos="fade-right" data-aos-delay="1800">
          <a @click="closeNavigation" href="#portfolio" class="navigation-link"
            ><span class="navigation-icon"
              ><i class="fas fa-briefcase"></i
            ></span>
            <div class="navigation-text">
              <p class="letter">P</p>
              <p class="letter">O</p>
              <p class="letter">R</p>
              <p class="letter">T</p>
              <p class="letter">F</p>
              <p class="letter">O</p>
              <p class="letter">L</p>
              <p class="letter">I</p>
              <p class="letter">O</p>
            </div></a
          >
        </li>
        <li class="navigation-item" data-aos="fade-right" data-aos-delay="2000">
          <a @click="closeNavigation" href="#contact" class="navigation-link"
            ><span class="navigation-icon"
              ><i class="fas fa-envelope"></i
            ></span>
            <div class="navigation-text">
              <p class="letter">C</p>
              <p class="letter">O</p>
              <p class="letter">N</p>
              <p class="letter">T</p>
              <p class="letter">A</p>
              <p class="letter">C</p>
              <p class="letter">T</p>
            </div></a
          >
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
import AOS from "aos";
import { onMounted, onUnmounted, ref } from "vue";
export default {
  setup() {
    const isShowing = ref(false);
    const computeWidth = ref(window.innerWidth);

    const showNav = () => {
      isShowing.value = !isShowing.value;
    };

    const updateWidth = () => {
      computeWidth.value = window.innerWidth;
      if (computeWidth.value >= 1200) {
        isShowing.value = true;
      } else {
        isShowing.value = false;
      }
    };

    const closeNavigation = () => {
      if (computeWidth.value <= 1200) {
        setTimeout(() => {
          isShowing.value = false;
        }, 900);
      }
    };

    onMounted(() => {
      updateWidth();
      window.addEventListener("resize", updateWidth);
      AOS.refresh();
      if (computeWidth.value <= 1200) {
        const allLinks = document.querySelectorAll(".navigation-item");
        allLinks.forEach((link) => {
          link.removeAttribute("data-aos", "fade-right");
          link.classList.remove("aos-init");
        });
      }
    });

    onUnmounted(() => {
      window.removeEventListener("resize", updateWidth);
    });

    return { showNav, isShowing, computeWidth, updateWidth, closeNavigation };
  },
};
</script>

<style></style>
