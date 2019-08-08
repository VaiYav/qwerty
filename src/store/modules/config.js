import * as types from '../types'
import customConfiguration from '../../customConfig'
const getData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ a: 1, b: 2, c: 3 })
    }, 2000)
  })
}
const config = {
  namespaced: true,
  state: {
    a: 2,
    b: 1,
    c: 1,
    d: 4,
    ...customConfiguration
  },
  getters: {
    getConfig: state => state
  },
  actions: {
    async fetchConfig({ commit, dispatch, state }, payload) {
      try {
        const response = payload ? await getData(payload) : {}
        const data = { ...state, ...customConfiguration, ...response }
        commit(types.SET_CONFIG, data)
        dispatch('app/requestSuccess', null, { root: true })
        return data
      } catch (e) {
        dispatch('app/requestFailure', e, { root: true })
        return e
      }
    }
  },
  mutations: {
    [types.SET_CONFIG](state, payload) {
      state = payload
    }
  }
}

export default config
