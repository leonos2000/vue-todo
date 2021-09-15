<template>
  <v-app>
    <!-- APPBAR -->
    <v-app-bar app color="primary" dark>
      <v-toolbar-title>TODO</v-toolbar-title>
      <v-spacer></v-spacer>
      <router-link to="/">
        <v-btn text rounded>Dashboard</v-btn>
      </router-link>
      <router-link to="/login">
        <v-btn text rounded>Login</v-btn>
      </router-link>
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
    this.getCsrfTocken()
  },

  methods: {
    async getCsrfTocken () {
      try {
        const data = await this.axios.get('/csrf/')
        this.$store.commit('setCsrfToken', data.data.token)
      } catch (error) {
        console.error(error)
      }
    }
  }
}
</script>