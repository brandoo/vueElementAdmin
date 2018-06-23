import request from '@/utils/request'

export function registerUser(data) {
  return request({
    url: '/index/register',
    method: 'post',
    data
  })
}
