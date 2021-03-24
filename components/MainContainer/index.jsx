import styled from 'styled-components'

const MainContainer = styled.main`
  width: 100vw;
  height: 100%;
  margin-top: 10%;
  h2 {
    margin: 0 auto;
    margin-top: 50px;
    text-align: center;
    background-color: #101820ff;
    width: 12%;
    padding: 10px;
    border-radius: 2px;
  }

  .container {
    border-radius: 5px;
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
      border-radius: 3px;
    }
  }
`

export default MainContainer
