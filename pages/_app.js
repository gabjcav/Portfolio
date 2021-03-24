import '../styles/globals.css'
import NavBar from '../components/NavBar'
import MainContainer from '../components/MainContainer'
import GlobalStyle from '../components/GlobalStyle'
function MyApp({ Component, pageProps }) {
  return (
    <>
      <NavBar />
      <GlobalStyle />
      <MainContainer>
        <Component {...pageProps} />
      </MainContainer>
    </>
  ) 
}

export default MyApp
