<template>
  <div class="contact" id="contact">
    <span data-aos="fade-up" class="contact-headline">Contact me</span>
    <h2 data-aos="fade-up" data-aos-delay="200" class="contact-title">
      Your Vision, Our Creation
    </h2>
    <form @submit.prevent="sendMessage">
      <div class="contact-top">
        <div class="contact-box" data-aos="fade-up">
          <label>Name</label>
          <input type="text" v-model="name" required />
        </div>
        <div class="contact-box" data-aos="fade-up" data-aos-delay="300">
          <label>E-mail</label>
          <input type="email" v-model="email" required />
        </div>
      </div>
      <div class="contact-box last" data-aos="fade-up" data-aos-delay="600">
        <label>Message</label>
        <textarea required v-model="message"></textarea>
      </div>
      <button v-if="isSending" class="submit">Sending...</button>
      <button v-if="!isSending" class="submit">Submit</button>
    </form>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  setup() {
    const name = ref("");
    const email = ref("");
    const message = ref("");
    const isSending = ref(false);

    const sendMessage = () => {
      if (name.value !== "" && email.value !== "" && message.value !== "") {
        isSending.value = true;
        setTimeout(() => {
          name.value = "";
          email.value = "";
          message.value = "";
          isSending.value = false;
        }, 3000);
      }
    };

    return { name, email, message, isSending, sendMessage };
  },
};
</script>

<style></style>
