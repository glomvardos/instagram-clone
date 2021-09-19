import Head from 'next/head'
import { useRouter } from 'next/router'
import { Provider } from 'react-redux'
import store from '../store/store'
import '../styles/globals.css'
import Header from '../components/header/header'

function MyApp({ Component, pageProps }) {
  const { pathname } = useRouter()

  const showHeader =
    pathname === '/login' || pathname === '/signup' ? (
      <Component {...pageProps} />
    ) : (
      <Header>
        <Component {...pageProps} />
      </Header>
    )

  return (
    <Provider store={store}>
      <Head>
        <title>Instagram clone</title>
      </Head>
      {showHeader}
    </Provider>
  )
}

export default MyApp
