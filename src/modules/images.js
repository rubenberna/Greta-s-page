import db from '../apis/firebaseApiImages'

const state = {
  imageURL: null,
  progress: null
}

const getters = {
  imageURL: state => state.imageURL,
  progress: state => state.progress
}

const actions = {
  async uploadImage({ commit }, image, location) {
    commit('setImageURL', null)
    await db.uploadImage(image, location)
  },
  getProgress ({ commit}, progress) {
    commit('setProgress', progress)
  },
  clearImageURL({ commit }) {
    commit('setImageURL', null)
  }
}

const mutations = {
  setImageURL: (state, url) => {
    state.imageURL = url
  },
  setProgress: (state, progress) => {
    state.progress = progress
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
