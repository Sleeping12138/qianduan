import './assets/reset.css'

import { createApp } from 'vue'
import App from './App.vue'
import "amfe-flexible/index.js";
import router from './router/index.js';
const app = createApp(App)
app.use(router)
app.mount('#app')
