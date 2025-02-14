import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index.js';
import api from './api';

const app = createApp(App);
// 在app的原型上绑定了$api
app.config.globalProperties.$api = api;
app.use(router)
app.mount('#app')
