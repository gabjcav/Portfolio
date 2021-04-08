import '../styles/globals.css'
import NavBar from '../components/NavBar'
import MainContainer from '../components/MainContainer'
import GlobalStyle from '../components/GlobalStyle'
import { AnimatePresence } from 'framer-motion';

function MyApp({ Component, pageProps }) {
  return (
    <>
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
