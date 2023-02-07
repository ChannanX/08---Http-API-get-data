<template>
  <div>
    <h1>Product Details</h1>
    <h2>Show Data...</h2>
    <button @click="loadData()">Load Details Data</button>
  </div>
</template>

<script setup>
import axios from "axios";
import { ref } from "vue";

const userData = ref([]);
const url = ref(
  
  "https://amazon-product-reviews-keywords.p.rapidapi.com/product/details"
);

function loadData() {
  axios
    .request(options)
    .then(function (response) {
      console.log(response.data);
    })
    .catch(function (error) {
      console.error(error);
    });
}
</script>

<style></style>
