import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    csrfToken: 'test',
    pageType: 0
  },
  mutations: {
    setCsrfToken(state, token) {
      state.csrfToken = token
    },
    setPageType(state, type) {
      state.pageType = type
    }
  },
  actions: {
  },
  modules: {
  }
})
