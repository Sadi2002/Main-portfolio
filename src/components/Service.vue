<template>
  <div class="service" id="service">
    <span data-aos="fade-up" class="service-headline">My Service</span>
    <h2 data-aos="fade-up" data-aos-delay="200" class="service-title">
      Bringing your vision to life with precision and passion
    </h2>
    <div class="service-container">
      <div data-aos="fade-up" class="service-box" ref="tiltBox1">
        <i class="fas fa-code"></i>
        <h3 class="service-box-title">Website Coding</h3>
        <p class="service-box-description">
          I am committed to delivering solutions that not only meet but exceed
          expectations. By blending creativity with technical proficiency, I
          transform ideas into compelling online platforms designed to enhance
          user engagement and drive business success.
        </p>
      </div>
      <div
        data-aos="fade-up"
        data-aos-delay="200"
        class="service-box"
        ref="tiltBox2"
      >
        <i class="fas fa-mobile-alt"></i>
        <h3 class="service-box-title">Responsive design</h3>
        <p class="service-box-description">
          By incorporating responsive design principles, I guarantee a visually
          appealing and user-friendly website that adapts to the diverse ways
          people browse the internet today.
        </p>
      </div>
      <div
        data-aos="fade-up"
        data-aos-delay="400"
        class="service-box"
        ref="tiltBox3"
      >
        <i class="fas fa-feather icon"></i>
        <h3 class="service-box-title">Clean design</h3>
        <p class="service-box-description">
          I specialize in bringing clean design principles to life, ensuring
          that your website not only meets but exceeds modern design standards.
          From crisp layouts to carefully chosen typography, every detail is
          considered to achieve a harmonious and sophisticated look.
        </p>
      </div>
    </div>
  </div>
</template>

<!-- #09101a -->
<script>
import VanillaTilt from "vanilla-tilt";
import { onMounted, ref } from "vue";

export default {
  setup() {
    const tiltBox1 = ref(null);
    const tiltBox2 = ref(null);
    const tiltBox3 = ref(null);

    const showTilt = (name) => {
      VanillaTilt.init(name.value, {
        max: 7,
        speed: 500,
        glare: true,
        "max-glare": 0.05,
      });
    };

    onMounted(() => {
      showTilt(tiltBox1);
      showTilt(tiltBox2);
      showTilt(tiltBox3);
    });

    return { tiltBox1, tiltBox2, tiltBox3, showTilt };
  },
};
</script>

<style></style>
