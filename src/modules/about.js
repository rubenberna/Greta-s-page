import db from '../apis/firebaseApiAbout'

const state = {
  about: null
}

const getters = {
  about: state => state.about
}

const actions = {
  async fetchAbout({ commit }) {
    commit('setAbout', null)
    const response = await db.fetchAbout()
    commit('setAbout', response)
  },
  async editAbout({ }) {

  }
}

const mutations = {
  setAbout: (state, about) => {
    state.about = about
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
