import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    csrfToken: 'test',
    pageType: 0,
    authenticated: false,
    userTasks: []
  },
  mutations: {
    setCsrfToken(state, token) {
      state.csrfToken = token
    },
    setPageType(state, type) {
      state.pageType = type
    },
    auth(state) {
      state.authenticated = true
    },
    deAuth(state) {
      state.authenticated = false
    },
    addTask(state, taskObject) {
      state.userTasks.push(taskObject)
    }
  },
  actions: {
  },
  modules: {
  }
})
