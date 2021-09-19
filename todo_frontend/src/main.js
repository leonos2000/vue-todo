import Vue from 'vue'
import './plugins/axios'
import vuetify from './plugins/vuetify'
import router from './router'
import store from './store'
import App from './App.vue'
import VueCookies from 'vue-cookies'


Vue.config.productionTip = false

Vue.use(VueCookies)

new Vue({
  vuetify,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
