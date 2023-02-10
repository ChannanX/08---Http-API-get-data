<script setup>
import WelcomeItem from "./WelcomeItem.vue";
</script>

<template>
  <WelcomeItem>
    <template #heading>The United States of America</template>

    The United States of America (U.S.A. or USA), commonly known as the United
    States (U.S. or US) or America, is a country
    <a
      href="https://en.wikipedia.org/wiki/Contiguous_United_States#Continental_and_mainland_United_States"
      target="_blank"
      rel="noopener"
      >primarily located</a
    >
    in<a
      href="https://en.wikipedia.org/wiki/North_America"
      target="_blank"
      rel="noopener"
    >
      North America.</a
    >It consists of 50 states, a federal district, five major unincorporated
    territories, nine Minor Outlying Islands and 326 Indian reservations.The
    United States is also in free association with three Pacific Island
    sovereign states: the Federated States of Micronesia, the Marshall Islands,
    and the Republic of Palau. It is the world's third-largest country by both
    land and total area.It shares land borders with Canada to its north and with
    Mexico to its south and has maritime borders with the Bahamas, Cuba, Russia,
    and other nations. With a population of over 333 million, it is the most
    populous country in the Americas and the third most populous in the world.
  </WelcomeItem>

  <WelcomeItem>
    <template #heading>The national capital</template>

    The United States is
    <a
      href="https://en.wikipedia.org/wiki/Washington,_D.C."
      target="_blank"
      rel="noopener"
    >
      Washington, D.C.</a
    >
  </WelcomeItem>

  <WelcomeItem>
    <template #heading
      >It's most populous city and principal financial center</template
    >

    Is
    <a
      href="https://en.wikipedia.org/wiki/New_York_City"
      target="_blank"
      rel="noopener"
    >
      New York City.</a
    >.
  </WelcomeItem>
  <div class="img"><img
    src="https://www.nationsonline.org/maps/USA-map.jpg"
    style="width: 50%"
  /></div>
  
</template> 

<style scoped>
.img{
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
