import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/assets/scss/reset.scss'
import './plugins/element.js'
import '@/assets/scss/common.scss'
// import axios from 'axios'
import http from './plugins/http.js'
import form from './plugins/form.js'
// import setRem from '../rem.js';

import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'


// Vue.prototype.$fontSize = setRem()
// window.onresize = function () {
//   Vue.prototype.$fontSize = setRem()
// }

Vue.use(mavonEditor)

Vue.config.productionTip = false

// const test = axios.create({
//   baseURL: 'http://127:0.0.1:3000/api/'
// })
// Vue.prototype.$http2 = axios

Vue.prototype.$http = http
Vue.prototype.$form = form

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
