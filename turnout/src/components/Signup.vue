<template>
  <div class="col-sm-offset-4">
      <div class="col-sm-6">
      <h3>Sign Up Form</h3>
        <div class="form-group">
          <label for="email">Email address:</label>
          <input type="email" class="form-control" placeholder="email" v-model="email">{{email}}
        </div>
        <div class="form-group">
          <label for="pwd">Password:</label>
          <input type="password" class="form-control" placeholder="password" v-model="password">
        </div>
        <br>
          <p>{{ error.message }}</p>
        <button class="btn btn-primary" @click="signUp">Sign Up</button>
        <br>
        <br>
        <router-link to="/signin">Already a user? Sign In!</router-link>
    </div>
  </div>
</template>

<script>
import { firebaseApp } from '../firebaseApp'
export default {
  data () {
    return {
      email: '',
      password: '',
      error: {
        message: ''
      }
    }
  },
  methods: {
    signUp() {
      firebaseApp.auth().createUserWithEmailAndPassword(this.email, this.password)
        .catch(error => {
          this.error = error
        })
    }
  }
}
</script>