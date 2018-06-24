import Cookies from 'js-cookie'
import { Base64 } from 'js-base64'
const TokenKey = 'Admin-Token'

export function getToken() {
  return Cookies.get(TokenKey)
}

export function setToken(token) {
  return Cookies.set(TokenKey, token)
}

export function removeToken() {
  return Cookies.remove(TokenKey)
}

export function checkToken(token) {
  if (token && token.length > 0) {
    const tokenInfo = JSON.parse(Base64.decode(token))
    console.log('tokenInfo', tokenInfo)
    const time = parseInt(Date.parse(new Date()) / 1000)
    if (tokenInfo && tokenInfo.loginTime && (parseInt(tokenInfo.loginTime) + 3600 * 2) > time) { // token 没有过期
      return true
    }
  }
  return false
}
