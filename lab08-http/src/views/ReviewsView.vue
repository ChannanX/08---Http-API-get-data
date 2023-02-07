<template>
  <div>
    <h1>Product Reviews</h1>
    <h2>Show Data...</h2>
    <button @click="loadUser()">Load Reviews Data</button>

    <!-- <div>{{  userData }}</div> -->

    <ul>
      <li v-for="products in productsData" :key="user.id">
        {{ user.id }} {{ user.name }} {{ user.address.city }}
        {{ user.address.geo.lat }}, {{ user.address.geo.lng }}
      </li>
    </ul>
  </div>
</template>

<script setup>
import axios from "axios";
import { ref } from "vue";

const options = {
  method: "GET",
  url: "https://amazon-product-reviews-keywords.p.rapidapi.com/product/reviews",
  params: { asin: "B07XQXZXJC", country: "US", variants: "1", top: "0" },
  headers: {
    "X-RapidAPI-Key": "17b4854b0bmshaa6e9b345a318adp17a230jsnf8820190209a",
    "X-RapidAPI-Host": "amazon-product-reviews-keywords.p.rapidapi.com",
  },
};

function loadUser() {
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
