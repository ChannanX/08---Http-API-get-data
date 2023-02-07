<template>
  <div>
    <h1>Product Search</h1>
    <h2>Show Data...</h2>
    <button @click="loadData()">Load require Data</button>
  </div>
</template>

<script setup>
import axios from "axios";
import { ref } from "vue";

const userData = ref([]);
const options = {
  method: "GET",
  url: "https://amazon-product-reviews-keywords.p.rapidapi.com/product/search",
  params: { keyword: "iphone", country: "US", category: "aps" },
  headers: {
    "X-RapidAPI-Key": "17b4854b0bmshaa6e9b345a318adp17a230jsnf8820190209a",
    "X-RapidAPI-Host": "amazon-product-reviews-keywords.p.rapidapi.com",
  },
};

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
