import db from '../apis/firebaseApiAuth'
import router from '../router'

const state = {
  currentUser: null,
  profile: {
    name: null,
    email: null,
    isAdmin: false
  },
  errorMsg: null,
  successMsg: null,
  allUsers: []
}

const getters = {
  currentUser: state => state.currentUser,
  profile: state => state.profile,
  errorMsg: state => state.errorMsg,
  successMsg: state => state.successMsg,
  allUsers: state => state.allUsers,
}

const actions = {
  async login({ commit }, user) {
    db.login(user)
  },
  async signUp({ commit }, user) {
    db.signUp(user)
  },
  async loggedIn({ commit }) {
    const response = await db.loggedIn()
    commit('setCurrentUser', response)
    if (response) db.getProfile(response)
  },
  async logout({ commit }) {
    await db.logout()
    commit('setCurrentUser', null)
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
  async fetchUsers({ commit }) {
    commit('setUsers', null)
    const response = await db.fetchUsers()
    commit('setUsers', response)
  }
}

const mutations = {
  setErr: (state, msg) => {
    state.errorMsg = msg
  },
  setSucc: (state, msg) => {
    state.successMsg = msg
  },
  setCurrentUser: (state, user) => {
    state.currentUser = user
  },
  setProfile: (state, user) => {
    state.profile = user
  },
  setUsers: (state, list) => {
    state.allUsers = list
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
