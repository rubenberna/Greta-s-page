import db from '../apis/firebaseApiBookings'
import sendgrid from '../apis/sendgrid'

const state = {
  bookings: [],
  booking: null,
  bookingsTherapy: []
}

const getters = {
  bookings: state => state.bookings,
  bookingsTherapy: state => state.bookingsTherapy
}

const actions = {
  async createBooking({ commit }, booking) {
    commit('setBooking', null)
    const appointmentId = await db.createBooking(booking)
    sendgrid.emailAppointment(appointmentId)
  },
  async fetchBookings({ commit }) {
    commit('setBookings', null)
    const response = await db.fetchBookings()
    commit('setBookings', response)
  },
  async countBookings({ commit }, therapyId) {
    commit('setBookingsTherapy', null)
    const response = await db.countBookings(therapyId)
    commit('setBookingsTherapy', response)
  }
}

const mutations = {
  setBookings: (state, list) => {
    state.bookings = list
  },
  setBooking: (state, booking) => {
    state.booking = booking
  },
  setBookingsTherapy: (state, list) => {
    state.bookingsTherapy = list
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
