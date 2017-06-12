// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueResource from 'vue-resource'

import Auth from './packages/auth/Auth'

Vue.use(VueResource)
Vue.use(Auth)

Vue.config.productionTip = false

/* eslint-disable no-new */

router.beforeEach(
(to, from, next) => {
  if (to.matched.some(Record => Record.meta.forVisitors)) {
    if (Vue.auth.isAuthenticated()) {
      next({
        name: 'dashboard'
      })
    } else {
      next()
    }
  } else if (to.matched.some(Record => Record.meta.forAuth)) {
    if (!Vue.auth.isAuthenticated()) {
      next({
        name: 'login'
      })
    } else {
      next()
    }
  } else {
    next()
  }
})

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
