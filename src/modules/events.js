import db from '../apis/firebaseApiEvents'
import router from '../router'

const state = {
  events: [],
  futureEvents: []
}

const getters = {
  events: state => state.events,
  futureEvents: state => state.futureEvents
}

const actions = {
  async fetchEvents({ commit, dispatch }) {
    commit('setEvents', null)
    const response = await db.fetchEvents()
    commit('setEvents', response)
    dispatch('future')
  },
  future({ commit, state }) {
    const upcommingEvents = state.events.filter(ev => new Date(ev.date) >= new Date ())
    commit('setFutureEvents', upcommingEvents)
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
  },
  setFutureEvents: (state, list) => {
    state.futureEvents = list
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
