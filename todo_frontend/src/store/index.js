import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    csrfToken: 'test',
  },
  mutations: {
    setCsrfToken(state, token) {
      state.csrfToken = token
    }
  },
  actions: {
  },
  modules: {
  }
})
