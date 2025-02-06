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
            path: '/news',
            component: News,
            children: [
                {
                    name: 'detail',
                    path: 'detail/:id/:title/:content',
                    component: Detail,
                    props(route) {
                        return route.params
                    }
                }
            ]
        },
        {
            path: '/',
            redirect: '/news'
        }
    ]
})