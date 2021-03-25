import styled, { keyframes } from 'styled-components'
import slideInDown from 'react-animations/lib/slide-in-down'
const PageTitle = styled.h1`
  font-size: 6rem;
  font-weight: 500;
  margin: 0 auto;
  text-align: center;
  border-radius: 5px;
  max-width: 37%;
  /* animation: 1s ${keyframes(slideInDown)}; */
  padding: 10px;
  color: whitesmoke;
  span {
    color: var(--light-green);
  }
  #lastname {
    color: white;
  }
`

export default PageTitle
