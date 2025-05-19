import { createRouter, createWebHistory } from 'vue-router'
import { getToken } from '@/utils/cookie.js';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      name: 'Login',
      path: '/oj/login',
      component: () => import('@/views/Login.vue')
    },
    {
      name: 'layout',
      path: '/oj/layout',
      component: () => import("@/views/Layout.vue"),
      children: [
        {
          name: 'question',
          path: 'question',
          component: () => import("@/views/Question.vue")
        },
        {
          name: 'cuser',
          path: 'cuser',
          component: () => import("@/views/Cuser.vue")
        },
        {
          name: 'Exam',
          path: 'exam',
          component: () => import("@/views/Exam.vue")
        }
      ]
    },
    {
      path: '/',
      redirect: '/oj/login'
    }
  ],
})

router.beforeEach((to, from, next) => {
  if (getToken()) {  //已经登陆过
    if (to.path === '/oj/login') {
      next({ path: '/oj/layout/question' })
    } else {
      next()
    }
  } else {
    if (to.path !== '/oj/login') {
      next({ path: '/oj/login' })
    } else {
      next()
    }
  }
})

export default router
