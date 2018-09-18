import fb from '../../db/firebaseInit'
import db from '../apis/firebaseApi'

const state = {
  currentUser: null,
  userProfile: {}
}

const getters = {
  currentUser: state => state.currentUser
}

const actions = {
  async login({ commit, dispatch }, user) {
    const response = await db.login(user)
    console.log(response);
    // commit('setCurrentUser', user)
  },
  signUp({ commit }, user) {
    db.signUp(user)
  },
  async fetchUserProfile({ state, commit }) {
    const { currentUser } = state
    console.log(currentUser);
    // const response = await db.fetchUserProfile(currentUser)
    // console.log(response);
  }
}

const mutations = {
  setCurrentUser: (state, user) => {
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
