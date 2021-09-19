import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    pageType: 0,
    authenticated: false,
    username: '-',
    tasks: []
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
    addTask(state, task) {
      let time = new Date()
      time.setTime(task.timestamp)

      if (!('friendlyTime' in task)) {
        let friendlyTimeMinutes, friendlyTimeHours
        if (time.getMinutes() < 10) friendlyTimeMinutes = '0' + time.getMinutes()
        else friendlyTimeMinutes = time.getMinutes()
        if (time.getHours() < 10) friendlyTimeHours = '0' + time.getHours()
        else friendlyTimeHours = time.getHours()
        task.friendlyTime = friendlyTimeHours + ":" + friendlyTimeMinutes
      }
      if (!('friendlyDate' in task)) {
        let friendlyDateMonth, friendlyDateDay
        if (time.getMonth() < 9) friendlyDateMonth = '0' + (time.getMonth() + 1)
        else friendlyDateMonth = (time.getMonth() + 1)
        if (time.getDate() < 10) friendlyDateDay = '0' + time.getDate()
        else friendlyDateDay = time.getDate()
        task.friendlyDate = time.getFullYear() + "-" + friendlyDateMonth + "-" + friendlyDateDay
      }

      // console.log(`task ${task.title} desc: ${task.desc} timestamp: ${task.timestamp} time: ${time} friendlyTime: ${task.friendlyTime}, friendlyDate: ${task.friendlyDate}`)

      state.tasks.push({
        time,
        friendlyTime: task.friendlyTime,
        friendlyDate: task.friendlyDate,
        title: task.title,
        desc: task.desc,

        timeInplaceMenu: false,
        dateInplaceMenu: false,
        titleInplaceChange: false,
        descInplaceChange: false,
      })
    },
    sortTasks(state) {
      const currentTime = new Date().getTime()
      state.tasks.sort((a, b) => {
        const aTime = a.time.getTime()
        const bTime = b.time.getTime()
        if (aTime - currentTime < bTime - currentTime) return -1
        else if (aTime - currentTime > bTime - currentTime) return 1
        else return 0
      })
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
