import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    pageType: 0,
    authenticated: false,
    username: '-',
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
    },
    setUsername(state, username) {
      state.username = username
    }
  },
  actions: {
  },
  modules: {
  }
})
