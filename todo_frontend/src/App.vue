<template>
  <v-app>
    <!-- APPBAR -->
    <v-app-bar app color="primary" dark>      
      <v-toolbar-title @click="$router.push('/')">
          TODO
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <router-link 
        to="/login"
        v-if="!$store.state.authenticated"  
      >
        <v-btn text rounded>Login</v-btn>
      </router-link>
      <v-menu 
        v-else
        offset-y
      >
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            text
            rounded
            v-bind="attrs"
            v-on="on"
          >
            Hi, {{ username }}
          </v-btn>
        </template>
        <v-list>
          <v-list-item>
            <v-list-item-title @click="logout()">Logout</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>

    </v-app-bar>

    <v-main>
      <v-container fluid>
        <router-view/>
      </v-container>
    </v-main>

  </v-app>
</template>

<script>
export default {
  created() {
    let djangoContext = JSON.parse(document.getElementById('contextJson').innerText)

    this.$store.commit('setPageType', djangoContext.pageType)
    if (djangoContext.authenticated) this.$store.commit('auth')
  },
  computed: {
    username() {
      return this.$store.state.username
    }
  },
  methods: {
    logout() {
      let data = new FormData()
      data.append('csrfmiddlewaretoken', this.$cookies.get('csrftoken'))
      this.axios.post('/login/logout/', data)
        .then(() => {
          this.$store.commit('deAuth')
          console.log('logout successfull')
        })
        .catch(err => {
          console.error(err)
        })
    }
  }
}
</script>