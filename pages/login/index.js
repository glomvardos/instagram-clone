import Head from 'next/head'
import Login from '../../components/login-page/login'

export default function AuthPage() {
  return (
    <>
      <Head>
        <title>Login • Instagram</title>
      </Head>
      <Login />
    </>
  )
}
