import db from '../apis/firebaseApiBookings'

const state = {
  bookings: []
}

const getters = {
  bookings: state => state.bookings
}

const actions = {
  createBooking({ commit }, booking) {
    db.createBooking(booking)
  },
  async fetchBookings({ commit }) {
    commit('setBookings', null)
    const response = await db.fetchBookings()
    console.log(response);
    commit('setBookings', response)
  }
}

const mutations = {
  setBookings: (state, list) => {
    state.bookings = list
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
