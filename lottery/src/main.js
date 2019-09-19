import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'lib-flexible/flexible'
import axios from 'axios'
import VueAxios from 'vue-axios'
import IconFont from '../src/assets/iconfont/iconfont.css' 
Vue.config.productionTip = false

Vue.use(VueAxios,axios)

axios.defaults.withCredentials = true
Vue.prototype.$axios = axios;

new Vue({
  router,
  store,
  axios,
  VueAxios,
  IconFont,
  render: h => h(App)
}).$mount('#app')
