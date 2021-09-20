import cookie from 'cookie'

export function getToken(req) {
  const { token } = cookie.parse(req.headers.cookie || '')
  return token
}
