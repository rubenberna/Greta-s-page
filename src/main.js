import Vue from 'vue'
import App from './App.vue'
import router from './router'
import firebase from 'firebase'
import '../db/firebaseInit'
import store from './store'
import * as VueGoogleMaps from "vue2-google-maps"
import VueClazyLoad from 'vue-clazy-load'
import Delay from 'vue-delay'

const moment = require('moment')
require('moment/locale/nl')

Vue.use(VueClazyLoad)
Vue.use(Delay)

Vue.use(require('vue-moment'), {
    moment
})

Vue.config.productionTip = false

Vue.use(VueGoogleMaps, {
  load: {
    key: process.env.VUE_APP_GOOGLE_KEY,
    libraries: "places" // necessary for places input
  }
});

let app

firebase.auth().onAuthStateChanged(() => {
  if(!app) {
    app = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount('#app')
  }
})
