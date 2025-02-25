import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import About from '../views/About.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    component: About,
  },
];

const router = new VueRouter({
    mode: process.env.VUE_ROUTER_MODE || 'history', // Use environment variable
    base: process.env.VUE_ROUTER_BASE || '/', // Use environment variable
    routes,
  });
  

export default router;