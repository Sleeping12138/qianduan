import About from '@/components/About.vue';
import Home from '@/components/Home.vue';
import News from '@/components/News.vue';
import { createRouter, createWebHistory } from 'vue-router';

export default createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/home',
            component: Home
        },
        {
            path: '/about',
            component: About
        },
        {
            path: '/news',
            component: News
        }
    ]
})