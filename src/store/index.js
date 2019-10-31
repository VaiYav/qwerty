import Vue from 'vue'
import Vuex from 'vuex'
import createMutationsSharer from 'vuex-shared-mutations'
import modules from './modules/index'
import getters from './getters'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules,
  getters,
  plugins: [createMutationsSharer({ predicate: ['filters/SET_STANDARD_FILTER'] })]
})

export default store
