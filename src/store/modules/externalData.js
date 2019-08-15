import * as types from '../types'
import MockedData from '@/mockedData'
import defaultColumns from '@/defaultColumns'
import { fetchData } from '@/api'
const cloneState = (state) => JSON.parse(JSON.stringify(state))

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
        total: 0,
        count: 0,
        per_page: 50,
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
    getAllColumns: state => {
      return Object.keys(state.columns)
        .map(key => ({ key, ...state.columns[key] }))
    },
    getSortedByOrder: (state, getters) => {
      return getters.getAllColumns
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
        const response = payload ? await fetchData(payload) : { meta: {}, data: {}}
        const data = {
          ...response.data,
          ...MockedData,
          meta: { ...state.meta, ...response.data.meta },
          columns: { ...state.columns, ...MockedData.columns }
        }
        commit(types.SET_DATA, data)
        dispatch('app/requestSuccess', null, { root: true })
        dispatch('setLoader', false)
        return data
      } catch (e) {
        dispatch('app/requestFailure', e, { root: true })
        dispatch('setLoader', false)
        return e
      }
    },
    editEntity({ dispatch, commit, state }, payload) {
      dispatch('setLoader', true)
      const clonedState = cloneState(state.data)
      setTimeout(() => {
        const entity = clonedState.find(s => s.id.value === payload.id)
        entity[payload.field].value = payload.value
        commit(types.EDIT_ENTITY, clonedState)
        dispatch('setLoader', false)
      }, 1500)
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
    },
    [types.EDIT_ENTITY](state, payload) {
      state.data = payload
    }
  }
}

export default externalData
