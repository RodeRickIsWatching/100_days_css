import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Days from './views/Days'
import receiveRouteParams from './components/receiveRouteParams'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Days
    },
    {
      path: '/days',
      name: 'Days',
      component: Days
    },
    {
      path: '/days/:id',
      name: '',
      component: receiveRouteParams,
    }
  ]
})
