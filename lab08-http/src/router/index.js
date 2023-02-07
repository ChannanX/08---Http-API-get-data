import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
//import SearchView from "../views/SearchView.vue";
//import ReviewsView from "../views/ReviewsView.vue";
//import DetailsView from "../views/DetailsView.vue";
//import CategoriesView from "../views/CategoriesView.vue";


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/Search",
      name: "Search",
      component: () => import("../views/SearchView.vue"),
    },
    {
      path: "/Reviews",
      name: "Reviews",
      component: () => import("../views/ReviewsView.vue"),
    },
    {
      path: "/Details",
      name: "Details",
      component: () => import("../views/DetailsView.vue"),
    },
    {
      path: "/Categories",
      name: "Categories",
      component: () => import("../views/CategoriesView.vue"),
    },
  ],
});

export default router;
