<script setup>
import { ref, onMounted } from "vue";
const items = ref([]);
const url = ref("https://fakestoreapi.com/products");
const getData = async () => {
  const response = await fetch(url.value);
  const data = await response.json();
  items.value = data;
};
onMounted(() => {
  getData();
});
</script>
<template>
  <div>
    <ul>
      <li v-for="item in items" :key="item.id"></li>
    </ul>
  </div>
</template>


