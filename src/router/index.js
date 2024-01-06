// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import LoginView from '../views/LoginView.vue';
import DashboardView from '../views/DashboardView.vue';
import { auth } from '@/firebase';

const routes = [
  {
    path: '/login',
    component: LoginView,
  },
  {
    path: '/dashboard',
    component: DashboardView,
    beforeEnter: (to, from, next) => {
      console.log(from);
      if (to.meta.requiresAuth && !auth.currentUser) {
        next('/login');
      } else {
        next();
      }
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
