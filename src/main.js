import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import firebase from 'firebase';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
const fb = require('../firebaseConfig.js')

library.add(faCoffee)
library.add(faArrowRight)
library.add(faAngleDoubleRight)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

if (!firebase.apps.length) {
    firebase.initializeApp(fb);
}

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
