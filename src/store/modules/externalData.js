import * as types from '../types'
import MockedData from '@/mockedData'
import defaultColumns from '@/defaultColumns'
import { fetchData } from '@/api'
import { cloneDeep } from '@/utils'

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
    },
    sortDirection: ''
  },
  getters: {
    getData: state => state.data,
    getPagination: state => state.meta.pagination,
    getAllColumns: state => {
      return Object.keys(state.columns)
        .map(key => ({ key, ...state.columns[key] }))
    },
    getSortedColumnsByPosition: state => (columns, position) => {
      return columns.filter(c => c.fixed && c.fixed.active && c.fixed.position === position)
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
          meta: { ...state.meta, ...MockedData.meta },
          columns: { ...state.columns, ...MockedData.columns }
        }
        commit(types.SET_DATA, data)
        dispatch('app/requestSuccess', null, { root: true })
        setTimeout(() => {
          dispatch('setLoader', false)
        }, 1000)
        return data
      } catch (e) {
        setTimeout(() => {
          dispatch('app/requestFailure', e, { root: true })
          dispatch('setLoader', false)
          return e
        }, 1500)
      }
    },
    editEntity({ dispatch, commit, state }, payload) {
      dispatch('setLoader', true)
      const clonedState = cloneDeep(state.data)
      setTimeout(() => {
        const entity = clonedState.find(s => s.id.value === payload.id)
        entity[payload.field].value = payload.value
        commit(types.EDIT_ENTITY, clonedState)
        dispatch('setLoader', false)
      }, 1500)
    },
    changeColumns({ state, commit }, payload) {
      const newState = payload.reduce((result, item) => {
        result[item.key] = item
        return result
      }, {})
      commit(types.SET_COLUMNS, { ...state.columns, ...newState })
    },
    setColumnWidth({ commit, state }, payload) {
      const clonedState = cloneDeep(state.columns)
      clonedState[payload.field].width.default = payload.width
    },
    changeSorting({ commit, state, dispatch }, payload) {
      const clonedState = cloneDeep(state.columns)
      for (const key in clonedState) {
        if (Object.prototype.hasOwnProperty.call(clonedState, key) && clonedState[key].sortable) {
          clonedState[key].sortable.direction = ''
        }
      }
      clonedState[payload.key] = payload
      dispatch('fetchData')
      commit(types.SET_COLUMNS, clonedState)
      commit(types.CHANGE_SORTING, payload.sortable.direction)
    },
    setThOrder({ commit, state }, payload) {
      const clonedState = cloneDeep(state.columns)
      for (const key in payload) {
        if (Object.hasOwnProperty.call(payload, key)) {
          clonedState[key].order = payload[key]
        }
      }
      commit(types.SET_COLUMNS, clonedState)
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
    },
    [types.SET_COLUMNS](state, payload) {
      state.columns = payload
    },
    [types.CHANGE_SORTING](state, payload) {
      state.sortDirection = payload
    }
  }
}

export default externalData
