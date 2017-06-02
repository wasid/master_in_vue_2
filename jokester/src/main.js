import Vue from 'vue'
import App from './components/App.vue'
import store from './store'

store.commit('INIT_JOKES', [{test: 'test jokes'}, {test2: 'test jokes 2'}])

new Vue({
  el: '#app',
  store,
  render: h => h(App)
})
