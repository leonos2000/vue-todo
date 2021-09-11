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
            :key="task.title"
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
                    v-if="!task.titleInplaceChange"
                    @click="task.titleInplaceChange = true"
                  >
                    {{ task.title }}
                  </div>
                  <v-text-field
                    v-else
                    :value="task.title"
                    @blur="updateTitle(index, $event)"
                  ></v-text-field>
                </v-card-title>

                <v-card-text>
                  <div
                    v-if="!task.descInplaceChange"
                    @click="task.descInplaceChange = true"
                  >
                    {{ task.desc }}
                  </div>
                  <v-textarea 
                    v-model="task.desc"
                    v-else
                    @blur="task.descInplaceChange = false"
                  ></v-textarea>
                  <!-- DATE WITH DATE PICKER MENU ON CLICK --> 
                  <v-menu
                    ref="menu"
                    v-model="task.dateInplaceMenu"
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
                        class="pa-1"
                      >
                        {{ showDaysToTask(task.time) }},
                      </v-btn>  
                    </template>
                    <v-date-picker
                      v-if="task.dateInplaceMenu"
                      v-model="task.friendlyDate"
                      full-width
                      @input="updateTaskDate(index, task.friendlyDate)"
                    ></v-date-picker>
                  </v-menu>
                  <!-- TIME WITH TIME PICKER MENU ON CLICK --> 
                  <v-menu
                    ref="menu"
                    v-model="task.timeInplaceMenu"
                    transition="scale-transition"
                    :close-on-content-click="false"
                    offset-y
                    max-width="290px"
                    min-width="290px"
                  >
                    <template v-slot:activator="{ on, attrs }">
                      <v-btn 
                        class="pa-1"
                        text 
                        v-on="on"
                        v-bind="attrs"
                      >
                        godzina {{ task.friendlyTime }}
                      </v-btn>  
                    </template>
                    <v-time-picker
                      v-if="task.timeInplaceMenu"
                      v-model="task.friendlyTime"
                      full-width
                      format="24hr"
                      @click:minute="updateTaskTime(index, task.friendlyTime)"
                    ></v-time-picker>
                  </v-menu>

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
                prepend-icon="mdi-format-title"
                required
                @input="$v.taskTitle.$touch()"
                @blur="$v.taskTitle.$touch()"
              ></v-text-field>

              <v-textarea 
                v-model="taskDesc"
                label="Opis" 
                prepend-icon="mdi-subtitles-outline"
                required
                scrollable
              ></v-textarea>
            </v-form>

            <v-menu
              ref="menu"
              v-model="timePickMenu"
              transition="scale-transition"
              :close-on-content-click="false"
              offset-y
              max-width="290px"
              min-width="290px"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-text-field
                  v-model="taskFriendlyTime"
                  label="Godzina"
                  prepend-icon="mdi-clock-time-four-outline"
                  readonly
                  v-bind="attrs"
                  v-on="on"
                ></v-text-field>  
              </template>
              <v-time-picker
                v-if="timePickMenu"
                v-model="taskFriendlyTime"
                full-width
                format="24hr"
                @click:minute="timePickMenu = false"
              ></v-time-picker>
            </v-menu>

            <v-menu
              ref="menu"
              v-model="datePickMenu"
              transition="scale-transition"
              :close-on-content-click="false"
              offset-y
              max-width="290px"
              min-width="290px"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-text-field
                  v-model="taskFriendlyDate"
                  label="Data"
                  prepend-icon="mdi-calendar"
                  readonly
                  v-bind="attrs"
                  v-on="on"
                ></v-text-field>  
              </template>
              <v-date-picker
                v-if="datePickMenu"
                v-model="taskFriendlyDate"
                full-width
                @input="datePickMenu = false"
              ></v-date-picker>
            </v-menu>
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
      @click="openOverlay()"
    >
      <v-icon>mdi-plus</v-icon>
    </v-btn>

    <!-- FOOTER WITH NEXT TASK -->
    <v-footer
      color="primary lighten-1 white--text"
    >
      <div 
        class="ma-4"
      >{{ nextTask }}</div>
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
      this.nextTaskUpdater

      const currentTime = new Date().getTime()
      let index
      let timeDeviation = currentTime
      for (let i = 0; i < this.tasks.length; i++) {
        if (this.tasks[i].time.getTime() - currentTime < timeDeviation) {
          index = i
          timeDeviation = this.tasks[i].time.getTime() - currentTime
        }
      }
      if ((timeDeviation == currentTime) || (timeDeviation <= 0)) {
        return 'Wszystko zrobione :)'
      } 
      return 'Następne zadanie: ' + this.tasks[index].title
    }
  },

  validations: {
    taskTitle: { required },
  },

  data: () => ({
    overlay: false,

    nextTaskUpdater: 0,

    timePickMenu: false,
    datePickMenu: false,

    taskFriendlyTime: '10:00',
    taskFriendlyDate: '2021-09-09',
    taskTime: null,
    taskTitle: '',
    taskDesc: '',


    tasks: [{
      time: new Date(),
      friendlyTime: '10:10',
      friendlyDate: '2021-09-12',

      title: 'Naglowek',
      desc: 'To jest piekny opis',

      timeInplaceMenu: false,
      dateInplaceMenu: false,
      titleInplaceChange: false,
      descInplaceChange: false,
    }],
    doneTasks: [],
  }),
  methods: {
    openOverlay() {
      this.overlay = true

      const currentTime = new Date()
      this.taskFriendlyTime = currentTime.getHours() + ":" + currentTime.getMinutes()
      this.taskFriendlyDate = currentTime.getFullYear() + "-" + (currentTime.getMonth() + 1) + "-" + currentTime.getDate()
    },
    showDaysToTask(taskTime) {
      const currentTime = new Date().getTime()

      const timeToTask = taskTime.getTime() - currentTime
      let nextDay = new Date(taskTime)
      nextDay.setDate(taskTime.getDate + 1)
      nextDay.setMinutes(0)
      nextDay.setHours(0)
      const timeToEndOfDay = nextDay - taskTime.getTime()
      
      const daysToTask = Math.floor(timeToTask / (24*60*60*1000))

      if (timeToTask < 0) {
        return "spóźnione"
      } else if (daysToTask == 0 && (timeToEndOfDay > timeToTask)) {
        return "Dzisiaj"
      } else if ((daysToTask == 1 && (timeToEndOfDay < (timeToTask - (24*60*60*1000)))) || (daysToTask == 0)) {
        return "Jutro"
      } else if (daysToTask == 1) {
        return "Za 2 dni"
      } else {
        return "Za " + daysToTask + " dni"
      }
    },
    saveTask() {
      this.$v.$touch()
      if (!this.$v.$invalid) {
        console.log("Friendly Date: " + this.taskFriendlyDate)
        let taskTime = new Date()
        taskTime.setFullYear(this.taskFriendlyDate.substr(0, 4))
        taskTime.setMonth(parseInt(this.taskFriendlyDate.substr(5, 2)) - 1)
        taskTime.setDate(this.taskFriendlyDate.substr(8, 2))
        taskTime.setHours(this.taskFriendlyTime.substr(0, 2))
        taskTime.setMinutes(this.taskFriendlyTime.substr(3, 2))
        console.log(taskTime)

        this.tasks.push({
          time: taskTime, 
          friendlyTime: this.taskFriendlyTime,
          friendlyDate: this.taskFriendlyDate,
          title: this.taskTitle, 
          desc: this.taskDesc
        })
        this.overlay = false
        this.taskTitle = ''
        this.taskDesc = ''
      }
    },
    updateTaskTime(index, friendlyTime) {
      let taskTime = this.tasks[index].time
      taskTime.setHours(friendlyTime.substr(0, 2))
      taskTime.setMinutes(friendlyTime.substr(3, 2))

      this.tasks[index].time = taskTime
      this.tasks[index].timeInplaceMenu = false

      this.nextTaskUpdater++
    },
    updateTaskDate(index, friendlyDate) {
      let taskTime = this.tasks[index].time
      taskTime.setFullYear(friendlyDate.substr(0, 4))
      taskTime.setMonth(parseInt(friendlyDate.substr(5, 2)) - 1)
      taskTime.setDate(friendlyDate.substr(8, 2))

      
      this.tasks[index].time = taskTime
      this.tasks[index].dateInplaceMenu = false

      this.nextTaskUpdater++
    },
    updateTitle(index, event) {
      this.tasks[index].title = event.target.value
      this.tasks[index].titleInplaceChange = false

      this.nextTaskUpdater++
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
  }
};
</script>

<style scoped>
</style>