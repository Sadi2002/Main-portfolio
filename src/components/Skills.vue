<template>
  <div class="skills">
    <span class="skills-headline">My Skills</span>
    <h2 class="skills-title">Skills and Competencies</h2>
    <div class="competencies">
      <div class="competencies-buttons">
        <div
          class="competencies-button"
          @click="showContext(1)"
          :class="{ 'active-box': activeContext === 1 }"
        >
          Knowledge
        </div>
        <div
          class="competencies-button"
          @click="showContext(2)"
          :class="{ 'active-box': activeContext === 2 }"
        >
          Education
        </div>
        <div
          class="competencies-button"
          @click="showContext(3)"
          :class="{ 'active-box': activeContext === 3 }"
        >
          Experience
        </div>
      </div>
      <div class="competencies-context">
        <div class="context-box" ref="context1">
          <div class="context1-left">
            <h3 class="context-box-title">
              <i class="fas fa-angle-double-right"></i>Web development
            </h3>
            <ul class="context-box-list">
              <li class="context-box-item">> HTML 5</li>
              <li class="context-box-item">> CSS</li>
              <li class="context-box-item">> Scss</li>
              <li class="context-box-item">> JavaScript</li>
              <li class="context-box-item">> Vue</li>
              <li class="context-box-item">> Bootstrap</li>
              <li class="context-box-item">> Bulma</li>
              <li class="context-box-item">> Tailwind</li>
              <li class="context-box-item">> PrestaShop</li>
              <li class="context-box-item">> Firebase</li>
              <li class="context-box-item">> MySQL</li>
              <li class="context-box-item">> Git</li>
              <li class="context-box-item">> NPM</li>
              <li class="context-box-item">> Webpack</li>
            </ul>
          </div>
          <div class="context1-right">
            <h3 class="context-box-title">
              <i class="fas fa-angle-double-right"></i>Design
            </h3>
            <ul class="context-box-list">
              <li class="context-box-item">> PhotoShop</li>
              <li class="context-box-item">> Illustor</li>
              <li class="context-box-item">> Gimp</li>
              <li class="context-box-item">> Blender</li>
              <li class="context-box-item">> Adobe XD</li>
              <li class="context-box-item">> Figma</li>
            </ul>
          </div>
        </div>
        <div class="context-box" ref="context2">
          <div class="context2-left">
            <h3 class="context-box-title">
              <i class="fas fa-angle-double-right"></i>WSB
            </h3>
            <span class="context-box-headline">University of Gdańsk</span>
            <span class="context-box-time">2022 - current</span>
            <p class="context-box-description">
              Beyond academics, WSB Gdańsk offers a vibrant student community,
              various extracurricular activities, and opportunities for
              networking and collaboration. The city of Gdańsk itself provides
              an inspiring backdrop for learning, with its rich history,
              cultural diversity, and dynamic tech scene.
            </p>
          </div>
        </div>
        <div class="context-box" ref="context3">
          <div class="context3-left">
            <h3 class="context-box-title">
              <i class="fas fa-angle-double-right"></i>WeNet sp. z o.o
            </h3>
            <span class="context-box-headline">PrestaShop Developer</span>
            <span class="context-box-time">2022 - 2023</span>
            <p class="context-box-description">
              As a PrestaShop developer, I've been entrusted with the
              responsibility of designing, developing, and maintaining over 20
              successful e-commerce websites within the span of a year.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";

export default {
  setup() {
    const context1 = ref(null);
    const context2 = ref(null);
    const context3 = ref(null);
    const activeContext = ref(1);

    const showContext = (contextNumber) => {
      context1.value.style.display = "none";
      context2.value.style.display = "none";
      context3.value.style.display = "none";

      switch (contextNumber) {
        case 1:
          context1.value.style.display = "flex";
          break;
        case 2:
          context2.value.style.display = "flex";
          break;
        case 3:
          context3.value.style.display = "flex";
          break;
      }

      activeContext.value = contextNumber;
    };

    onMounted(() => {
      context2.value.style.display = "none";
      context3.value.style.display = "none";
    });

    return {
      context1,
      context2,
      context3,
      showContext,
      activeContext,
    };
  },
};
</script>
