import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Shop from './views/Shop.vue'
import Help from './views/Help'
import Tickets from './views/Tickets'
import lotteryHall from './views/lotteryHall.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/lotteryHall',
      name: 'lotteryHall',
      component: lotteryHall
    },
    {
      path: '/shop',
      name: 'shop',
      component: Shop
    },
    {
      path: '/help',
      name: 'help', 
      component: Help
    },
    {
      path: '/tickets',
      name: 'tickets',
      component: Tickets
    }
  ]
})
