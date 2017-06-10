<template>
  <div class="col-sm-12">
      <h3>Events Dashboard</h3>
      <button class="btn btn-danger btn-sm" @click="signOut">Sign Out</button>
      <br>
      <br>
      <AddEvent />
      <br>
      <br>
      <div class="col-sm-12">
        {{ $store.state }}
      </div>
  </div>
</template>
<script>
  import { firebaseApp, eventsRef } from '../firebaseApp'
  import AddEvent from './AddEvent.vue'
  export default {
  methods: {
    signOut() {
      this.$store.dispatch('signOutRush')
      firebaseApp.auth().signOut()
    }
  },
  components: {
    AddEvent
  }
}
</script>