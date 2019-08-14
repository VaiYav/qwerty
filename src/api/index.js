import request from '@/utils/request'

export function fetchData({ query, payload }) {
  return request({
    url: query,
    method: 'get',
    params: payload
  })
}
