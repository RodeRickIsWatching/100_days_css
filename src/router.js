import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Days from './views/Days'
import About from './views/About'
import receiveRouteParams from './components/receiveRouteParams'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      meta:{index:0},
      component: About
    },
    {
      path: '/days',
      name: 'Days',
      meta:{index:1},
      component: Days
    },
    {
      path: '/days/:id',
      name: '',
      meta:{index:2},
      component: receiveRouteParams,
    },
  ]
})
