import styled from 'styled-components'
const PageTitle = styled.h1`
  font-size: 6rem;
  font-weight: 500;
  margin: 0 auto;
  text-align: center;
  border-radius: 5px;
  max-width: 37%;
  padding: 10px;
  color: whitesmoke;
  span {
    color: var(--light-green);
  }
  #lastname {
    color: whitesmoke;
  }

  /* Extra small devices (phones, 600px and down) */
  @media only screen and (max-width: 600px) {
    font-size: 2.6rem;
    max-width: 100%;
    margin: 0 auto;
    width: 100%;
    padding: 0;
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

export default PageTitle
