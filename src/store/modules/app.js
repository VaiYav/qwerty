import * as types from '../types'
const config = {
  namespaced: true,
  state: {
    loading: false
  },
  getters: {
  },
  actions: {
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
    }
  }
}

export default config
