import request from '@/utils/request'

export function getUserList(params: any) {
  return request({
      url: '/users',
      method: 'get',
      params,
  })
}

export function getSexStatistics(params: any) {
  return request({
      url: '/users/sexStatistics',
      method: 'get',
      params,
  })
}

export function addUser(params: any) {
  return request({
      url: '/users/add',
      method: 'post',
      data:params,
  })
}

