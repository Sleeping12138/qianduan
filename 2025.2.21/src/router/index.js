import { createRouter, createWebHashHistory } from 'vue-router';

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/',
            redirect: '/home'
        },
        {
            name: 'home',
            path: '/home',
            component: () => import('../pages/home/Home.vue'),
            children: [
                {
                    name: 'homeIn',
                    path: 'homeIn',
                    component: () => import('../pages/home/components/HomeIn.vue')
                }
            ],
            props(route) {
                return route.query;
            },
            meta: {
                id: 1,
                text: 'hello world'
            }
        },
        {
            name: 'new',
            path: '/news',
            component: () => import('../pages/News.vue')
        },
        {
            path: '/title',
            component: () => import('../pages/Title.vue')
        }
    ]
})

export default router