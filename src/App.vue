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
                <v-menu
                  ref="menu"
                  v-model="menu2"
                  transition="scale-transition"
                  :close-on-content-click="false"
                  offset-y
                  max-width="290px"
                  min-width="290px"
                >
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn 
                      text 
                      v-on="on"
                      v-bind="attrs"
                    >
                      {{ task.time }}
                    </v-btn>  
                  </template>
                  <v-time-picker
                    v-if="menu2"
                    v-model="timeTmp"
                    full-width
                    @click:minute="updateTaskTime(task.id, timeTmp)"
                  ></v-time-picker>
                </v-menu>
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
          <v-form>
            <v-text-field 
              v-model="taskTitle"
              :error-messages="taskTitleErrors"
              label="Tytuł"
              required
              @input="$v.taskTitle.$touch()"
              @blur="$v.taskTitle.$touch()"
            ></v-text-field>
            <v-textarea 
              v-model="taskDesc"
              label="Opis" 
              required
              scrollable
            ></v-textarea>
          </v-form>
          <v-time-picker
            v-model="taskTime"
            value="08:11"
            format="24hr"
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
  </v-app>
</template>

<script>

import { validationMixin } from 'vuelidate'
import { required } from 'vuelidate/lib/validators'

export default {
  name: 'App',

  mixins: [validationMixin],

  computed: {
    taskTitleErrors () {
      const errors = []
        if (!this.$v.taskTitle.$dirty) return errors
        !this.$v.taskTitle.required && errors.push('Pole wymagane')
      return errors
    }
  },

  validations: {
    taskTitle: { required },
  },

  data: () => ({
    showPassword: false,
    absolute: true,
    overlay: false,
    menu2: false,
    timeTmp: null,
    taskTitle: '',
    taskDesc: '',
    taskTime: new Date().getHours() + ":" + new Date().getMinutes(),
    tasks: [{
      id: 1,
      time: '10:45',
      title: 'Naglowek',
      desc: 'To jest piekny opis'
    }]
  }),
  methods: {
    saveTask(){
      this.$v.$touch()
      if (!this.$v.$invalid) {
        this.tasks.push({id: this.tasks.at(-1).id + 1, time: this.taskTime, title: this.taskTitle, desc: this.taskDesc})
        this.overlay = false
      }
    },
    updateTaskTime(id, time) {
      for (var i = 0; i < this.tasks.length; i++) {
        console.log(i)
        if (this.tasks[i].id == id) {
          this.tasks[i].time = time
        }
      }
      this.menu2 = false
    },
  }
};
</script>

<style scoped>
/* .v-btn--floating {
  position: absolute;
} */
</style>