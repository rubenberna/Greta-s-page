import db from '../apis/firebaseApi'
import router from '../router'

const state = {
  therapies: []
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
  createTherapy({ commit }, therapy) {
    db.createTherapy(therapy);
    router.push('/management');
  },
  uploadImage({ commit }, image) {
    db.uploadImage(image);
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
