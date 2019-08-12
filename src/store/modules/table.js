import * as types from '../types'
import { EventBus } from '@/EventBus'
const cloneState = (state) => JSON.parse(JSON.stringify(state))

const table = {
  namespaced: true,
  state: {
    selectedRow: []
  },
  getters: {
    getSelectedRow: state => state.selectedRow
  },
  actions: {
    selectAllRow({ state, commit }, payload) {
      commit(types.SELECT_ROW, cloneState(payload.data))
    },
    selectRow({ state, commit }, payload) {
      const clonedState = cloneState(state.selectedRow)
      if (payload.value === 'checked') {
        clonedState.push(payload.data)
        commit(types.SELECT_ROW, clonedState)
      } else if (payload.value === 'not_checked') {
        const index = state.selectedRow.findIndex(entity => entity.id.value === payload.id)
        clonedState.splice(index, 1)
        commit(types.SELECT_ROW, clonedState)
      }
    }
  },
  mutations: {
    [types.SELECT_ROW](state, payload) {
      EventBus.$root.$emit('selected:row', payload)
      state.selectedRow = payload
    }
  }
}

export default table
