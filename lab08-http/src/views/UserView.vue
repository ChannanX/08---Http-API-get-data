<template>
  <div>
    <h1>User View</h1>
    <h2>Show User...</h2>
    <button @click="loadUser()">Load User Data</button>

    <!-- <div>{{  userData }}</div> -->

    <ul>
      <li v-for="user in userData" :key="user.id">
        {{ user.id }} {{ user.name }} {{ user.address.city }}
        {{ user.address.geo.lat }}, {{ user.address.geo.lng }}
      </li>
    </ul>
  </div>
</template>

<script setup>
import axios from "axios";
import { ref } from "vue";

const userData = ref([]);
const url = ref("https://jsonplaceholder.typicode.com/users");

function loadUser() {
  axios
    .get(url.value)
    .then((response) => {
      userData.value = response.data;
    })
    .catch((err) => {
      console.log(err);
    });
}
</script>

<style></style>
