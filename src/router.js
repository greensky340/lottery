import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Ucenter from './views/Ucenter.vue'
import About from './views/About.vue'
import Dlt from './views/Dlt.vue'
import DltTz from './views/DltTz.vue'
import Order from './views/Order.vue'
import OrderInfo from './views/OrderInfo.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/ucenter',
      name: 'ucenter',
      component: Ucenter
    },
    {
      path: '/about',
      name: 'about',
      component: About
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      // component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/DLT',
      name: 'dlt',
      component: Dlt
    },
    {
      path: '/DLTTz',
      name: 'dlttz',
      component: DltTz
    },
    {
      path: '/Order',
      name: 'order',
      component: Order
    },
    {
      path: '/OrderInfo',
      name: 'orderinfo',
      component: OrderInfo
    }
  ]
})
