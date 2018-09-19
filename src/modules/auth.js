import db from '../apis/firebaseApi'
import router from '../router'

const state = {
  currentUser: window.localStorage.getItem('current_user'),
  userProfile: {}
}

const getters = {
  currentUser: state => state.currentUser
}

const actions = {
  login({ commit }, user) {
    db.login(user)
  },
  assignUser({ commit }, user) {
    commit('setCurrentUser', user)
    window.localStorage.setItem('current_user', user)
  },
  signUp({ commit }, user) {
    db.signUp(user)
  },
  async logout({ commit }) {
    db.logout()
    commit('setCurrentUser', null)
    window.localStorage.removeItem('currentUser')
    router.push('/')
  }
}

const mutations = {
  setCurrentUser: (state, user) => {
    state.currentUser = user
  },
}

export default {
  state,
  getters,
  actions,
  mutations
}
