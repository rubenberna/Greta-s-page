import db from '../apis/firebaseApiTherapies'
import router from '../router'

const state = {
  therapies: [],
  therapy: null
}

const getters = {
  therapies: state => state.therapies,
  therapy: state => state.therapy
}

const actions = {
  async fetchTherapies({ commit }) {
    commit('setTherapies', null);
    const response = await db.fetchTherapies();
    commit('setTherapies', response)
  },
  createTherapy({ dispatch }, therapy) {
    db.createTherapy(therapy)
    dispatch('fetchTherapies')
    router.push('/management')
  },
  uploadImageTherapy({ commit }, image) {
    db.uploadImage(image)
  },
  storeTherapy({ commit }, therapy) {
    commit('setTherapy', therapy)
  },
  deleteTherapy({ dispatch }, therapyId) {
    db.deleteTherapy(therapyId)
    dispatch('fetchTherapies')
  },
  async editTherapy({ dispatch }, therapy) {
    const response = await db.editTherapy(therapy)
    dispatch('fetchTherapies')
    router.push('/management')
  }
}

const mutations = {
  setTherapies: (state, therapies) => {
    state.therapies = therapies
  },
  setTherapy: (state, therapy) => {
    state.therapy = therapy
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
