import router from '@/router'

const routing = {
  namespaced: true,
  actions: {
    setRouter(_, payload) {
      if (router.history.current.query[payload.key] === JSON.stringify({ ...payload.data, func: payload.func })) {
        return
      }
      router.push({ path: '/', query: {
        ...router.history.current.query,
        [payload.key]: JSON.stringify(Object.assign(
          {},
          payload.data,
          { func: payload.func
          })) }}).catch(() => {})
    }
  }
}

export default routing
