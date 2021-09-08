<template>
  <v-app>
    <!-- APPBAR -->
    <v-app-bar app color="primary" dark>
      <v-toolbar-title>TODO</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn text rounded>Home</v-btn>
      <v-btn text rounded>Login</v-btn>
    </v-app-bar>

    <v-main>
      <!-- CONTAINER WITH TASKS -->
      <v-container>
        <v-row no-gutters>
          <!-- TASK CARD -->
          <v-col
            v-for="(task, index) in tasks"
            :key="index"
            cols="12"
            sm="4"
          >
            <v-hover v-slot="{ hover }">
              <v-card 
                :elevation="hover ? 12 : 2"
                class="pa-2 ma-2"
              >
                <v-card-title>
                  <div 
                    v-if="!titleChange"
                    @click="titleChange = true"
                    class="card-title"
                  >
                    {{ task.title }}
                  </div>
                  <v-text-field
                    v-else
                    v-model="task.title"
                    @blur="titleChange = false"
                  ></v-text-field>
                  <v-spacer></v-spacer>
                  <!-- TIME WITH TIME PICKER MENU ON CLICK --> 
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
                      @click:minute="updateTaskTime(index, timeTmp)"
                    ></v-time-picker>
                  </v-menu>
                </v-card-title>

                <v-card-text>
                  <div
                    v-if="!descChange"
                    @click="descChange = true"
                  >
                    {{ task.desc }}
                  </div>
                  <v-textarea 
                    v-model="task.desc"
                    v-else
                    @blur="descChange = false"
                  ></v-textarea>
                </v-card-text>
                
                <v-card-actions>
                  <v-btn
                    v-show="hover"
                    icon
                    @click="deleteTask(index)"
                  >
                    <v-icon>mdi-delete</v-icon>
                  </v-btn>
                  <v-spacer></v-spacer>
                  <v-btn
                    v-show="hover"
                    icon
                    @click="archiveTask(index)"
                  >
                    <v-icon>mdi-check</v-icon>
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-hover>
          </v-col>
        </v-row>
      </v-container>

      <!-- NEW TASK OVERLAY -->
      <v-overlay
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
            <v-btn
              text
              @click="cancelTaskAdding()"
            >anuluj</v-btn>
            <v-spacer></v-spacer>
            <v-btn
              text
              @click="saveTask()"
            >dodaj</v-btn>
          </v-card-actions>
        </v-card>
      </v-overlay>
    </v-main>

    <!-- NEW TASK FLOATING BUTTON -->
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

    <!-- FOOTER WITH NEXT TASK -->
    <v-footer
      color="primary lighten-1 white--text"
    >
      <div class="ma-4">Następne zadanie: {{ nextTask }}</div>
    </v-footer>

  </v-app>
</template>

<script>

import { validationMixin } from 'vuelidate'
import { required } from 'vuelidate/lib/validators'

export default {
  name: 'App',

  mixins: [validationMixin],

  computed: {
    taskTitleErrors() {
      const errors = []
        if (!this.$v.taskTitle.$dirty) return errors
        !this.$v.taskTitle.required && errors.push('Pole wymagane')
      return errors
    },
    nextTask() {
      const currentMinutes = new Date().getHours() * 60 + new Date().getMinutes()
      console.log("current minutes: " + currentMinutes)
      var index
      var tmpMinutes = 100000
      for (var i = 0; i < this.tasks.length; i++) {
        const taskMinutes = parseInt(this.tasks[i].time.substr(0, 2)) * 60 + parseInt(this.tasks[i].time.substr(3, 2))
        if (taskMinutes - currentMinutes < tmpMinutes) {
          index = i
          tmpMinutes = taskMinutes - currentMinutes
          console.log("task " + this.tasks[i].title + " minutes: " + taskMinutes + " tmpMinutes: " + tmpMinutes)
        }
      }
      return this.tasks[index].title
    }
  },

  validations: {
    taskTitle: { required },
  },

  data: () => ({
    overlay: false,
    menu2: false,
    timeTmp: null,

    titleChange: false,
    descChange: false,

    taskTitle: '',
    taskDesc: '',
    taskTime: new Date().getHours() + ":" + new Date().getMinutes(),
    tasks: [{
      time: '23:59',
      title: 'Naglowek',
      desc: 'To jest piekny opis'
    }],
    doneTasks: [],
  }),
  methods: {
    saveTask(){
      this.$v.$touch()
      if (!this.$v.$invalid) {
        this.tasks.push({time: this.taskTime, title: this.taskTitle, desc: this.taskDesc})
        this.overlay = false
        this.taskTitle = ''
        this.taskDesc = ''
      }
    },
    cancelTaskAdding() {
      this.overlay = false
      this.taskTitle = ''
      this.taskDesc = ''
    },
    deleteTask(index) {
      this.tasks.splice(index, 1)
    },
    archiveTask(index) {
      this.doneTasks.push(this.tasks.splice(index, 1))
    },
    updateTaskTime(index, time) {
      this.tasks[index].time = time
      this.menu2 = false
    },
  }
};
</script>

<style scoped>
.card-title {
  width: 50%;
}
</style>