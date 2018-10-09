import db from '../apis/firebaseApiBookings'
import sendgrid from '../apis/sendgrid'

const state = {
  bookings: [],
  bookingId: null
}

const getters = {
  bookings: state => state.bookings
}

const actions = {
  async createBooking({ commit }, booking) {
    commit('setBooking', null)
    const appointmentId = await db.createBooking(booking)
    sendgrid.emailAppointment(appointmentId)

    console.log(appointmentId);
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
  },
  setBooking: (state, booking) => {
    state.booking = booking
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
