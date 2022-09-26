import {createRouter, createWebHistory} from "vue-router";

import HomeView from "../views/HomeView.vue";

//建立VueRouter實體物件
const router = createRouter({
  //history 路由模式,BASE_URL webpack.DefinePlugin 静态地嵌入到客户端侧的代码中

  history: createWebHistory(import.meta.env.BASE_URL),
  //對應元件
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
      // meta: { requireAuth: true },// 用來作為此頁是否需要權限驗證的設定
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
      path: "/productShop",
      name: "productShop",
      component: () => import("../views/ProductShop.vue"),
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
      path: "/signUpForm",
      name: "signUpForm",
      component: () => import("../views/SingUpForm.vue"),
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
    {
      path: "/currentChart",
      name: "currentChart",
      component: () => import("../views/CurrentChart.vue"),
    },
    {
      path: "/shoppingCart",
      name: "shoppingCart",
      component: () => import("../views/shoppingCart.vue"),
    },
    {
      path: "/chartFormPage",
      name: "chartFormPage",
      component: () => import("../views/ChartFormPage.vue"),
    },
    {
      path: "/chartFormAddFriendPage",
      name: "chartFormAddFriendPage",
      component: () => import("../views/ChartFormAddFriendPage.vue"),
    },

    // {
    //   path: '*',
    //   redirect: '/',
    // }
  ],
});

// router.beforeEach((to, from, next)=>{
//   const isLogin = localStorage.getItem('token') == 'ImLogin' ;
//   if( isLogin ){
//     next();
//   } else {
//     if( to.path !== '/logIn')
//       next('/logIn')

//     else
//       next();
//   }
// });

// router.onError((err) => {
//   console.log(err)
// })

export default router;
