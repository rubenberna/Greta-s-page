import db from '../apis/firebaseApi'

const state = {
  currentUser: null,
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
  },
  signUp({ commit }, user) {
    db.signUp(user)
  }
}

const mutations = {
  setCurrentUser: (state, user) => {
    console.log(user.email);
    state.currentUser = user
  },
  setUserProfile: (state, user) => {
    console.log(user.email);
    state.userProfile = user
  }

}

export default {
  state,
  getters,
  actions,
  mutations
}
