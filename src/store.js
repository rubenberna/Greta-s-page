import Vue from 'vue'
import Vuex from 'vuex'
import SuiVue from 'semantic-ui-vue'
import therapies from '@/modules/therapies.js';
import auth from '@/modules/auth.js';

Vue.use(Vuex)
Vue.use(SuiVue)

export default new Vuex.Store({
  modules: {
    therapies,
    auth
  }
})
