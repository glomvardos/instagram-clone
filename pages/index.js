import { getToken } from '../helpers/getToken'

export default function Home() {
  return <></>
}

export async function getServerSideProps(context) {
  const jwt = getToken(context.req)
  if (!jwt) {
    return {
      redirect: {
        destination: '/login',
        permanent: false,
      },
    }
  }

  return {
    props: {},
  }
}
