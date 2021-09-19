import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    pageType: 0,
    authenticated: false,
    userTasks: []
  },
  mutations: {
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
