import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'lib-flexible/flexible'
import axios from 'axios'
import VueAxios from 'vue-axios'
<<<<<<< HEAD
import IconFont from '../src/assets/iconfont/iconfont.css' 
=======


import { MdButton, MdContent, MdTabs } from 'vue-material/dist/components'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'

Vue.use(MdButton)
Vue.use(MdContent)
Vue.use(MdTabs)




>>>>>>> cea43a319743472eecdcc21dbdd5669a5b1d0b2f
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
