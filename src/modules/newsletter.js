import db from '../apis/firebaseApiNewsletter'

const state = {
  newsletterUsers: [],
}

const getters = {
  newsletterUsers: state => state.newsletterUsers,
}

const actions = {

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
