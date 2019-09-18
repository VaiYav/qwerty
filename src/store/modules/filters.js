import * as types from '../types'
import { cloneDeep } from '@/utils'

const filters = {
  namespaced: true,
  state: {
    filterTypes: [
      {
        type: 'string',
        value: 'starts with',
        text: 'starts with',
        prefixText: '...',
        sign: '='
      },
      {
        type: 'string',
        value: 'ends with',
        text: 'ends with',
        suffixText: '...',
        sign: '='
      },
      {
        type: 'string',
        value: 'contains',
        text: 'contains',
        suffixText: '...',
        prefixText: '...',
        sign: '='
      },
      {
        type: 'string',
        value: 'is equal',
        text: 'is equal',
        sign: '='
      },
      {
        type: 'string',
        value: 'is not equal',
        text: 'is not equal',
        sign: '≠'
      },
      {
        type: 'string',
        value: 'is in predefined values',
        text: 'is in predefined values',
        sign: '='
      },
      {
        type: 'number',
        value: 'is less than',
        text: 'is less than',
        sign: '<'
      },
      {
        type: 'number',
        value: 'is less or equal than',
        text: 'is less or equal than',
        sign: '≤'
      },
      {
        type: 'number',
        value: 'is greater than',
        text: 'is greater than',
        sign: '>'
      },
      {
        type: 'number',
        value: 'is greater or equal than',
        text: 'greater-than-equal',
        sign: '≥'
      },
      {
        type: 'number',
        value: 'is equal',
        text: 'is equal',
        sign: '='
      },
      {
        type: 'number',
        value: 'is not equal',
        text: 'is not equal',
        sign: '≠'
      }
    ],
    savedFilters: [
      {
        title: 'Filter',
        search: [
          {
            type: 'is less than',
            value: '54',
            column: 'minimum_price'
          },
          {
            type: 'ends with',
            value: 'QWERTY',
            column: 'title'
          }
        ]
      },
      {
        title: 'Qwerty',
        search: [
          {
            type: 'starts with',
            value: 'qwe',
            column: 'part_number'
          },
          {
            type: 'ends with',
            value: '123',
            column: 'manufacturer'
          }
        ]
      }
    ],
    activeFilter: {
      search: []
    },
    defaultSavedFilters: [],
    editMode: false,
    searchFilters: {
      search: []
    }
  },
  getters: {
    getFilterTypes: (state) => state.filterTypes,
    savedFilters: (state) => state.savedFilters,
    activeFilter: (state) => state.activeFilter,
    defaultSavedFilters: (state) => state.defaultSavedFilters,
    editMode: (state) => state.editMode,
    searchFilters: (state) => state.searchFilters
  },
  actions: {
    resetFilter({ commit, state }) {
      return new Promise((resolve, reject) => {
        const clonedState = cloneDeep(state.defaultSavedFilters)
        const entity = clonedState.find(cs => cs.title === state.activeFilter.title)
        commit(types.CHOOSE_FILTER, entity || { search: [] })
        resolve()
      })
    },
    createFilter({ commit, state, dispatch }, payload) {
      function addNumber(str) {
        const words = str.split(' ')
        const lastElem = words[words.length - 1]
        if (isNaN(words[words.length - 1])) words.push('1')
        else words[words.length - 1] = +lastElem + 1
        return words.join(' ')
      }
      const clonedState = cloneDeep(state.savedFilters)
      const lastElem = clonedState[clonedState.length - 1]
      const entity = lastElem.title.split(' ').find(sf => !isNaN(sf))
      if (entity) {
        payload.title = addNumber(lastElem.title)
      } else {
        payload.title = addNumber(payload.title)
      }
      commit(types.CREATE_FILTER, payload)
      if (!state.activeFilter.title) dispatch('chooseFilter', { ...payload, ...state.activeFilter })
    },
    saveFilters({ commit, state, dispatch }, payload) {
      return new Promise((resolve, reject) => {
        const clonedState = cloneDeep(state.savedFilters)
        const index = clonedState.findIndex(sf => sf.title === payload.title)
        clonedState[index] = payload
        commit(types.SET_FILTERS, clonedState)
        dispatch('setDefaultSavedFilters', clonedState)
        dispatch('toggleEditMode', false)
        resolve()
      })
    },
    chooseFilter({ commit }, payload = { search: [] }) {
      commit(types.CHOOSE_FILTER, payload)
    },
    removeFilter({ state, commit }, payload) {
      const clonedState = cloneDeep(state.activeFilter)
      clonedState.search.splice(payload, 1)
      commit(types.CHOOSE_FILTER, clonedState)
    },
    removeSavedFilter({ state, commit, dispatch }, payload) {
      const clonedState = cloneDeep(state.savedFilters)
      clonedState.splice(payload.index, 1)
      commit(types.SET_FILTERS, clonedState)
      dispatch('chooseFilter')
    },
    setDefaultSavedFilters({ commit }, payload) {
      commit(types.SET_DEFAULT_FILTERS, payload)
    },
    saveColumns({ commit }, payload) {
      commit(types.SAVE_COLUMNS, payload)
    },
    toggleEditMode({ commit }, payload) {
      commit(types.TOGGLE_EDIT_MODE, payload)
    },
    searchByFilter({ commit }, payload) {
      commit(types.SEARCH_BY_FILTER, payload)
    },
    removeSearchFilters({ commit, state }, payload) {
      const clonedState = cloneDeep(state.searchFilters)
      const index = clonedState.search.findIndex(cs => cs.column === payload)
      clonedState.search.splice(index, 1)
      commit(types.SEARCH_BY_FILTER, clonedState)
    },
    renameFilter({ commit, state }, payload) {
      const clonedState = cloneDeep(state.savedFilters)
      const entity = clonedState.find(cs => cs.title === payload.oldVal)
      entity.title = payload.newVal
      commit(types.SET_FILTERS, clonedState)
      commit(types.CHOOSE_FILTER, entity)
    }
  },
  mutations: {
    [types.CHOOSE_FILTER](state, payload) {
      state.activeFilter = payload
    },
    [types.SET_FILTERS](state, payload) {
      state.savedFilters = payload
    },
    [types.SET_DEFAULT_FILTERS](state, payload) {
      state.defaultSavedFilters = payload
    },
    [types.SAVE_COLUMNS](state, payload) {
      if (!state.activeFilter.search) {
        state.activeFilter.search = []
        state.activeFilter.search = payload
      } else {
        state.activeFilter.search = payload
      }
    },
    [types.TOGGLE_EDIT_MODE](state, payload) {
      state.editMode = payload
    },
    [types.CREATE_FILTER](state, payload) {
      state.savedFilters.push(payload)
    },
    [types.SEARCH_BY_FILTER](state, payload) {
      state.searchFilters = payload
    }
  }
}

export default filters
