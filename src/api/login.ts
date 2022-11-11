import request from '@/utils/request'

export function login(params: any) {
  return request({
      url: '/users/login',
      method: 'post',
      data:params,
  })
}


export function randomImage(params: any) {
  return request({
      url: '/users/captcha',
      method: 'get',
      params,
  })
}