<template>
  <div class="col-sm-12">
      <h3>Events Dashboard</h3>
      <button class="btn btn-danger btn-sm" @click="signOut">Sign Out</button>
      <br>
      <br>
      <AddEvent />
      <br>
      <br>
      <div class="col-md-12">
        <EventItem
          v-for="(eventItem, index) in this.$store.state.events"
          :eventing="eventItem"
          key="index"
        />
      </div>
  </div>
</template>
<script>
  import { firebaseApp, eventsRef } from '../firebaseApp'
  import AddEvent from './AddEvent.vue'
  import EventItem from './EventItem.vue'
  export default {
  methods: {
    signOut() {
      this.$store.dispatch('signOutRush')
      firebaseApp.auth().signOut()
    }
  },
  components: {
    AddEvent,
    EventItem
  },
  mounted() {
    eventsRef.on('value', snap => {
      let event_programs = []
      snap.forEach(event => {
        event_programs.push(event.val())
      })
      this.$store.dispatch('setEventsRush', event_programs)
    })
  }
}
</script>