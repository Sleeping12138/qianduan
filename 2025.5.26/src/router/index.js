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
      component: () => import('@/views/Home.vue'),
      children: [
        {
          name: 'question',
          path: 'question',
          component: () => import("@/views/Question.vue"),
          meta: { showBanner: true }
        },
        {
          name: 'exam',
          path: 'exam',
          component: () => import("@/views/Exam.vue"),
          meta: { showBanner: true }
        },
        {
          name: 'userExam',
          path: 'user/exam',
          component: () => import('@/views/UserExam.vue'),
          meta: { showBanner: false }
        },
        {
          name: 'userDetail',
          path: 'user/detail',
          component: () => import('@/views/UserDetail.vue'),
          meta: { showBanner: false }
        }
      ],

    },
    {
      path: '/',
      redirect: '/c-oj/login'
    }
  ],
})

export default router
