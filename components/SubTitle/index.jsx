import styled from 'styled-components'

const SubTitle = styled.h2`
  margin: 0 auto;
  margin-top: 2.5vh;
  text-align: center;
  width: 30%;
  padding: 10px;
  font-weight: 300;
  font-size: 3rem;
  border-radius: 2px;
  span {
    color: var(--light-green);
  }

  //   MEDIA QUERIES   //

  /* Extra small devices (phones, 600px and down) */
  @media only screen and (max-width: 600px) {
    font-size: 1.5rem;
    width: 80%;
  }

  @media only screen and (min-width: 601px) {
    font-size: 2rem;
  }

  @media only screen and (min-width: 2300px) {
    font-size: 3em;
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

export default SubTitle
