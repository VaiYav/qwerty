import * as types from '../types'
const config = {
  namespaced: true,
  state: {
    loader: false,
    device: 'desktop'
  },
  getters: {
    device: state => state.device,
    isMobile: state => state.device === 'mobile'
  },
  actions: {
    toggleDevice({ commit }, device) {
      commit(types.TOGGLE_DEVICE, device)
    },
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
    [types.TOGGLE_DEVICE](state, device) {
      state.device = device
    },
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
