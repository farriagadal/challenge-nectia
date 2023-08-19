import 'src/styles/global.css'
import Head from 'next/head'
import type { AppProps } from 'next/app'
import { store, persistor } from 'src/store'
import { PersistGate } from 'redux-persist/integration/react'
import { Provider } from 'react-redux'

export default function App({ Component, pageProps }: AppProps) {

  return (
    <>
      <Head>
        <title>{'Nectia Challenge  | Computers Store'}</title>
        <meta name="description" content='FrontEnd Challenge | Computers Store' />
        <link rel="icon" type="image/svg+xml" href="/favicon.png" />
        <meta name="theme-color" content="#202327" />
      </Head>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Component {...pageProps} />
        </PersistGate>
      </Provider>
    </>
  )
}