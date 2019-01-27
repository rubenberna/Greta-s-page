import db from '../apis/firebaseApiAbout'
import router from '../router'

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
  async editAbout({ rootState, dispatch }, about) {
    console.log(about.text)
    const { imageURL } = rootState.images
    await db.editAbout(about, imageURL)
    dispatch('fetchAbout')
    router.push('/about')
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
