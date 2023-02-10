<template>
  <div>
    <h1>Random photo</h1>
    <h2></h2>
    <div class="btncss">
      <button class="btn btn-primary" @click="refresh()">refresh</button>
      <h2></h2>
    </div>

    <!-- <div>{{  userData }}</div> -->
    <div class="container text-center">
      <div class="row">
        <div class="col">
          <img src="https://picsum.photos/550/400?random=1" alt="" />
        </div>
        <div class="col">
          <img src="https://picsum.photos/550/400?random=2" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
function refresh() {
  window.location.reload();
}
</script>

<style scoped>
h1 {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 1rem;
}

h2 {
  display: flex;
  justify-content: center;
  align-items: center;
}

.btncss {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
  
}
</style>
