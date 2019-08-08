import { expect } from 'chai'
import sinon from 'sinon'
import store from '../../src/store/modules/config'
import customConfiguration from '../../src/customConfig'

const actions = store.actions

const state = {
  a: 'a',
  b: 'b',
  c: 'c'
}

const testAction = (action, payload, state, expectedMutations, done) => {
  const dispatch = sinon.spy()
  const commit = (type, payload) => {
    const mutation = expectedMutations
    try {
      expect(type).to.equal(mutation.type)
      if (customConfiguration) {
        expect(payload).to.deep.equal(mutation.payload)
        done()
      }
    } catch (error) {
      done(error)
    }
  }
  action({ commit, dispatch, state }, payload)
}

describe('config.js', () => {
  it('Developer\'s settings have bigger priority', (done) => {
    testAction(actions.fetchConfig,
      null,
      state,
      { type: 'SET_CONFIG', payload: { ...state, ...customConfiguration }},
      done)
  })
})
