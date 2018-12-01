import db from '../apis/firebaseApiImages'

const state = {
  imageURL: null
}

const getters = {
  imageURL: state => state.imageURL
}

const actions = {
  async uploadImage({ commit }, image, location) {
    commit('setImageURL', null)
    const response = await db.uploadImage(image, location)
    console.log(response)
    // commit('setImageURL', response)
  }
}

const mutations = {
  setImageURL: (state, url) => {
    state.imageURL = url
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
