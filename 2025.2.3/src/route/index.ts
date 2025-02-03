import About from '@/pages/About.vue';
import Detail from '@/pages/Detail.vue';
import Home from '@/pages/Home.vue';
import News from '@/pages/News.vue';
import { createRouter, createWebHistory } from 'vue-router';

export default createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/about',
            component: About
        },
        {
            path: '/home',
            component: Home
        },
        {
            name: 'xinwen',
            path: '/news',
            component: News,
            children: [
                {
                    name: 'detail',
                    path: 'detail',
                    component: Detail
                }
            ]
        },

        {
            path: '/',
            redirect: '/home'
        }
    ]
})