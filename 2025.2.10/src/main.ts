import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index';
import { createPinia } from 'pinia';

import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import panelHeader from './components/panelHeader.vue';

const app = createApp(App)

app.component('panelHeader', panelHeader);

const pinia = createPinia();
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}

app.use(router)
app.use(pinia)
app.mount('#app')
