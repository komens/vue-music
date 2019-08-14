import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import router from './router'
import fastclick from 'fastclick'
import axios from 'axios'

import 'common/stylus/index.styl'

fastclick.attach(document.body)

// 将axios挂载到vue实例的原型链
Vue.prototype.axios = axios

// Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
