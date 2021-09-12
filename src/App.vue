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