import * as types from '../types'
const config = {
  namespaced: true,
  state: {
    loader: false
  },
  getters: {
  },
  actions: {
    setLoader({ commit }, payload) {
      commit(types.SET_LOADER, payload)
    },
    requestFailure({ commit }, payload) {
      commit(types.REQUEST_FAILURE)
    },
    requestSuccess({ commit }, payload) {
      commit(types.REQUEST_SUCCESS)
    }
  },
  mutations: {
    [types.REQUEST_SUCCESS](state, payload) {
      console.log('REQUEST_SUCCESS', payload)
    },
    [types.REQUEST_FAILURE](state, payload) {
      console.error('REQUEST_FAILURE', payload)
    },
    [types.SET_LOADER](state, payload) {
      state.loader = payload
    }
  }
}

export default config
