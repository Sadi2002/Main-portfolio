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
            <li class="context-box-item">> Jira</li>
            <li class="context-box-item">> NPM</li>
            <li class="context-box-item">> Webpack</li>
          </ul>
        </div>
        <div class="context-box" ref="context2">Test 2</div>
        <div class="context-box" ref="context3">Test 3</div>
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
          context1.value.style.display = "block";
          break;
        case 2:
          context2.value.style.display = "block";
          break;
        case 3:
          context3.value.style.display = "block";
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
