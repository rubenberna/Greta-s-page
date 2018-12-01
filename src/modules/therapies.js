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
  async createTherapy({ rootState, dispatch }, therapy) {
    const { imageURL } = rootState.images
    await db.createTherapy(therapy, imageURL)
    dispatch('fetchTherapies')
    router.push('/management')
  },
  storeTherapy({ commit }, therapy) {
    commit('setTherapy', therapy)
  },
  deleteTherapy({ dispatch }, therapyId) {
    db.deleteTherapy(therapyId)
    dispatch('fetchTherapies')
  },
  async editTherapy({ rootState, dispatch }, therapy) {
    const { imageURL } = rootState.images
    await db.editTherapy(therapy, imageURL)
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
