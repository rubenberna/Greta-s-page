const state = {
  loading: false
}

const getters = {
  loading: state => state.loading
}

const actions = {
  changeLoading({ commit }, boolean) {
    commit('setLoading', boolean)
  }
}

const mutations = {
  setLoading: (state, boolean) => {
    state.loading = boolean
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
