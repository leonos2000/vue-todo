<template>
  <v-container>
    <v-card
      v-if="showRegisterCard == 0"
      width="400"
      class="mx-auto mt-5"
    >
      <v-card-title>
          <h1>Login</h1>
      </v-card-title>
      <v-card-text>
        <v-form>
          <v-text-field 
            label="Username"
            v-model="username"
            prepend-icon="mdi-account-circle"
          />
          <v-text-field 
            :type="showPassword ? 'text' : 'password'" 
            v-model="password"
            label="Password"
            prepend-icon="mdi-lock"
            :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
            @click:append="showPassword = !showPassword"
          />
        </v-form>
      </v-card-text>
      <v-divider/>
      <v-card-actions>
        <v-btn 
          color="success"
          @click="showRegisterCard = 1"
        >
          Register
        </v-btn>
        <v-spacer/>
        <v-btn 
          color="info"
          @click="submitLogin(username, password)"
        >
          Login
        </v-btn>
      </v-card-actions>
    </v-card>

    <v-card
      v-else-if="showRegisterCard == 1"
      width="400"
      class="mx-auto mt-5"
    >
      <v-card-title>
          <h1>Register</h1>
      </v-card-title>
      <v-card-text>
        <v-form>
          <v-text-field 
            label="Username"
            v-model="username"
            prepend-icon="mdi-account-circle"
            required
            @input="usernameChanged()"
            @blur="usernameChanged()"
            :error-messages="usernameErrors"
          />
          <v-text-field 
            label="Email"
            v-model="email"
            prepend-icon="mdi-email"
            @input="emailChanged()"
            @blur="emailChanged()"
            :error-messages="emailErrors"
          />
          <v-text-field 
            :type="showPassword ? 'text' : 'password'" 
            v-model="password"
            label="Password"
            prepend-icon="mdi-lock"
            :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
            @click:append="showPassword = !showPassword"
            @input="$v.password.$touch()"
            @blur="$v.password.$touch()"
            :error-messages="passwordErrors"
          />
          <v-text-field 
            :type="showRePassword ? 'text' : 'password'" 
            v-model="rePassword"
            label="Retype password"
            prepend-icon="mdi-lock"
            :append-icon="showRePassword ? 'mdi-eye' : 'mdi-eye-off'"
            @click:append="showRePassword = !showRePassword"
            @input="$v.rePassword.$touch()"
            @blur="$v.rePassword.$touch()"
            :error-messages="rePasswordErrors"
          />
        </v-form>
      </v-card-text>
      <v-divider/>
      <v-card-actions>
        <v-btn 
          color="info"
          @click="showRegisterCard = 0"
        >
          Login
        </v-btn>
        <v-spacer/>
        <v-btn 
          color="success"
          @click="submitRegister(username, email, password)"
        >
          Register
        </v-btn>
      </v-card-actions>
    </v-card>

    <v-snackbar
      v-model="snackbar"
      :color="snackbarColor"
    >
    {{ snackbarMessage }}
      <template v-slot:action="{ attrs }">
        <v-btn
          color="primary"
          text
          v-bind="attrs"
          @click="snackbar = false"
        >
          OK
        </v-btn>
      </template>
    </v-snackbar>

  </v-container>
</template>

<script>

import { validationMixin } from 'vuelidate'
import { required, minLength, maxLength, email, sameAs, helpers } from 'vuelidate/lib/validators'

const containSmallLetter = helpers.regex('containSmallLetter', /^.*[a-z]+.*$/)
const containBigLetter = helpers.regex('containBigLetter', /^.*[A-Z]+.*$/)
const containDigit = helpers.regex('containDigit', /^.*[0-9]+.*$/)
const containSpecialChar = helpers.regex('containSpecialChar', /^.*[~`!@#$%^&*()_\-+={}":;,.'[/|\]?]+.*$/)

export default {
  mixins: [validationMixin],

  mounted() {
    if (this.$store.state.pageType == 'successfullyActivated') {
      this.snackbarMessage = 'Succesfully activated! Now you can log in'
      this.snackbarColor = 'success'
      this.snackbar = true
    } else if (this.$store.state.pageType == 'badActivationLink') {
      this.snackbarMessage = 'Bad activation link'
      this.snackbarColor = 'error'
      this.snackbar = true
    } else if (this.$store.state.pageType == 'alreadyActivated') {
      this.snackbarMessage = 'Account already activated'
      this.snackbarColor = 'warning'
      this.snackbar = true
    }
  },

  data() {
    return {
      showPassword: false,
      showRePassword: false,
      showRegisterCard: 0,

      username: null,
      email: null,
      password: null,
      rePassword: null,

      usernameExists: false,
      emailExists: false,

      snackbar: false,
      snackbarMessage: '',
      snackbarColor: 'info',
    }
  },

  computed: {
    usernameErrors() {
      if (this.$v.username.$dirty) {
        if (!this.$v.username.required) return 'Pole wymagane'
        else if (!this.$v.username.minLength) return 'Minimum 4 znaki'
        else if (!this.$v.username.maxLength) return 'Maksimum 20 znaków'
        else if (!this.$v.username.usernameExistsValidate) return 'Username already exists'
      }
      return null
    },
    emailErrors() {
      if (this.$v.email.$dirty) {
        if (!this.$v.email.required) return 'Pole wymagane'
        else if (!this.$v.email.email) return 'Podaj prawidłowy email'
        else if (!this.$v.email.emailExistsValidate) return 'Email already exists'
      }
      return null
    },
    passwordErrors() {
      if (this.$v.password.$dirty) {
        if (!this.$v.password.required) return 'Pole wymagane'
        else if (!this.$v.password.minLength) return 'Minimum 8 znaków'
        else if (!this.$v.password.containSmallLetter) return 'Minimum jedna mała litera'
        else if (!this.$v.password.containBigLetter) return 'Minimum jedna duża litera'
        else if (!this.$v.password.containDigit) return 'Minimum jedna cyfra'
        else if (!this.$v.password.containSpecialChar) return 'Minimum jeden znak specjalny'
        else if (!this.$v.password.maxLength) return 'Maksimum 25 znaków'
      }
      return null
    },
    rePasswordErrors() {
      if (this.$v.rePassword.$dirty) {
        if (!this.$v.rePassword.required) return 'Pole wymagane'
        else if (!this.$v.rePassword.sameAs) return 'Hasła nie zgadzają się'
      }
      return null
    }
  },

  validations: {
    username: { 
      required, 
      minLength: minLength(4), 
      maxLength: maxLength(20),
      usernameExistsValidate() {
        return !this.usernameExists
      }
    },
    email: { 
      required,
      email,
      emailExistsValidate() {
        return !this.emailExists
      }
    },
    password: { 
      required, 
      containSmallLetter,
      containBigLetter,
      containDigit,
      containSpecialChar,
      minLength: minLength(8), 
      maxLength: maxLength(25) 
    },
    rePassword: { 
      required,
      sameAs: sameAs('password')
    },
  },

  methods: {
    submitLogin(username, password) {
      let data = new FormData()

      data.append('username', username)
      data.append('password', password)
      data.append('csrfmiddlewaretoken', this.$store.state.csrfToken)

      this.axios.post('/login/login/', data)
        .then(res => alert('Form Submitted' + res))
        .catch(errors => console.log(errors))
    },
    submitRegister(username, email, password) {
      this.$v.$touch()
      if (!this.$v.$invalid) {
        let data = new FormData()

        data.append('username', username)
        data.append('email', email)
        data.append('password', password)
        data.append('csrfmiddlewaretoken', this.$store.state.csrfToken)

        this.axios.post('/login/register/', data)
          .then(res => {
            let registerStatus = res.data.status
            if (registerStatus == 'username exists') {
              this.usernameExists = true
            } else if (registerStatus == 'email exists') {
              this.emailExists = true
            } else if (registerStatus == 'success') {
              this.showRegisterCard = 0
              this.snackbarMessage = 'Activation link sent!'
              this.snackbarColor = 'info'
              this.snackbar = true
            } else {
              this.snackbarMessage = 'Internal error occured!'
              this.snackbarColor = 'error'
              this.snackbar = true
            }
          }) 
          .catch(errors => {
            console.error(errors)
            this.snackbarMessage = 'Internal error occured!'
            this.snackbarMessage = 'error'
            this.snackbar = true
          })
          .then(() => {
            this.username = null
            this.email = null
            this.password = null
            this.rePassword = null
            this.$v.$reset()
          })
      }
    },
    usernameChanged() {
      this.usernameExists = false
      this.$v.username.$touch()
    },
    emailChanged() {
      this.emailExists = false
      this.$v.email.$touch()
    },
  }
}
</script>
