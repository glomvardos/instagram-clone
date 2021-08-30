import Head from 'next/head'
import { Provider } from 'react-redux'
import store from '../store/store'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Head>
        <title>Instagram clone</title>
      </Head>
      <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp
