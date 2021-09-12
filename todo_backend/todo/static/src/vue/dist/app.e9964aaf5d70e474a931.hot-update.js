webpackHotUpdate("app",{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/Dashboard.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/Dashboard.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var core_js_modules_es_array_splice_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.splice.js */ \"./node_modules/core-js/modules/es.array.splice.js\");\n/* harmony import */ var core_js_modules_es_array_splice_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_splice_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var core_js_modules_es_array_sort_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.sort.js */ \"./node_modules/core-js/modules/es.array.sort.js\");\n/* harmony import */ var core_js_modules_es_array_sort_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_sort_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var vuelidate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vuelidate */ \"./node_modules/vuelidate/lib/index.js\");\n/* harmony import */ var vuelidate__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(vuelidate__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vuelidate/lib/validators */ \"./node_modules/vuelidate/lib/validators/index.js\");\n/* harmony import */ var vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_3__);\n\n\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: 'App',\n  mixins: [vuelidate__WEBPACK_IMPORTED_MODULE_2__[\"validationMixin\"]],\n  computed: {\n    taskTitleErrors: function taskTitleErrors() {\n      var errors = [];\n      if (!this.$v.taskTitle.$dirty) return errors;\n      !this.$v.taskTitle.required && errors.push('Pole wymagane');\n      return errors;\n    }\n  },\n  validations: {\n    taskTitle: {\n      required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_3__[\"required\"]\n    }\n  },\n  data: function data() {\n    return {\n      overlay: false,\n      timePickMenu: false,\n      datePickMenu: false,\n      taskFriendlyTime: '10:00',\n      taskFriendlyDate: '2021-09-09',\n      taskTime: null,\n      taskTitle: '',\n      taskDesc: '',\n      tasks: [{\n        time: new Date(),\n        friendlyTime: '10:10',\n        friendlyDate: '2021-09-12',\n        title: 'Naglowek',\n        desc: 'To jest piekny opis',\n        timeInplaceMenu: false,\n        dateInplaceMenu: false,\n        titleInplaceChange: false,\n        descInplaceChange: false\n      }],\n      doneTasks: []\n    };\n  },\n  methods: {\n    openOverlay: function openOverlay() {\n      this.overlay = true;\n      console.log(this.$store.state.csrfToken);\n      var currentTime = new Date();\n      var currentHours = '';\n      var currentMinutes = '';\n      var currentMonth = '';\n      var currentDay = '';\n      if (currentTime.getMinutes() < 10) currentMinutes = '0' + currentTime.getMinutes();else currentMinutes = currentTime.getMinutes();\n      if (currentTime.getHours() < 10) currentHours = '0' + currentTime.getHours();else currentHours = currentTime.getHours();\n      if (currentTime.getMonth() < 9) currentMonth = '0' + (currentTime.getMonth() + 1);else currentMonth = currentTime.getMonth() + 1;\n      if (currentTime.getDate() < 10) currentDay = '0' + currentTime.getDate();else currentDay = currentTime.getDate();\n      this.taskFriendlyTime = currentHours + \":\" + currentMinutes;\n      this.taskFriendlyDate = currentTime.getFullYear() + \"-\" + currentMonth + \"-\" + currentDay;\n    },\n    showDaysToTask: function showDaysToTask(taskTime) {\n      var currentTime = new Date().getTime();\n      var timeToTask = taskTime.getTime() - currentTime;\n      var nextDay = new Date(taskTime);\n      nextDay.setDate(taskTime.getDate() + 1);\n      nextDay.setMinutes(0);\n      nextDay.setHours(0);\n      var timeToEndOfDay = nextDay.getTime() - taskTime.getTime();\n      var daysToTask = Math.floor(timeToTask / (24 * 60 * 60 * 1000));\n\n      if (timeToTask < 0) {\n        return \"spóźnione\";\n      } else if (daysToTask == 0 && timeToEndOfDay > timeToTask) {\n        return \"dzisiaj\";\n      } else if (daysToTask == 1 && timeToEndOfDay < timeToTask - 24 * 60 * 60 * 1000 || daysToTask == 0) {\n        return \"jutro\";\n      } else if (daysToTask == 1) {\n        return \"za 2 dni\";\n      } else {\n        return \"za \" + daysToTask + \" dni\";\n      }\n    },\n    saveTask: function saveTask() {\n      this.$v.$touch();\n\n      if (!this.$v.$invalid) {\n        console.log(\"Friendly Date: \" + this.taskFriendlyDate);\n        var taskTime = new Date();\n        taskTime.setFullYear(this.taskFriendlyDate.substr(0, 4));\n        taskTime.setMonth(parseInt(this.taskFriendlyDate.substr(5, 2)) - 1);\n        taskTime.setDate(this.taskFriendlyDate.substr(8, 2));\n        taskTime.setHours(this.taskFriendlyTime.substr(0, 2));\n        taskTime.setMinutes(this.taskFriendlyTime.substr(3, 2));\n        this.tasks.push({\n          time: taskTime,\n          friendlyTime: this.taskFriendlyTime,\n          friendlyDate: this.taskFriendlyDate,\n          title: this.taskTitle,\n          desc: this.taskDesc\n        });\n        this.overlay = false;\n        this.taskTitle = '';\n        this.taskDesc = '';\n        this.sortTasks();\n      }\n    },\n    updateTaskTime: function updateTaskTime(index, friendlyTime) {\n      var taskTime = this.tasks[index].time;\n      taskTime.setHours(friendlyTime.substr(0, 2));\n      taskTime.setMinutes(friendlyTime.substr(3, 2));\n      this.tasks[index].time = taskTime;\n      this.tasks[index].timeInplaceMenu = false;\n      this.sortTasks();\n    },\n    updateTaskDate: function updateTaskDate(index, friendlyDate) {\n      var taskTime = this.tasks[index].time;\n      taskTime.setFullYear(friendlyDate.substr(0, 4));\n      taskTime.setMonth(parseInt(friendlyDate.substr(5, 2)) - 1);\n      taskTime.setDate(friendlyDate.substr(8, 2));\n      this.tasks[index].time = taskTime;\n      this.tasks[index].dateInplaceMenu = false;\n      this.sortTasks();\n    },\n    updateTitle: function updateTitle(index, event) {\n      this.tasks[index].title = event.target.value;\n      this.tasks[index].titleInplaceChange = false;\n      this.sortTasks();\n    },\n    cancelTaskAdding: function cancelTaskAdding() {\n      this.overlay = false;\n      this.taskTitle = '';\n      this.taskDesc = '';\n    },\n    deleteTask: function deleteTask(index) {\n      this.tasks.splice(index, 1);\n      this.sortTasks();\n    },\n    archiveTask: function archiveTask(index) {\n      this.doneTasks.push(this.tasks.splice(index, 1));\n      this.sortTasks();\n    },\n    sortTasks: function sortTasks() {\n      var currentTime = new Date().getTime();\n      this.tasks.sort(function (a, b) {\n        var aTime = a.time.getTime();\n        var bTime = b.time.getTime();\n        if (aTime - currentTime < bTime - currentTime) return -1;else if (aTime - currentTime > bTime - currentTime) return 1;else return 0;\n      });\n    }\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPyEuL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/IS4vc3JjL3ZpZXdzL0Rhc2hib2FyZC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL0Rhc2hib2FyZC52dWU/OThmYSJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG4gIDwhLS0gQ09OVEFJTkVSIFdJVEggVEFTS1MgLS0+XG4gIDx2LWNvbnRhaW5lcj5cbiAgICA8di1yb3cgbm8tZ3V0dGVycz5cbiAgICAgIDwhLS0gVEFTSyBDQVJEIC0tPlxuICAgICAgPHYtY29sXG4gICAgICAgIHYtZm9yPVwiKHRhc2ssIGluZGV4KSBpbiB0YXNrc1wiXG4gICAgICAgIDprZXk9XCJ0YXNrLnRpdGxlXCJcbiAgICAgICAgY29scz1cIjEyXCJcbiAgICAgICAgc209XCI0XCJcbiAgICAgID5cbiAgICAgICAgPHYtaG92ZXIgdi1zbG90PVwieyBob3ZlciB9XCI+XG4gICAgICAgICAgPHYtY2FyZCBcbiAgICAgICAgICAgIDplbGV2YXRpb249XCJob3ZlciA/IDEyIDogMlwiXG4gICAgICAgICAgICBjbGFzcz1cInBhLTIgbWEtMlwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPHYtY2FyZC10aXRsZT5cbiAgICAgICAgICAgICAgPGRpdiBcbiAgICAgICAgICAgICAgICB2LWlmPVwiIXRhc2sudGl0bGVJbnBsYWNlQ2hhbmdlXCJcbiAgICAgICAgICAgICAgICBAY2xpY2s9XCJ0YXNrLnRpdGxlSW5wbGFjZUNoYW5nZSA9IHRydWVcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge3sgdGFzay50aXRsZSB9fVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPHYtdGV4dC1maWVsZFxuICAgICAgICAgICAgICAgIHYtZWxzZVxuICAgICAgICAgICAgICAgIDp2YWx1ZT1cInRhc2sudGl0bGVcIlxuICAgICAgICAgICAgICAgIEBibHVyPVwidXBkYXRlVGl0bGUoaW5kZXgsICRldmVudClcIlxuICAgICAgICAgICAgICA+PC92LXRleHQtZmllbGQ+XG4gICAgICAgICAgICA8L3YtY2FyZC10aXRsZT5cblxuICAgICAgICAgICAgPHYtY2FyZC10ZXh0PlxuICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgdi1pZj1cIiF0YXNrLmRlc2NJbnBsYWNlQ2hhbmdlXCJcbiAgICAgICAgICAgICAgICBAY2xpY2s9XCJ0YXNrLmRlc2NJbnBsYWNlQ2hhbmdlID0gdHJ1ZVwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7eyB0YXNrLmRlc2MgfX1cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDx2LXRleHRhcmVhIFxuICAgICAgICAgICAgICAgIHYtbW9kZWw9XCJ0YXNrLmRlc2NcIlxuICAgICAgICAgICAgICAgIHYtZWxzZVxuICAgICAgICAgICAgICAgIEBibHVyPVwidGFzay5kZXNjSW5wbGFjZUNoYW5nZSA9IGZhbHNlXCJcbiAgICAgICAgICAgICAgPjwvdi10ZXh0YXJlYT5cbiAgICAgICAgICAgICAgPHYtZGl2aWRlciBjbGFzcz0nbWEtMic+PC92LWRpdmlkZXI+XG4gICAgICAgICAgICAgIDwhLS0gREFURSBXSVRIIERBVEUgUElDS0VSIE1FTlUgT04gQ0xJQ0sgLS0+IFxuICAgICAgICAgICAgICA8di1tZW51XG4gICAgICAgICAgICAgICAgcmVmPVwibWVudVwiXG4gICAgICAgICAgICAgICAgdi1tb2RlbD1cInRhc2suZGF0ZUlucGxhY2VNZW51XCJcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uPVwic2NhbGUtdHJhbnNpdGlvblwiXG4gICAgICAgICAgICAgICAgOmNsb3NlLW9uLWNvbnRlbnQtY2xpY2s9XCJmYWxzZVwiXG4gICAgICAgICAgICAgICAgb2Zmc2V0LXlcbiAgICAgICAgICAgICAgICBtYXgtd2lkdGg9XCIyOTBweFwiXG4gICAgICAgICAgICAgICAgbWluLXdpZHRoPVwiMjkwcHhcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPHRlbXBsYXRlIHYtc2xvdDphY3RpdmF0b3I9XCJ7IG9uLCBhdHRycyB9XCI+XG4gICAgICAgICAgICAgICAgICA8di1idG4gXG4gICAgICAgICAgICAgICAgICAgIHRleHQgXG4gICAgICAgICAgICAgICAgICAgIHYtb249XCJvblwiXG4gICAgICAgICAgICAgICAgICAgIHYtYmluZD1cImF0dHJzXCJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJwYS0xXCJcbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAge3sgc2hvd0RheXNUb1Rhc2sodGFzay50aW1lKSB9fSxcbiAgICAgICAgICAgICAgICAgIDwvdi1idG4+ICBcbiAgICAgICAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICAgICAgICAgIDx2LWRhdGUtcGlja2VyXG4gICAgICAgICAgICAgICAgICB2LWlmPVwidGFzay5kYXRlSW5wbGFjZU1lbnVcIlxuICAgICAgICAgICAgICAgICAgdi1tb2RlbD1cInRhc2suZnJpZW5kbHlEYXRlXCJcbiAgICAgICAgICAgICAgICAgIGZ1bGwtd2lkdGhcbiAgICAgICAgICAgICAgICAgIEBpbnB1dD1cInVwZGF0ZVRhc2tEYXRlKGluZGV4LCB0YXNrLmZyaWVuZGx5RGF0ZSlcIlxuICAgICAgICAgICAgICAgID48L3YtZGF0ZS1waWNrZXI+XG4gICAgICAgICAgICAgIDwvdi1tZW51PlxuICAgICAgICAgICAgICA8IS0tIFRJTUUgV0lUSCBUSU1FIFBJQ0tFUiBNRU5VIE9OIENMSUNLIC0tPiBcbiAgICAgICAgICAgICAgPHYtbWVudVxuICAgICAgICAgICAgICAgIHJlZj1cIm1lbnVcIlxuICAgICAgICAgICAgICAgIHYtbW9kZWw9XCJ0YXNrLnRpbWVJbnBsYWNlTWVudVwiXG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbj1cInNjYWxlLXRyYW5zaXRpb25cIlxuICAgICAgICAgICAgICAgIDpjbG9zZS1vbi1jb250ZW50LWNsaWNrPVwiZmFsc2VcIlxuICAgICAgICAgICAgICAgIG9mZnNldC15XG4gICAgICAgICAgICAgICAgbWF4LXdpZHRoPVwiMjkwcHhcIlxuICAgICAgICAgICAgICAgIG1pbi13aWR0aD1cIjI5MHB4XCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDx0ZW1wbGF0ZSB2LXNsb3Q6YWN0aXZhdG9yPVwieyBvbiwgYXR0cnMgfVwiPlxuICAgICAgICAgICAgICAgICAgPHYtYnRuIFxuICAgICAgICAgICAgICAgICAgICBjbGFzcz1cInBhLTFcIlxuICAgICAgICAgICAgICAgICAgICB0ZXh0IFxuICAgICAgICAgICAgICAgICAgICB2LW9uPVwib25cIlxuICAgICAgICAgICAgICAgICAgICB2LWJpbmQ9XCJhdHRyc1wiXG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIGdvZHppbmEge3sgdGFzay5mcmllbmRseVRpbWUgfX1cbiAgICAgICAgICAgICAgICAgIDwvdi1idG4+ICBcbiAgICAgICAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICAgICAgICAgIDx2LXRpbWUtcGlja2VyXG4gICAgICAgICAgICAgICAgICB2LWlmPVwidGFzay50aW1lSW5wbGFjZU1lbnVcIlxuICAgICAgICAgICAgICAgICAgdi1tb2RlbD1cInRhc2suZnJpZW5kbHlUaW1lXCJcbiAgICAgICAgICAgICAgICAgIGZ1bGwtd2lkdGhcbiAgICAgICAgICAgICAgICAgIGZvcm1hdD1cIjI0aHJcIlxuICAgICAgICAgICAgICAgICAgQGNsaWNrOm1pbnV0ZT1cInVwZGF0ZVRhc2tUaW1lKGluZGV4LCB0YXNrLmZyaWVuZGx5VGltZSlcIlxuICAgICAgICAgICAgICAgID48L3YtdGltZS1waWNrZXI+XG4gICAgICAgICAgICAgIDwvdi1tZW51PlxuXG4gICAgICAgICAgICA8L3YtY2FyZC10ZXh0PlxuICAgICAgICAgICAgXG4gICAgICAgICAgICA8di1jYXJkLWFjdGlvbnM+XG4gICAgICAgICAgICAgIDx2LWJ0blxuICAgICAgICAgICAgICAgIHYtc2hvdz1cImhvdmVyXCJcbiAgICAgICAgICAgICAgICBpY29uXG4gICAgICAgICAgICAgICAgQGNsaWNrPVwiZGVsZXRlVGFzayhpbmRleClcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPHYtaWNvbj5tZGktZGVsZXRlPC92LWljb24+XG4gICAgICAgICAgICAgIDwvdi1idG4+XG4gICAgICAgICAgICAgIDx2LXNwYWNlcj48L3Ytc3BhY2VyPlxuICAgICAgICAgICAgICA8di1idG5cbiAgICAgICAgICAgICAgICB2LXNob3c9XCJob3ZlclwiXG4gICAgICAgICAgICAgICAgaWNvblxuICAgICAgICAgICAgICAgIEBjbGljaz1cImFyY2hpdmVUYXNrKGluZGV4KVwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8di1pY29uPm1kaS1jaGVjazwvdi1pY29uPlxuICAgICAgICAgICAgICA8L3YtYnRuPlxuICAgICAgICAgICAgPC92LWNhcmQtYWN0aW9ucz5cbiAgICAgICAgICA8L3YtY2FyZD5cbiAgICAgICAgPC92LWhvdmVyPlxuICAgICAgPC92LWNvbD5cbiAgICA8L3Ytcm93PlxuXG4gIDwhLS0gTkVXIFRBU0sgT1ZFUkxBWSAtLT5cbiAgPHYtb3ZlcmxheVxuICAgIDp2YWx1ZT1cIm92ZXJsYXlcIlxuICAgIHotaW5kZXg9XCIwXCJcbiAgPlxuICAgIDx2LWNhcmRcbiAgICAgIGNlbnRlclxuICAgICAgY2xhc3M9XCJwYS0yXCJcbiAgICA+XG4gICAgICA8di1jYXJkLXRpdGxlPk5vd2UgemFkYW5pZTwvdi1jYXJkLXRpdGxlPlxuXG4gICAgICA8di1jYXJkLXRleHQ+XG4gICAgICAgIDx2LWZvcm0+XG4gICAgICAgICAgPHYtdGV4dC1maWVsZCBcbiAgICAgICAgICAgIHYtbW9kZWw9XCJ0YXNrVGl0bGVcIlxuICAgICAgICAgICAgOmVycm9yLW1lc3NhZ2VzPVwidGFza1RpdGxlRXJyb3JzXCJcbiAgICAgICAgICAgIGxhYmVsPVwiVHl0dcWCXCJcbiAgICAgICAgICAgIHByZXBlbmQtaWNvbj1cIm1kaS1mb3JtYXQtdGl0bGVcIlxuICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgIEBpbnB1dD1cIiR2LnRhc2tUaXRsZS4kdG91Y2goKVwiXG4gICAgICAgICAgICBAYmx1cj1cIiR2LnRhc2tUaXRsZS4kdG91Y2goKVwiXG4gICAgICAgICAgPjwvdi10ZXh0LWZpZWxkPlxuXG4gICAgICAgICAgPHYtdGV4dGFyZWEgXG4gICAgICAgICAgICB2LW1vZGVsPVwidGFza0Rlc2NcIlxuICAgICAgICAgICAgbGFiZWw9XCJPcGlzXCIgXG4gICAgICAgICAgICBwcmVwZW5kLWljb249XCJtZGktc3VidGl0bGVzLW91dGxpbmVcIlxuICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgIHNjcm9sbGFibGVcbiAgICAgICAgICA+PC92LXRleHRhcmVhPlxuICAgICAgICA8L3YtZm9ybT5cblxuICAgICAgICA8di1tZW51XG4gICAgICAgICAgcmVmPVwibWVudVwiXG4gICAgICAgICAgdi1tb2RlbD1cInRpbWVQaWNrTWVudVwiXG4gICAgICAgICAgdHJhbnNpdGlvbj1cInNjYWxlLXRyYW5zaXRpb25cIlxuICAgICAgICAgIDpjbG9zZS1vbi1jb250ZW50LWNsaWNrPVwiZmFsc2VcIlxuICAgICAgICAgIG9mZnNldC15XG4gICAgICAgICAgbWF4LXdpZHRoPVwiMjkwcHhcIlxuICAgICAgICAgIG1pbi13aWR0aD1cIjI5MHB4XCJcbiAgICAgICAgPlxuICAgICAgICAgIDx0ZW1wbGF0ZSB2LXNsb3Q6YWN0aXZhdG9yPVwieyBvbiwgYXR0cnMgfVwiPlxuICAgICAgICAgICAgPHYtdGV4dC1maWVsZFxuICAgICAgICAgICAgICB2LW1vZGVsPVwidGFza0ZyaWVuZGx5VGltZVwiXG4gICAgICAgICAgICAgIGxhYmVsPVwiR29kemluYVwiXG4gICAgICAgICAgICAgIHByZXBlbmQtaWNvbj1cIm1kaS1jbG9jay10aW1lLWZvdXItb3V0bGluZVwiXG4gICAgICAgICAgICAgIHJlYWRvbmx5XG4gICAgICAgICAgICAgIHYtYmluZD1cImF0dHJzXCJcbiAgICAgICAgICAgICAgdi1vbj1cIm9uXCJcbiAgICAgICAgICAgID48L3YtdGV4dC1maWVsZD4gIFxuICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgICAgPHYtdGltZS1waWNrZXJcbiAgICAgICAgICAgIHYtaWY9XCJ0aW1lUGlja01lbnVcIlxuICAgICAgICAgICAgdi1tb2RlbD1cInRhc2tGcmllbmRseVRpbWVcIlxuICAgICAgICAgICAgZnVsbC13aWR0aFxuICAgICAgICAgICAgZm9ybWF0PVwiMjRoclwiXG4gICAgICAgICAgICBAY2xpY2s6bWludXRlPVwidGltZVBpY2tNZW51ID0gZmFsc2VcIlxuICAgICAgICAgID48L3YtdGltZS1waWNrZXI+XG4gICAgICAgIDwvdi1tZW51PlxuXG4gICAgICAgIDx2LW1lbnVcbiAgICAgICAgICByZWY9XCJtZW51XCJcbiAgICAgICAgICB2LW1vZGVsPVwiZGF0ZVBpY2tNZW51XCJcbiAgICAgICAgICB0cmFuc2l0aW9uPVwic2NhbGUtdHJhbnNpdGlvblwiXG4gICAgICAgICAgOmNsb3NlLW9uLWNvbnRlbnQtY2xpY2s9XCJmYWxzZVwiXG4gICAgICAgICAgb2Zmc2V0LXlcbiAgICAgICAgICBtYXgtd2lkdGg9XCIyOTBweFwiXG4gICAgICAgICAgbWluLXdpZHRoPVwiMjkwcHhcIlxuICAgICAgICA+XG4gICAgICAgICAgPHRlbXBsYXRlIHYtc2xvdDphY3RpdmF0b3I9XCJ7IG9uLCBhdHRycyB9XCI+XG4gICAgICAgICAgICA8di10ZXh0LWZpZWxkXG4gICAgICAgICAgICAgIHYtbW9kZWw9XCJ0YXNrRnJpZW5kbHlEYXRlXCJcbiAgICAgICAgICAgICAgbGFiZWw9XCJEYXRhXCJcbiAgICAgICAgICAgICAgcHJlcGVuZC1pY29uPVwibWRpLWNhbGVuZGFyXCJcbiAgICAgICAgICAgICAgcmVhZG9ubHlcbiAgICAgICAgICAgICAgdi1iaW5kPVwiYXR0cnNcIlxuICAgICAgICAgICAgICB2LW9uPVwib25cIlxuICAgICAgICAgICAgPjwvdi10ZXh0LWZpZWxkPiAgXG4gICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgICA8di1kYXRlLXBpY2tlclxuICAgICAgICAgICAgdi1pZj1cImRhdGVQaWNrTWVudVwiXG4gICAgICAgICAgICB2LW1vZGVsPVwidGFza0ZyaWVuZGx5RGF0ZVwiXG4gICAgICAgICAgICBmdWxsLXdpZHRoXG4gICAgICAgICAgICBAaW5wdXQ9XCJkYXRlUGlja01lbnUgPSBmYWxzZVwiXG4gICAgICAgICAgPjwvdi1kYXRlLXBpY2tlcj5cbiAgICAgICAgPC92LW1lbnU+XG4gICAgICA8L3YtY2FyZC10ZXh0PlxuXG4gICAgICA8di1jYXJkLWFjdGlvbnM+XG4gICAgICAgIDx2LWJ0blxuICAgICAgICAgIHRleHRcbiAgICAgICAgICBAY2xpY2s9XCJjYW5jZWxUYXNrQWRkaW5nKClcIlxuICAgICAgICA+YW51bHVqPC92LWJ0bj5cbiAgICAgICAgPHYtc3BhY2VyPjwvdi1zcGFjZXI+XG4gICAgICAgIDx2LWJ0blxuICAgICAgICAgIHRleHRcbiAgICAgICAgICBAY2xpY2s9XCJzYXZlVGFzaygpXCJcbiAgICAgICAgPmRvZGFqPC92LWJ0bj5cbiAgICAgIDwvdi1jYXJkLWFjdGlvbnM+XG4gICAgPC92LWNhcmQ+XG4gIDwvdi1vdmVybGF5PlxuXG4gIDwhLS0gTkVXIFRBU0sgRkxPQVRJTkcgQlVUVE9OIC0tPlxuICA8di1idG5cbiAgICBjb2xvcj1cInBpbmtcIlxuICAgIGZhYlxuICAgIGZpeGVkXG4gICAgcmlnaHRcbiAgICBib3R0b21cbiAgICBAY2xpY2s9XCJvcGVuT3ZlcmxheSgpXCJcbiAgPlxuICAgIDx2LWljb24+bWRpLXBsdXM8L3YtaWNvbj5cbiAgPC92LWJ0bj5cbiAgPC92LWNvbnRhaW5lcj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5cbmltcG9ydCB7IHZhbGlkYXRpb25NaXhpbiB9IGZyb20gJ3Z1ZWxpZGF0ZSdcbmltcG9ydCB7IHJlcXVpcmVkIH0gZnJvbSAndnVlbGlkYXRlL2xpYi92YWxpZGF0b3JzJ1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIG5hbWU6ICdBcHAnLFxuXG4gIG1peGluczogW3ZhbGlkYXRpb25NaXhpbl0sXG5cbiAgY29tcHV0ZWQ6IHtcbiAgICB0YXNrVGl0bGVFcnJvcnMoKSB7XG4gICAgICBjb25zdCBlcnJvcnMgPSBbXVxuICAgICAgICBpZiAoIXRoaXMuJHYudGFza1RpdGxlLiRkaXJ0eSkgcmV0dXJuIGVycm9yc1xuICAgICAgICAhdGhpcy4kdi50YXNrVGl0bGUucmVxdWlyZWQgJiYgZXJyb3JzLnB1c2goJ1BvbGUgd3ltYWdhbmUnKVxuICAgICAgcmV0dXJuIGVycm9yc1xuICAgIH1cbiAgfSxcblxuICB2YWxpZGF0aW9uczoge1xuICAgIHRhc2tUaXRsZTogeyByZXF1aXJlZCB9LFxuICB9LFxuXG4gIGRhdGE6ICgpID0+ICh7XG4gICAgb3ZlcmxheTogZmFsc2UsXG5cbiAgICB0aW1lUGlja01lbnU6IGZhbHNlLFxuICAgIGRhdGVQaWNrTWVudTogZmFsc2UsXG5cbiAgICB0YXNrRnJpZW5kbHlUaW1lOiAnMTA6MDAnLFxuICAgIHRhc2tGcmllbmRseURhdGU6ICcyMDIxLTA5LTA5JyxcbiAgICB0YXNrVGltZTogbnVsbCxcbiAgICB0YXNrVGl0bGU6ICcnLFxuICAgIHRhc2tEZXNjOiAnJyxcblxuXG4gICAgdGFza3M6IFt7XG4gICAgICB0aW1lOiBuZXcgRGF0ZSgpLFxuICAgICAgZnJpZW5kbHlUaW1lOiAnMTA6MTAnLFxuICAgICAgZnJpZW5kbHlEYXRlOiAnMjAyMS0wOS0xMicsXG5cbiAgICAgIHRpdGxlOiAnTmFnbG93ZWsnLFxuICAgICAgZGVzYzogJ1RvIGplc3QgcGlla255IG9waXMnLFxuXG4gICAgICB0aW1lSW5wbGFjZU1lbnU6IGZhbHNlLFxuICAgICAgZGF0ZUlucGxhY2VNZW51OiBmYWxzZSxcbiAgICAgIHRpdGxlSW5wbGFjZUNoYW5nZTogZmFsc2UsXG4gICAgICBkZXNjSW5wbGFjZUNoYW5nZTogZmFsc2UsXG4gICAgfV0sXG4gICAgZG9uZVRhc2tzOiBbXSxcbiAgfSksXG4gIG1ldGhvZHM6IHtcbiAgICBvcGVuT3ZlcmxheSgpIHtcbiAgICAgIHRoaXMub3ZlcmxheSA9IHRydWVcblxuICAgICAgY29uc29sZS5sb2codGhpcy4kc3RvcmUuc3RhdGUuY3NyZlRva2VuKVxuXG4gICAgICBjb25zdCBjdXJyZW50VGltZSA9IG5ldyBEYXRlKClcbiAgICAgIGxldCBjdXJyZW50SG91cnMgPSAnJ1xuICAgICAgbGV0IGN1cnJlbnRNaW51dGVzID0gJydcbiAgICAgIGxldCBjdXJyZW50TW9udGggPSAnJ1xuICAgICAgbGV0IGN1cnJlbnREYXkgPSAnJ1xuXG4gICAgICBpZiAoY3VycmVudFRpbWUuZ2V0TWludXRlcygpIDwgMTApIGN1cnJlbnRNaW51dGVzID0gJzAnICsgY3VycmVudFRpbWUuZ2V0TWludXRlcygpXG4gICAgICBlbHNlIGN1cnJlbnRNaW51dGVzID0gY3VycmVudFRpbWUuZ2V0TWludXRlcygpXG4gICAgICBpZiAoY3VycmVudFRpbWUuZ2V0SG91cnMoKSA8IDEwKSBjdXJyZW50SG91cnMgPSAnMCcgKyBjdXJyZW50VGltZS5nZXRIb3VycygpXG4gICAgICBlbHNlIGN1cnJlbnRIb3VycyA9IGN1cnJlbnRUaW1lLmdldEhvdXJzKClcbiAgICAgIGlmIChjdXJyZW50VGltZS5nZXRNb250aCgpIDwgOSkgY3VycmVudE1vbnRoID0gJzAnICsgKGN1cnJlbnRUaW1lLmdldE1vbnRoKCkgKyAxKVxuICAgICAgZWxzZSBjdXJyZW50TW9udGggPSAoY3VycmVudFRpbWUuZ2V0TW9udGgoKSArIDEpXG4gICAgICBpZiAoY3VycmVudFRpbWUuZ2V0RGF0ZSgpIDwgMTApIGN1cnJlbnREYXkgPSAnMCcgKyBjdXJyZW50VGltZS5nZXREYXRlKClcbiAgICAgIGVsc2UgY3VycmVudERheSA9IGN1cnJlbnRUaW1lLmdldERhdGUoKVxuXG4gICAgICB0aGlzLnRhc2tGcmllbmRseVRpbWUgPSBjdXJyZW50SG91cnMgKyBcIjpcIiArIGN1cnJlbnRNaW51dGVzXG4gICAgICB0aGlzLnRhc2tGcmllbmRseURhdGUgPSBjdXJyZW50VGltZS5nZXRGdWxsWWVhcigpICsgXCItXCIgKyBjdXJyZW50TW9udGggKyBcIi1cIiArIGN1cnJlbnREYXlcbiAgICB9LFxuICAgIHNob3dEYXlzVG9UYXNrKHRhc2tUaW1lKSB7XG4gICAgICBjb25zdCBjdXJyZW50VGltZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpXG5cbiAgICAgIGNvbnN0IHRpbWVUb1Rhc2sgPSB0YXNrVGltZS5nZXRUaW1lKCkgLSBjdXJyZW50VGltZVxuICAgICAgbGV0IG5leHREYXkgPSBuZXcgRGF0ZSh0YXNrVGltZSlcbiAgICAgIG5leHREYXkuc2V0RGF0ZSh0YXNrVGltZS5nZXREYXRlKCkgKyAxKVxuICAgICAgbmV4dERheS5zZXRNaW51dGVzKDApXG4gICAgICBuZXh0RGF5LnNldEhvdXJzKDApXG4gICAgICBjb25zdCB0aW1lVG9FbmRPZkRheSA9IG5leHREYXkuZ2V0VGltZSgpIC0gdGFza1RpbWUuZ2V0VGltZSgpXG4gICAgICBcbiAgICAgIGNvbnN0IGRheXNUb1Rhc2sgPSBNYXRoLmZsb29yKHRpbWVUb1Rhc2sgLyAoMjQqNjAqNjAqMTAwMCkpXG5cbiAgICAgIGlmICh0aW1lVG9UYXNrIDwgMCkge1xuICAgICAgICByZXR1cm4gXCJzcMOzxbpuaW9uZVwiXG4gICAgICB9IGVsc2UgaWYgKGRheXNUb1Rhc2sgPT0gMCAmJiAodGltZVRvRW5kT2ZEYXkgPiB0aW1lVG9UYXNrKSkge1xuICAgICAgICByZXR1cm4gXCJkemlzaWFqXCJcbiAgICAgIH0gZWxzZSBpZiAoKGRheXNUb1Rhc2sgPT0gMSAmJiAodGltZVRvRW5kT2ZEYXkgPCAodGltZVRvVGFzayAtICgyNCo2MCo2MCoxMDAwKSkpKSB8fCAoZGF5c1RvVGFzayA9PSAwKSkge1xuICAgICAgICByZXR1cm4gXCJqdXRyb1wiXG4gICAgICB9IGVsc2UgaWYgKGRheXNUb1Rhc2sgPT0gMSkge1xuICAgICAgICByZXR1cm4gXCJ6YSAyIGRuaVwiXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gXCJ6YSBcIiArIGRheXNUb1Rhc2sgKyBcIiBkbmlcIlxuICAgICAgfVxuICAgIH0sXG4gICAgc2F2ZVRhc2soKSB7XG4gICAgICB0aGlzLiR2LiR0b3VjaCgpXG4gICAgICBpZiAoIXRoaXMuJHYuJGludmFsaWQpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJGcmllbmRseSBEYXRlOiBcIiArIHRoaXMudGFza0ZyaWVuZGx5RGF0ZSlcbiAgICAgICAgbGV0IHRhc2tUaW1lID0gbmV3IERhdGUoKVxuICAgICAgICB0YXNrVGltZS5zZXRGdWxsWWVhcih0aGlzLnRhc2tGcmllbmRseURhdGUuc3Vic3RyKDAsIDQpKVxuICAgICAgICB0YXNrVGltZS5zZXRNb250aChwYXJzZUludCh0aGlzLnRhc2tGcmllbmRseURhdGUuc3Vic3RyKDUsIDIpKSAtIDEpXG4gICAgICAgIHRhc2tUaW1lLnNldERhdGUodGhpcy50YXNrRnJpZW5kbHlEYXRlLnN1YnN0cig4LCAyKSlcbiAgICAgICAgdGFza1RpbWUuc2V0SG91cnModGhpcy50YXNrRnJpZW5kbHlUaW1lLnN1YnN0cigwLCAyKSlcbiAgICAgICAgdGFza1RpbWUuc2V0TWludXRlcyh0aGlzLnRhc2tGcmllbmRseVRpbWUuc3Vic3RyKDMsIDIpKVxuXG4gICAgICAgIHRoaXMudGFza3MucHVzaCh7XG4gICAgICAgICAgdGltZTogdGFza1RpbWUsIFxuICAgICAgICAgIGZyaWVuZGx5VGltZTogdGhpcy50YXNrRnJpZW5kbHlUaW1lLFxuICAgICAgICAgIGZyaWVuZGx5RGF0ZTogdGhpcy50YXNrRnJpZW5kbHlEYXRlLFxuICAgICAgICAgIHRpdGxlOiB0aGlzLnRhc2tUaXRsZSwgXG4gICAgICAgICAgZGVzYzogdGhpcy50YXNrRGVzY1xuICAgICAgICB9KVxuICAgICAgICB0aGlzLm92ZXJsYXkgPSBmYWxzZVxuICAgICAgICB0aGlzLnRhc2tUaXRsZSA9ICcnXG4gICAgICAgIHRoaXMudGFza0Rlc2MgPSAnJ1xuXG4gICAgICAgIHRoaXMuc29ydFRhc2tzKClcbiAgICAgIH1cbiAgICB9LFxuICAgIHVwZGF0ZVRhc2tUaW1lKGluZGV4LCBmcmllbmRseVRpbWUpIHtcbiAgICAgIGxldCB0YXNrVGltZSA9IHRoaXMudGFza3NbaW5kZXhdLnRpbWVcbiAgICAgIHRhc2tUaW1lLnNldEhvdXJzKGZyaWVuZGx5VGltZS5zdWJzdHIoMCwgMikpXG4gICAgICB0YXNrVGltZS5zZXRNaW51dGVzKGZyaWVuZGx5VGltZS5zdWJzdHIoMywgMikpXG5cbiAgICAgIHRoaXMudGFza3NbaW5kZXhdLnRpbWUgPSB0YXNrVGltZVxuICAgICAgdGhpcy50YXNrc1tpbmRleF0udGltZUlucGxhY2VNZW51ID0gZmFsc2VcblxuICAgICAgdGhpcy5zb3J0VGFza3MoKVxuICAgIH0sXG4gICAgdXBkYXRlVGFza0RhdGUoaW5kZXgsIGZyaWVuZGx5RGF0ZSkge1xuICAgICAgbGV0IHRhc2tUaW1lID0gdGhpcy50YXNrc1tpbmRleF0udGltZVxuICAgICAgdGFza1RpbWUuc2V0RnVsbFllYXIoZnJpZW5kbHlEYXRlLnN1YnN0cigwLCA0KSlcbiAgICAgIHRhc2tUaW1lLnNldE1vbnRoKHBhcnNlSW50KGZyaWVuZGx5RGF0ZS5zdWJzdHIoNSwgMikpIC0gMSlcbiAgICAgIHRhc2tUaW1lLnNldERhdGUoZnJpZW5kbHlEYXRlLnN1YnN0cig4LCAyKSlcbiAgICAgIFxuICAgICAgdGhpcy50YXNrc1tpbmRleF0udGltZSA9IHRhc2tUaW1lXG4gICAgICB0aGlzLnRhc2tzW2luZGV4XS5kYXRlSW5wbGFjZU1lbnUgPSBmYWxzZVxuXG4gICAgICB0aGlzLnNvcnRUYXNrcygpXG4gICAgfSxcbiAgICB1cGRhdGVUaXRsZShpbmRleCwgZXZlbnQpIHtcbiAgICAgIHRoaXMudGFza3NbaW5kZXhdLnRpdGxlID0gZXZlbnQudGFyZ2V0LnZhbHVlXG4gICAgICB0aGlzLnRhc2tzW2luZGV4XS50aXRsZUlucGxhY2VDaGFuZ2UgPSBmYWxzZVxuXG4gICAgICB0aGlzLnNvcnRUYXNrcygpXG4gICAgfSxcbiAgICBjYW5jZWxUYXNrQWRkaW5nKCkge1xuICAgICAgdGhpcy5vdmVybGF5ID0gZmFsc2VcbiAgICAgIHRoaXMudGFza1RpdGxlID0gJydcbiAgICAgIHRoaXMudGFza0Rlc2MgPSAnJ1xuICAgIH0sXG4gICAgZGVsZXRlVGFzayhpbmRleCkge1xuICAgICAgdGhpcy50YXNrcy5zcGxpY2UoaW5kZXgsIDEpXG4gICAgICB0aGlzLnNvcnRUYXNrcygpXG4gICAgfSxcbiAgICBhcmNoaXZlVGFzayhpbmRleCkge1xuICAgICAgdGhpcy5kb25lVGFza3MucHVzaCh0aGlzLnRhc2tzLnNwbGljZShpbmRleCwgMSkpXG4gICAgICB0aGlzLnNvcnRUYXNrcygpXG4gICAgfSxcbiAgICBzb3J0VGFza3MoKSB7XG4gICAgICBjb25zdCBjdXJyZW50VGltZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpXG4gICAgICB0aGlzLnRhc2tzLnNvcnQoKGEsIGIpID0+IHtcbiAgICAgICAgY29uc3QgYVRpbWUgPSBhLnRpbWUuZ2V0VGltZSgpXG4gICAgICAgIGNvbnN0IGJUaW1lID0gYi50aW1lLmdldFRpbWUoKVxuICAgICAgICBpZiAoYVRpbWUgLSBjdXJyZW50VGltZSA8IGJUaW1lIC0gY3VycmVudFRpbWUpIHJldHVybiAtMVxuICAgICAgICBlbHNlIGlmIChhVGltZSAtIGN1cnJlbnRUaW1lID4gYlRpbWUgLSBjdXJyZW50VGltZSkgcmV0dXJuIDFcbiAgICAgICAgZWxzZSByZXR1cm4gMFxuICAgICAgfSlcbiAgICB9XG4gIH1cbn07XG48L3NjcmlwdD5cblxuPHN0eWxlIHNjb3BlZD5cbjwvc3R5bGU+Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBaVBBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBU0E7QUFDQTtBQUFBO0FBQUE7QUFEQTtBQUlBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFYQTtBQWFBO0FBMUJBO0FBQUE7QUE0QkE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUVBO0FBRUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQU9BO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBMUhBO0FBOUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/Dashboard.vue?vue&type=script&lang=js&\n");

/***/ })

})