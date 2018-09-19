import db from '../apis/firebaseApi'
import router from '../router'

const state = {
  currentUser: window.localStorage.getItem('current_user'),
  errorMsg: null,
  successMsg: null
}

const getters = {
  currentUser: state => state.currentUser,
  errorMsg: state => state.errorMsg,
  successMsg: state => state.successMsg
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
    commit('setSucc', null)
    commit('setErr', null)
    commit('setErr', msg)
  },
  recordSuccess({ commit }, msg) {
    commit('setErr', null)
    commit('setSucc', null)
    commit('setSucc', msg)
  },
  resetPassword({ commit }, email) {
    db.resetPassword(email)
  },
  clearMsgs({ commit }) {
    commit('setErr', null)
    commit('setSucc', null)
  }
}

const mutations = {
  setCurrentUser: (state, user) => {
    state.currentUser = user
  },
  setErr: (state, msg) => {
    state.errorMsg = msg
  },
  setSucc: (state, msg) => {
    state.successMsg = msg
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
