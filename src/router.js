import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/home",
    alias: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/equipos",
    name: "equipos",
    component: () =>
      import(/* webpackChunkName: "equipos" */ "@/views/Equipos.vue"),
  },
  {
    path: "/checkout",
    name: "checkout",
    component: () =>
      import(/* webpackChunkName: "equipos" */ "@/views/Checkout.vue"),
  },
  {
    path: "/confirmacion",
    name: "confirmacion",
    component: () =>
      import(/* webpackChunkName: "confirmacion" */ "@/views/Confirmacion.vue"),
  },
  // Error 404
  {
    path: '*',
    name: 'not-found',
    component: () =>
      import(/* webpackChunkName: "not-found" */ '@/views/NotFound.vue'),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
