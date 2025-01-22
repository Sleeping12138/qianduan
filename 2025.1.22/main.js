import Vue from 'vue'
import App from './App.vue'
import store from './store/index.js'
import VueRouter from 'vue-router'
import router from './router/index.js'
// import ElementUI from 'element-ui';
// import 'element-ui/lib/theme-chalk/index.css';
import { Button, Row } from 'element-ui';

Vue.config.productionTip = false
Vue.use(VueRouter);
Vue.component('el-button', Button);
Vue.component('el-row', Row);
// Vue.use(ElementUI);

new Vue({
  render: h => h(App),
  router: router

}).$mount('#app')


