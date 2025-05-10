import { createRouter, createWebHistory } from "vue-router";

export default createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/home',
            component: () => import('@/pages/Home.vue')
        },
        {
            path: '/news',
            component: () => import('@/pages/News.vue')
        },
        {
            path: '/user',
            component: () => import('@/pages/User.vue')
        }
    ]
})