import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/assets/scss/reset.scss'
import './plugins/element.js'
// import axios from 'axios'
import http from './plugins/http.js'
import '../rem.js';

Vue.config.productionTip = false

// const test = axios.create({
//   baseURL: 'http://127:0.0.1:3000/api/'
// })
// Vue.prototype.$http2 = axios

Vue.prototype.$http = http

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
