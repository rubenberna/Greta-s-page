import db from '../apis/firebaseApi'
import router from '../router'

const state = {
  currentUser: window.localStorage.getItem('current_user'),
  errorMsg: null,
  successMsg: null,
  isLoggedIn: null,
  profile: {
    name: null,
    email: null
  }
}

const getters = {
  errorMsg: state => state.errorMsg,
  successMsg: state => state.successMsg,
  isLoggedIn: state => state.isLoggedIn,
  profile: state => state.profile
}

const actions = {
  login({ commit }, user) {
    db.login(user)
  },
  signUp({ commit }, user) {
    db.signUp(user)
  },
  async loggedIn({ commit, dispatch }) {
    const response = await db.loggedIn()
    if (response) dispatch('getProfile')
    commit('setLoggin', response)
  },
  async getProfile({ commit }) {
    const response = await db.getProfile()
    console.log(response);
    commit('setProfile', response)
  },
  async logout({ commit }) {
    db.logout()
    window.localStorage.removeItem('currentUser')
    commit('setLoggin', false)
    router.push('/')
  },
  resetPassword({ commit }, email) {
    db.resetPassword(email)
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
  clearMsgs({ commit }) {
    commit('setErr', null)
    commit('setSucc', null)
  },
}

const mutations = {
  setErr: (state, msg) => {
    state.errorMsg = msg
  },
  setSucc: (state, msg) => {
    state.successMsg = msg
  },
  setLoggin: (state, boolean) => {
    state.isLoggedIn = boolean
  },
  setProfile: (state, user) => {
    state.profile = {
      name: user.displayName,
      email: user.email
    }
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
