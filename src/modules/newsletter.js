import db from '../apis/firebaseApiNewsletter'

const state = {
  newsletterUsers: [],
}

const getters = {
  newsletterUsers: state => state.newsletterUsers,
}

const actions = {
  register({ commit }, newsletterData) {
    db.register(newsletterData)
  },
  async fetchNewsletter({ commit }) {
    commit('setNewsletterUsers', null)
    const response = await db.fetchNewsletter()
    commit('setNewsletterUsers', response)
  }
}

const mutations = {
  setNewsletterUsers: (state, list) => {
    state.newsletterUsers = list
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
