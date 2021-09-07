<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <v-toolbar-title>TODO</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn text rounded>Home</v-btn>
      <v-btn text rounded>Login</v-btn>
    </v-app-bar>

    <!-- Login module -->
    <v-main>
      <v-container>
        <v-row no-gutters>
          <v-col
            v-for="task in tasks"
            :key="task.id"
            cols="12"
            sm="4"
          >
            <v-card class="pa-2 ma-2">
              <v-card-title>
                {{ task.title }}
                <v-spacer></v-spacer>
                <v-btn text>
                  {{ task.time }}
                </v-btn>  
              </v-card-title>
              <v-card-text>
                
                <div>
                  {{ task.desc }}
                </div>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
      <v-overlay
        :absolute="absolute"
        :value="overlay"
        z-index="0"
      >
      <v-card
        center
        class="pa-2"
      >
        <v-card-title>Nowe zadanie</v-card-title>
        <v-card-text>
          <v-text-field 
            v-model="taskTitle"
            label="Tytuł"
            required
          ></v-text-field>
          <v-textarea 
            v-model="taskDesc"
            label="Opis" 
            required
          ></v-textarea>
          <v-time-picker
            format="ampm"
            v-model="taskTime"
          ></v-time-picker>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            text
            @click="saveTask()"
          >dodaj</v-btn>
        </v-card-actions>
      </v-card>

      </v-overlay>
    </v-main>
    <v-btn
      color="pink"
      fab
      fixed
      right
      bottom
      @click="overlay = !overlay"
    >
      <v-icon>mdi-plus</v-icon>
    </v-btn>
    <!--
    <v-footer
      color="primary lighten-1"
      padless
    >
      <v-row
        justify="center"
        no-gutters
      >
        <v-btn
          v-for="link in links"
          :key="link"
          color="white"
          text
          rounded
          class="my-2"
        >
          {{ link }}
        </v-btn>
      </v-row>
    </v-footer>
    -->
  </v-app>
</template>

<script>

export default {
  name: 'App',

  computed: {
  },

  data: () => ({
    showPassword: false,
    absolute: true,
    overlay: false,
    taskTitle: '',
    taskDesc: '',
    taskTime: '',
    tasks: [{
      id: 1,
      time: '10:45',
      title: 'Naglowek',
      desc: 'To jest piekny opis'
    }]
  }),
  methods: {
    saveTask(){
      console.log('test')
      this.tasks.push({id: this.tasks.at(-1).id + 1, time: this.taskTime, title: this.taskTitle, desc: this.taskDesc})
      this.overlay = false
    }
  }
};
</script>

<style scoped>
/* .v-btn--floating {
  position: absolute;
} */
</style>