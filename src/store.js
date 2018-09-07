import Vue from 'vue'
import Vuex from 'vuex'
import SuiVue from 'semantic-ui-vue'
import therapies from '@/modules/therapies.js';
// import VueFlashMessage from 'vue-flash-message';

Vue.use(Vuex)
Vue.use(SuiVue)
// Vue.use(VueFlashMessage)

export default new Vuex.Store({
  modules: {
    therapies
  }
})
