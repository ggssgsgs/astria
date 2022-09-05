import {createRouter, createWebHistory} from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/myChart",
      name: "myChart",
      component: () => import("../views/MyChart.vue"),
    },
    {
      path: "/charts",
      name: "charts",
      component: () => import("../views/Charts.vue"),
    },
    {
      path: "/match",
      name: "match",
      component: () => import("../views/Match.vue"),
    },
    {
      path: "/products",
      name: "products",
      component: () => import("../views/Products.vue"),
    },
    {
      path: "/logIn",
      name: "logIn",
      component: () => import("../views/LogIn.vue"),
    },
    {
      path: "/signUp",
      name: "signUp",
      component: () => import("../views/SignUp.vue"),
    },
    {
      path: "/myInfo",
      name: "myInfo",
      component: () => import("../views/MyInfo.vue"),
    },
    {
      path: "/myOrders",
      name: "myOrders",
      component: () => import("../views/MyOrders.vue"),
    },
  ],
});

export default router;
