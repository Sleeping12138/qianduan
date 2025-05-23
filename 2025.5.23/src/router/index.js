import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      name: 'login',
      path: '/c-oj/login',
      component: () => import('@/views/Login.vue')
    },
    {
      name: 'home',
      path: '/c-oj/home',
      component: () => import('@/views/Home.vue')
    },
    {
      path: '/',
      redirect: '/c-oj/login'
    }
  ],
})

export default router
