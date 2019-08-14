import * as types from '../types'
import MockedData from '@/mockedData'
import defaultColumns from '@/defaultColumns'
import { fetchData } from '@/api'

const externalData = {
  namespaced: true,
  state: {
    loader: false,
    data: [],
    columns: {
      ...defaultColumns
    },
    meta: {
      pagination: {
        total: 100,
        count: 50,
        per_page: 10,
        current_page: 1,
        total_pages: 2,
        links: {
          next: '/?page=2'
        }
      }
    }
  },
  getters: {
    getData: state => state.data,
    getPagination: state => state.meta.pagination,
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
        const response = payload ? await fetchData(payload) : {}
        const data = {
          ...response.data,
          meta: { ...state.meta, ...response.data.meta },
          columns: { ...state.columns, ...MockedData.columns }
        }
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
      state.meta = payload.meta
    },
    [types.SET_LOADER](state, payload) {
      state.loader = payload
    }
  }
}

export default externalData
