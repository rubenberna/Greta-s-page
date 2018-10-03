import db from '../apis/firebaseApi'
import router from '../router'

const state = {
  therapies: [],
  therapy: null
}

const getters = {
  therapies: state => state.therapies,
  therapy: state => state.therapy
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
  },
  storeTherapy({ commit }, therapy) {
    console.log(therapy);
    commit('setTherapy', therapy)
  }
}

const mutations = {
  setTherapies: (state, therapies) => {
    state.therapies = therapies
  },
  setTherapy: (state, therapy) => {
    state.therapy = therapy
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
