import cookie from 'cookie'

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.status(405).json({ message: `Method ${req.method} is not allowed` })
    return
  }

  const { jwt } = req.body

  if (!!jwt) {
    // Store jwt
    res.setHeader(
      'Set-Cookie',
      cookie.serialize('token', jwt, {
        httpOnly: true,
        secure: process.env.NODE_ENV !== 'development',
        maxAge: 60 * 60 * 24 * 7, // 1 week
        sameSite: 'strict',
        path: '/',
      })
    )

    res.status(200).json({ ok: true })
    return
  }
  res.status(400).json({ ok: false })
}
