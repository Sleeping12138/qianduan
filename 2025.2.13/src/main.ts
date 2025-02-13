import './assets/main.css'

import { createApp, toRaw, nextTick } from 'vue'
import App from './App.vue'
import router from './router/index';
import { createPinia } from 'pinia';

import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import panelHeader from './components/panelHeader.vue';
import piniaPersist from 'pinia-plugin-persistedstate';
import useMenuStore from './store/menu';

const app = createApp(App)

app.component('panelHeader', panelHeader);

const pinia = createPinia();
pinia.use(piniaPersist);
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}


app.use(pinia)

const menuStore = useMenuStore();
const listData = localStorage.getItem('menu')
if (listData) {
    menuStore.dynamicMenu(JSON.parse(listData).routeList)
    toRaw(menuStore.routeList).forEach(item => {
        router.addRoute('main', item);
    })
}

app.use(router)
app.mount('#app')





