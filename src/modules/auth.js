import db from '../apis/firebaseApi'
import router from '../router'

const state = {
  currentUser: window.localStorage.getItem('current_user'),
  errorMsg: null,
}

const getters = {
  currentUser: state => state.currentUser,
  errorMsg: state => state.errorMsg
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
    window.localStorage.removeItem('currentUser')
    commit('setCurrentUser', null)
    router.push('/')
  },
  recordError({ commit }, msg) {
    commit('setError', msg)
  }
}

const mutations = {
  setCurrentUser: (state, user) => {
    state.currentUser = user
  },
  setError: (state, msg) => {
    state.errorMsg = msg
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
