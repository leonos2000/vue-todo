<template>
  <v-app>
    <!-- APPBAR -->
    <v-app-bar app color="primary" dark>
      <v-toolbar-title>TODO</v-toolbar-title>
      <v-spacer></v-spacer>
      <router-link to="/">
        <v-btn text rounded>Dashboard</v-btn>
      </router-link>
      <router-link 
        to="/login"
        v-if="!$store.state.authenticated"  
      >
        <v-btn text rounded>Login</v-btn>
      </router-link>
      <v-btn
        text
        reounded
        v-else
      >
        zalogowano
      </v-btn>
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
  mounted() {
    let context = JSON.parse(document.getElementById('contextJson').textContent)
    this.$store.commit('setPageType', context.pageType)
  }
}
</script>