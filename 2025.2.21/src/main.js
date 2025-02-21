import { createApp } from 'vue'
import App from './App.vue'
import Echarts from 'vue-echarts'
import * as echarts from 'echarts'
import router from './router/index.js';
import api from './api/index.js';
import { createPinia } from 'pinia';
import piniaPersist from 'pinia-plugin-persistedstate';

let pinia = createPinia();

const app = createApp(App);
app.config.globalProperties.$api = api
app.use(router)
pinia.use(piniaPersist)

app.use(pinia)
app.component('e-charts', Echarts)
app.mount('#app')

