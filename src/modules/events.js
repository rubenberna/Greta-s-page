import db from '../apis/firebaseApiEvents'
import router from '../router'

const state = {
  events: [],
  futureEvents: [],
  thatEvent: null
}

const getters = {
  events: state => state.events,
  futureEvents: state => state.futureEvents,
  thatEvent: state => state.thatEvent
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
  createEvent({ dispatch }, newEvent) {
    db.createEvent(newEvent);
    dispatch('fetchEvents')
    router.push('/management');
  },
  storeEvent({ commit }, event) {
    commit('setEvent', event)
  },
  uploadImageEvent({ commit }, image) {
    db.uploadImage(image);
  },
  deleteEvent({ dispatch }, eventId) {
    db.deleteEvent(eventId)
    dispatch('fetchEvents')
  },
  async editEvent({ dispatch }, updatedEvent) {
    const response = await db.editEvent(updatedEvent)
    dispatch('fetchEvents')
    router.push('/management')
  }
}

const mutations = {
  setEvents: (state, list) => {
    state.events = list
  },
  setFutureEvents: (state, list) => {
    state.futureEvents = list
  },
  setEvent: (state, thatEvent) => {
    state.thatEvent = thatEvent
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
