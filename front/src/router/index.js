import Vue from 'vue'
import Router from 'vue-router'

import Login from '../components/authentication/Login.vue'
import Register from '../components/authentication/Register.vue'
import Feed from '../components/Feed.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: __dirname,
  routes: [{
    path: '/login',
    component: Login,
    name: 'login',
    meta: {
      forVisitors: true
    }
  },
  {
    path: '/register',
    component: Register,
    name: 'register',
    meta: {
      forVisitors: true
    }
  },
  {
    path: '/feed',
    component: Feed,
    name: 'feed',
    meta: {
      forAuth: true
    }
  }
  ]
})
