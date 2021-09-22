import Head from 'next/head'
import Signup from '../../components/signup-page/signup'
import { getToken } from '../../helpers/getToken'

export default function SignupPage() {
  return (
    <>
      <Head>
        <title>Login • Instagram</title>
      </Head>
      <Signup />
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
