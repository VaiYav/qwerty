export function debounce(func, wait, immediate) {
  let timeout
  return function() {
    const context = this
    const args = arguments
    const later = function() {
      timeout = null
      if (!immediate) func.apply(context, args)
    }
    const callNow = immediate && !timeout
    clearTimeout(timeout)
    timeout = setTimeout(later, wait)
    if (callNow) func.apply(context, args)
  }
}
export function cloneDeep(payload) {
  return JSON.parse(JSON.stringify(payload))
}
export function arrayDiffByKey(key, ...arrays) {
  return [].concat(...arrays.map((arr, i) => {
    const others = arrays.slice(0)
    others.splice(i, 1)
    const unique = [...new Set([].concat(...others))]
    return arr.filter(x =>
      !unique.some(y => x[key] === y[key])
    )
  }))
}
export function freezeObject(obj) {
  return Object.freeze(obj)
}
export default {
  debounce,
  cloneDeep,
  arrayDiffByKey,
  freezeObject
}
export function getObjectDiff(obj1, obj2) {
  return Object.keys(obj1).reduce((result, key) => {
    if (!Object.prototype.hasOwnProperty.call(obj2, key)) {
      result.push(key)
    } else if (Object.entries(obj1[key]).toString() === Object.entries(obj2[key]).toString()) {
      const resultKeyIndex = result.indexOf(key)
      result.splice(resultKeyIndex, 1)
    }
    return result
  }, Object.keys(obj2))
}
