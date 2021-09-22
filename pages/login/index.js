import Head from 'next/head'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import Login from '../../components/login-page/login'
import { getToken } from '../../helpers/getToken'

export default function LoginPage({ jwt }) {
  const router = useRouter()
  useEffect(() => {
    if (navigator.userAgent.indexOf('Chrome') !== -1 && jwt) {
      router.replace('/')
    }
  }, [])

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
  console.log(jwt)
  if (jwt) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    }
  }
  return {
    props: { jwt: jwt || {} },
  }
}
