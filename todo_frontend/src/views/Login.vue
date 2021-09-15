<template>
  <v-container>
    <v-card
      v-if="!showRegisterCard"
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
          @click="showRegisterCard = true"
        >
          Register
        </v-btn>
        <v-spacer/>
        <v-btn 
          color="info"
          @click="submit(username, password)"
        >
          Login
        </v-btn>
      </v-card-actions>
    </v-card>

    <v-card
      v-else
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
            @input="$v.username.$touch()"
            @blur="$v.username.$touch()"
            :error-messages="usernameErrors"
          />
          <v-text-field 
            label="Email"
            v-model="email"
            prepend-icon="mdi-email"
            @input="$v.email.$touch()"
            @blur="$v.email.$touch()"
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
          @click="showRegisterCard = false"
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
  </v-container>
</template>

<script>

import { validationMixin } from 'vuelidate'
import { required, minLength, maxLength, email, sameAs, helpers } from 'vuelidate/lib/validators'

const regexPass = helpers.regex('pass', /^.*(?=.{8,40})(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[~!@#$%^&*()_+{}":;'[\]]).*$/)

export default {
  mixins: [validationMixin],

  data() {
    return {
      showPassword: false,
      showRePassword: false,
      showRegisterCard: false,
      username: null,
      password: null,
      rePassword: null,
      email: null,
    }
  },

  computed: {
    usernameErrors() {
      const errors = []
        if (!this.$v.username.$dirty) return errors
        !this.$v.username.required && errors.push('Pole wymagane')
      return errors
    },
    emailErrors() {
      const errors = []
        if (!this.$v.email.$dirty) return errors
        !this.$v.email.required && errors.push('Pole wymagane')
      return errors
    },
    passwordErrors() {
      const errors = []
        if (!this.$v.password.$dirty) return errors
        !this.$v.password.required && errors.push('Pole wymagane')
      return errors
    },
    rePasswordErrors() {
      const errors = []
        if (!this.$v.rePassword.$dirty) return errors
        !this.$v.rePassword.required && errors.push('Pole wymagane')
      return errors
    }
  },

  validations: {
    username: { 
      required, 
      minLength: minLength(4), 
      maxLenght: maxLength(20) 
    },
    email: { 
      required,
      email
    },
    password: { 
      required, 
      regexPass
    },
    rePassword: { 
      required,
      sameAsPassword: sameAs('password')
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
      let data = new FormData()

      data.append('username', username)
      data.append('email', email)
      data.append('password', password)
      data.append('csrfmiddlewaretoken', this.$store.state.csrfToken)

      this.axios.post('/login/register/', data)
        .then(res => console.error(res.data.status))
        .catch(errors => console.log(errors))
    },
  }
}
</script>
