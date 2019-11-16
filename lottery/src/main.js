import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'lib-flexible/flexible'
import axios from 'axios'
import VueAxios from 'vue-axios'
import IconFont from '../src/assets/iconfont/iconfont.css' 
import elementUI from 'element-ui'
import '../node_modules/element-ui/lib/theme-chalk/index.css'
import '../node_modules/element-ui/lib/index'


import { MdButton, MdContent, MdTabs } from 'vue-material/dist/components'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'

Vue.use(MdButton)
Vue.use(MdContent)
Vue.use(MdTabs)
Vue.use(elementUI)




import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'

Vue.use(VueMaterial)

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
