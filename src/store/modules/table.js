import * as types from '../types'
import { EventBus } from '@/EventBus'
import { cloneDeep } from '@/utils'

const table = {
  namespaced: true,
  state: {
    selectedRow: [],
    unSelectedRow: [],
    checkAll: {
      block: false,
      entities: false
    },
    fixedHeaderStatus: false
  },
  getters: {
    getSelectedRow: state => state.selectedRow,
    checkAllBlock: state => state.checkAll.block,
    checkAllEntities: state => state.checkAll.entities,
    getFixedHeaderStatus: state => state.fixedHeaderStatus
  },
  actions: {
    selectAllRow({ state, commit }, payload) {
      commit(types.SELECT_ROW, cloneDeep(payload.data))
      commit(types.SET_UN_SELECTED_ROW, [])
    },
    selectRow({ state, commit }, payload) {
      const selectedRow = cloneDeep(state.selectedRow)
      const unSelectedRow = cloneDeep(state.unSelectedRow)
      if (payload.value === 'checked') {
        selectedRow.push(payload.data)
        commit(types.SELECT_ROW, selectedRow)
        commit(types.SET_UN_SELECTED_ROW, unSelectedRow.filter(usr => usr.id.value !== payload.id))
      } else if (payload.value === 'not_checked') {
        unSelectedRow.push(payload.data)
        commit(types.SELECT_ROW, selectedRow.filter(sr => sr.id.value !== payload.id))
        commit(types.SET_UN_SELECTED_ROW, unSelectedRow)
      }
    },
    toggleCheckAll({ commit, state }, payload) {
      commit(types.TOGGLE_CHECK_ALL, payload)
    },
    toggleFixedHeaderStatus({ commit, state }, payload) {
      commit(types.TOGGLE_FIXED_HEADER_STATUS, payload)
    }
  },
  mutations: {
    [types.SELECT_ROW](state, payload) {
      EventBus.$root.$emit('selected:row', payload)
      state.selectedRow = payload
    },
    [types.TOGGLE_CHECK_ALL](state, payload) {
      state.checkAll[payload.entity] = payload.data
    },
    [types.SET_UN_SELECTED_ROW](state, payload) {
      state.unSelectedRow = payload
    },
    [types.TOGGLE_FIXED_HEADER_STATUS](state, payload) {
      state.fixedHeaderStatus = payload
    }
  }
}

export default table
