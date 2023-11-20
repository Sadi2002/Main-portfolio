<template>
  <div class="loading" :class="{ close: close }">
    <h2>
      Loading...

      <div class="ball"></div>
    </h2>
  </div>
</template>

<script>
export default {
  props: ["close"],
};
</script>

<style></style>
