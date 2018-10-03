import Vue from 'vue'
import Vuex from 'vuex'
import SuiVue from 'semantic-ui-vue'
import therapies from '@/modules/therapies.js'
import auth from '@/modules/auth.js'
import events from '@/modules/events.js'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)
Vue.use(SuiVue)

export default new Vuex.Store({
  modules: {
    therapies,
    auth,
    events
  },
  //persist state for page reload
  plugins: [createPersistedState({
    paths: ['therapies.therapy']
    })
  ],
})
