<template>
  <div id="">
  <h3>Events Dashboard</h3>
    <button class="btn btn-danger btn-sm" @click="signOut">Sign Out</button>
  <hr>
    {{ $store.state }}
  </div>
</template>
<script>
  import { firebaseApp } from '../firebaseApp'
  export default {
  methods: {
    signOut() {
      this.$store.dispatch('signOutRush')
      firebaseApp.auth().signOut()
    }
  }
}
</script>