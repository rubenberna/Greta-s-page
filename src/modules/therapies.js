import firebaseApi from '../apis/firebaseApi'

const state = {
  therapies: null
}

const getters = {
  therapies: state => state.therapies
}

const actions = {
  async fetchTherapies({ commit }) {
    commit('setTherapies', null);
    const response = await firebaseApi.fetchTherapies();
    console.log(response);
    commit('setTherapies', response)
  }
}

const mutations = {
  setTherapies: (state, therapies) => {
    state.therapies = therapies
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
