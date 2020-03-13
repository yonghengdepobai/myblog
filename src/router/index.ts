import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Right from '@/components/Right.vue';
import Detail from '@/views/Detail.vue';
import Me from '@/views/Me.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Right',
    component: Right,
  },
  {
    path: '/Detail',
    name: 'Detail',
    component: Detail,
  },
  { path: '/me',
    name: 'me',
    component: Me,  
  },
  // {
  //   path: "/home",
  //   name: "Home",
  //   component: Home
  // },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
