import '../styles/globals.css'
import NavBar from '../components/NavBar'
import MainContainer from '../components/MainContainer'
import GlobalStyle from '../components/GlobalStyle'
import { AnimatePresence } from 'framer-motion'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/favicon.ico" />
        <title>Gabriel Cavallaro</title>
      </Head>
      <NavBar />
      <AnimatePresence exitBeforeEnter>
        <GlobalStyle />
        <MainContainer>
          <Component {...pageProps} />
        </MainContainer>
      </AnimatePresence>
    </>
  )
}

export default MyApp
