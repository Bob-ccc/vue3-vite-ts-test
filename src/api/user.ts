import request from '@/utils/request'

export function getUserList(params: any) {
  return request({
      url: '/users',
      method: 'get',
      params,
  })
}