import db from '../apis/firebaseApi'
import router from '../router'

const state = {
  events: []
}

const getters = {
  events: state => state.events
}

const actions = {
  async fetchEvents({ commit }) {
    commit('setEvents', null)
    const response = await db.fetchEvents()
    console.log(response);
    commit('setEvents', response)
  },
  createEvent({ commit }, newEvent) {
    db.createEvent(newEvent);
    router.push('/management');
  }
}

const mutations = {
  setEvents: (state, list) => {
    state.events = list
  }

}

export default {
  state,
  getters,
  actions,
  mutations
}
