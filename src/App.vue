<template>
  <v-app>
        <!-- APPBAR -->
    <v-app-bar app color="primary" dark>
      <v-toolbar-title>TODO</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn text rounded>Dashboard</v-btn>
      <v-btn text rounded>Login</v-btn>
    </v-app-bar>

    <v-main>
      <v-container fluid>
        <router-view/>
      </v-container>
    </v-main>

  </v-app>
</template>