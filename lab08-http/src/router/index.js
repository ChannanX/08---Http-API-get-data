import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import PhotoView from "../views/PhotoView.vue";
import PopulationView from "../views/populationView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/Photo",
      name: "Photo",
      component: PhotoView,
    },    {
      path: "/Population",
      name: "Population",
      component: PopulationView,
    },


  ],
});

export default router;
