import db from '../apis/firebaseApiEvents'
import router from '../router'

const state = {
  events: [],
}

const getters = {
  events: state => state.events,
  futureEvents: state => {
    return state.events.filter(ev => ev.date > new Date ())
  },
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
  },
  uploadImageEvent({ commit }, image) {
    db.uploadImage(image);
  },
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
