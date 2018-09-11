import db from '../apis/firebaseApi'
import router from '../router'

const state = {
  therapies: null
}

const getters = {
  therapies: state => state.therapies
}

const actions = {
  async fetchTherapies({ commit }) {
    commit('setTherapies', null);
    const response = await db.fetchTherapies();
    commit('setTherapies', response)
  },
  async createTherapy({ commit }, therapy) {
    await db.createTherapy(therapy);
    router.push('/management');
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
