<script setup>
defineProps({
  msg: {
    type: String,
    required: true,
  },
});
</script>

<template style="bgcolor=black">
  <div class="greetings">
    <div class="container">
      <div class="row">
        <h1 class="green text-center">{{ msg }}</h1>
        <h3 class="text-center" style="color: orange"></h3>
      </div>
    </div>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
