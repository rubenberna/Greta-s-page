import db from '../apis/firebaseApi'
import router from '../router'

const state = {
  currentUser: null
}

const getters = {
  currentUser: state => state.currentUser
}

const actions = {
   login({ commit }, user) {
     db.login(user)
    // commit('setUser', user)
  },
  signUp({ commit }, user) {
    db.signUp(user)
  }
}

const mutations = {
  setUser: (state, user) => {
    state.currentUser = user
  }

}

export default {
  state,
  getters,
  actions,
  mutations
}
