import Vue from 'vue'
import Bootstrap from 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import store from './vuex.js'
import App from './App.vue'
Vue.use(Bootstrap)
new Vue({
  el: '#app',
  store,
  render: h => h(App),
})
