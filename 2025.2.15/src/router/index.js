import { createRouter, createWebHashHistory } from 'vue-router';

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/cart',
            // 懒加载
            component: () => import('../pages/cart/index.vue')
        },
        {
            path: '/home',
            component: () => import('../pages/home/index.vue')
        },
        {
            path: '/mine',
            component: () => import('../pages/mine/index.vue')
        },
        {
            path: '/order',
            component: () => import('../pages/order/index.vue')
        },
        {
            path: '/',
            component: () => import('../pages/home/index.vue')
        }
    ]
})

export default router;