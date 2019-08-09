import * as types from '../types'
import MockedData from '@/mockedData'
import defaultColumns from '@/defaultColumns'

const getData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(MockedData)
    }, 2000)
  })
}
const externalData = {
  namespaced: true,
  state: {
    loader: false,
    data: [],
    columns: {
      ...defaultColumns
    }
  },
  getters: {
    getData: state => state.data,
    getAllColumns: state => state.columns,
    getSortedByOrder: (state, getters) => {
      return Object.keys(getters.getAllColumns)
        .map(key => ({ key, ...getters.getAllColumns[key] }))
        .filter(entity => entity.visible)
        .sort((a, b) => {
          if (a.order && b.order) {
            return a.order - b.order
          }
        })
    },
    getLoader: state => state.loader
  },
  actions: {
    setLoader({ commit }, payload) {
      commit(types.SET_LOADER, payload)
    },
    async fetchData({ commit, dispatch, state }, payload) {
      dispatch('setLoader', true)
      try {
        const response = payload ? await getData(payload) : {}
        const data = { ...response, columns: { ...state.columns, ...response.columns }}
        commit(types.SET_DATA, data)
        dispatch('app/requestSuccess', null, { root: true })
        dispatch('setLoader', false)
        return data
      } catch (e) {
        dispatch('app/requestFailure', e, { root: true })
        return e
      }
    }
  },
  mutations: {
    [types.SET_DATA](state, payload) {
      state.data = payload.data
      state.columns = payload.columns
    },
    [types.SET_LOADER](state, payload) {
      state.loader = payload
    }
  }
}

export default externalData
