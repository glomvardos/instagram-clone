import Head from 'next/head'
import Login from '../../components/login-page/login'
import { getToken } from '../../helpers/getToken'

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

export function getServerSideProps(context) {
  const jwt = getToken(context.req)

  if (jwt) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    }
  }
  return {
    props: {},
  }
}
