import cookie from 'cookie'
import { firebase } from '../../lib/firebase'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    req.status(405).json({ message: `Method ${req.method} is not allowed` })
    return
  }
  firebase
  const { userInput, passwordInput } = req.body

  const auth = getAuth()
  try {
    const response = await signInWithEmailAndPassword(auth, userInput, passwordInput)

    if (!!response.user.stsTokenManager.accessToken) {
      // Store jwt
      res.setHeader(
        'Set-Cookie',
        cookie.serialize('token', response.user.stsTokenManager.accessToken, {
          httpOnly: true,
          secure: process.env.NODE_ENV !== 'development',
          maxAge: 60 * 60 * 24 * 7, // 1 week
          sameSite: 'strict',
          path: '/',
        })
      )
      res.status(200).json(response)
    }
  } catch (err) {
    res.status(400).json(err)
  }
}
