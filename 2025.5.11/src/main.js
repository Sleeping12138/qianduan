import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index.js';
import { createPinia } from 'pinia';
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate';

const app = createApp(App);
let pinia = createPinia();
app.use(router);
app.use(pinia);
pinia.use(piniaPluginPersistedstate);
app.mount('#app');
