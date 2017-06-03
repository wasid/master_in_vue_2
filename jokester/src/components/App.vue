<template>
  <div id="app">
   
    <h1>Got jokes?</h1>
    <button class="btn btn-success" @click="initJokes">Add Ten Random Jokes</button>
    <br>
    <br>
    <div class="col-md-12">
      <Joke
        v-for="(joke, index) in $store.state.jokes"
        :joke="joke"
        key="index"
      />
    </div>

  </div>
</template>

<script>

import { mapActions } from 'vuex'
import Joke from './Joke.vue'

export default {
  methods: mapActions([
    'initJokes'
  ]),
  components: {
    Joke
  }
}

</script>
