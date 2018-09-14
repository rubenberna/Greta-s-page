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
  createTherapy({ state, commit }, therapy) {
    db.createTherapy(therapy);
    router.push('/management');
  },
  async uploadImage({ commit }, image) {
    console.log(image);
    const response = await db.uploadImage(image);
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
