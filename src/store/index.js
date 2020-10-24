import Vue from 'vue'
import Vuex from 'vuex'
import login from './login'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  getters: {
    aa() {
      return 1
    }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    login
  }
})
