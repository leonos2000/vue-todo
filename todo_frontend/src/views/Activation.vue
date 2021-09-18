<template>
  <v-card
    width="400"
    class="mx-auto"
    color="success"
  >
    <v-card-title>
      Activation completed!
    </v-card-title>
    <v-card-text>
      You can now login into your account.
    </v-card-text>
    <v-card-actions>
      <v-spacer/>
      <router-link to="/login">
        <v-btn text rounded>Login</v-btn>
      </router-link>
    </v-card-actions>
  </v-card>
</template>