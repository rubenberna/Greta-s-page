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
  async createEvent({ rootState, dispatch }, newEvent) {
    const { imageURL } = rootState.images
    await db.createEvent(newEvent, imageURL);
    dispatch('fetchEvents')
    router.push('/management');
  },
  storeEvent({ commit }, event) {
    commit('setEvent', event)
  },
  deleteEvent({ dispatch }, eventId) {
    db.deleteEvent(eventId)
    dispatch('fetchEvents')
  },
  async editEvent({ rootState, dispatch }, updatedEvent) {
    const { imageURL } = rootState.images
    await db.editEvent(updatedEvent, imageURL)
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
