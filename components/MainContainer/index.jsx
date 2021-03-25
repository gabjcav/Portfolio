import styled from 'styled-components'

const MainContainer = styled.main`
  width: 100vw;
  height: 100%;
  margin-top: 10%;
  h2 {
    margin: 0 auto;
    margin-top: 50px;
    text-align: center;
    width: 30%;
    padding: 10px;
    font-weight: 300;
    font-size: 3rem;
    border-radius: 2px;
  }

  .container {
    width: 60%;
    height: 500px;
    margin: 0 auto;
    margin-top: 5%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 5%;
    padding: 1.7%;

    .project {
      margin-left: 0;
      height: 70%;
      width: 80%;
      background-color: var(--gray);
      border-radius: 5px;
      box-shadow: 6px 5px 5px -4px rgba(0, 0, 0, 0.59);
    }
  }
  .about {
    p {
      font-size: 1.2rem;
    }
  }
`

export default MainContainer
