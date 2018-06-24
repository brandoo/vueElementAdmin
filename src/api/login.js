import request from '@/utils/request'

export function loginByUsername(userName, userPassword) {
  const data = {
    userName,
    userPassword
  }
  return request({
    url: '/index/login',
    method: 'post',
    data
  })
}

export function logout() {
  return request({
    url: '/login/logout',
    method: 'post'
  })
}

export function getUserInfo(token) {
  return request({
    url: '/index/getUserInfo',
    method: 'get'
  })
}

