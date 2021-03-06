import Vue from "vue";
import VueRouter from "vue-router";
import List from "../views/List.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: "/List",
    name: "List",
    component: List,
  },
  {
    path: "/Favourites",
    name: "Favourites",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Favourites.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
