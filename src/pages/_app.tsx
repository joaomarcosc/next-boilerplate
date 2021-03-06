// import App from "next/app";
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { GlobalStyles } from 'styles/global'

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyles />
      <Head>
        <title>React Avançado boilerplate</title>
        <link rel="shortcut icon" href="./img/icon-512.png" />
        <link rel="apple-touch-icon" href="/img/icon-512.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta
          name="description"
          content="A simple boilerplate with typescript, react, nextjs and styled components"
        />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default App
