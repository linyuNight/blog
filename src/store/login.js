export default {
  namespaced: true,
  state: {
    isLogin: false
  },
  getters: {
    isLogin(state) {
      return state.isLogin
    }
  },
  mutations: {
    bb() {
      console.log(11)
    }
  },
  actions: {
  }
}