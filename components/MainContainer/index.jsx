import styled from 'styled-components'

const MainContainer = styled.main`
  width: 100vw;
  height: 100%;
  margin-top: 5%;

  #work {
    border: 1px dashed var(--light-green);
    padding: 15px;
    border-radius: 4px;
    text-align: center;
    margin: 0 auto;
    width: 80%;
  }

  a {
    color: var(--light-green);
  }

  //   MEDIA QUERIES   //

  /* Extra small devices (phones, 600px and down) */
  @media only screen and (max-width: 600px) {
    #work {
      margin: 32px auto;
    }
  }

  /* Small devices (portrait tablets and large phones, 600px and up) */
  @media only screen and (min-width: 600px) {
  }

  /* Medium devices (landscape tablets, 768px and up) */
  @media only screen and (min-width: 768px) {
  }

  /* Large devices (laptops/desktops, 992px and up) */
  @media only screen and (min-width: 992px) {
  }

  /* Extra large devices (large laptops and desktops, 1200px and up) */
  @media only screen and (min-width: 1200px) {
  }
`

export default MainContainer
