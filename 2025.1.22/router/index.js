import Vue from 'vue'
import VueRouter from 'vue-router'
import About from '../pages/About.vue'
import Home from '../pages/Home.vue'
import Message from '../pages/Message.vue'
import News from '../pages/News.vue'
import Detail from '../pages/Detail.vue'

const router = new VueRouter({
    mode: 'hash',
    routes: [
        {
            name: 'about',
            path: '/about',
            component: About
        },
        {
            name: 'home',
            path: '/home',
            component: Home,
            meta: { isAuth: false },
            children: [
                {
                    name: 'message',
                    path: 'message',
                    component: Message,
                    beforeEnter: (to, from, next) => {
                        if (to.path === '/home/message' || to.path === '/home/news') {
                            if (localStorage.getItem('name') === 'zhangsan') {
                                next();
                            } else {
                                console.log("用户名错误");
                            }
                        } else {
                            next();
                        }
                    },
                    children: [
                        {
                            name: 'detail',
                            path: 'detail',
                            component: Detail,

                            props($route) {
                                return { id: $route.query.id, title: $route.query.title }
                            }

                        }
                    ]
                },
                {
                    name: 'news',
                    path: 'news',
                    component: News
                }
            ]
        }
    ]
})

// router.beforeEach((to, from, next) => {
//     console.log(to, from);
//     if (to.path === '/home/message' || to.path === '/home/news') {
//         if (localStorage.getItem('name') === 'zhangsan') {
//             next();
//         } else {
//             console.log("用户名错误");
//         }
//     } else {
//         next();
//     }
// })

router.afterEach((to, from) => {
    document.title = to.name;
})

export default router;
