import Vue from 'vue';
import App from './App.vue';
import './assets/style/global.scss'
import VueRouter from 'vue-router'
import router from '@/router'
import {plugin} from 'vue-function-api'

Vue.use(VueRouter)
Vue.use(plugin)

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
