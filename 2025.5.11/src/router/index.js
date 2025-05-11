import { createRouter, createWebHashHistory, createWebHistory } from "vue-router";

export default createRouter({
    history: createWebHistory(),
    routes: [
        {
            name: 'home',
            path: '/home',
            component: () => import('@/pages/Home.vue'),
            children: [
                {
                    name: 'detail',
                    path: 'detail',
                    component: () => import('@/pages/Detail.vue')
                }
            ]
        },
        {
            name: 'news',
            path: '/news',
            component: () => import('@/pages/News.vue')
        },
        {
            path: '/user',
            component: () => import('@/pages/User.vue')
        },
        {
            path: '/',
            redirect: '/home'
        }
    ]
})