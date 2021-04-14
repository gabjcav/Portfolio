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

  /* Extra small devices (phones, 600px and down) */
  @media only screen and (max-width: 600px) {
    font-size: 2.6rem;
    max-width: 100%;
    margin: 0 auto;
    width: 100%;
    padding: 0;
  }

  @media only screen and (min-width: 600px) {
    font-size: 4rem;
  }
  @media only screen and (min-width: 2300px) {
    font-size: 6rem;
  }
`

export default PageTitle
