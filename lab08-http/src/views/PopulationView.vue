<script setup>
import { ref, onMounted } from "vue";
const items = ref([]);
const url = ref(
  "https://datausa.io/api/data?drilldowns=Nation&measures=Population"
);
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
  <div class="container">
    <div class="row">
      <div class="col-3 mt-2" v-for="(usa, n) in items.data" :key="n">
        <div class="card" style="width: 18rem">
          <div class="card-body">
            <h5 class="card-title">{{ usa.Nation }} _ {{ usa.Year }}</h5>
            <p class="card-text">ประชากร : {{ usa.Population }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
