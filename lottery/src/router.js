import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
<<<<<<< HEAD
import Help from './views/Help'
import Tickets from './views/Tickets'
=======
import lotteryHall from './views/lotteryHall.vue'

>>>>>>> cea43a319743472eecdcc21dbdd5669a5b1d0b2f
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
//  {
//    path: '/',
//    name: 'home',
//    component: Home
//  },
//  {
//    path: '/about',
//    name: 'about',
//    // route level code-splitting
//    // this generates a separate chunk (about.[hash].js) for this route
//    // which is lazy-loaded when the route is visited.
//    component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
//  }
    {
      path: '/',
      name: 'lotteryHall',
      component: lotteryHall
    },
<<<<<<< HEAD
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
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
=======
>>>>>>> cea43a319743472eecdcc21dbdd5669a5b1d0b2f
  ]
})
