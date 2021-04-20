import styled from 'styled-components'

const SkillContainer = styled.div`
  margin-top: 2%;
  margin-bottom: 5%;
  width: 110%;
  font-size: 2rem;
  padding: 10px;
  border-radius: 5px;
  .skill-title {
    font-size: 1.5rem;
    margin-bottom: 15px;
    text-align: center;
  }
  ul {
    margin-left: 10%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    justify-content: space-evenly;
    gap: 20px;
    font-size: 1.15rem;
  }

  //   MEDIA QUERIES   //

  /* Extra small devices (phones, 600px and down) */
  @media only screen and (max-width: 600px) {
    width: 100%;
    background-color: var(--gray);
    padding: 15px;
    border-radius: 5px;
    font-size: 1.3rem;
    ul {
      width: 100%;
      display: grid;
      grid-template-columns: minmax(70px, auto) 1fr;
      justify-content: space-around;
      gap: 30px;
      margin-left: 0;
      font-size: 1rem;
    }
  }

  @media (max-width: 1440px) {
    margin-top: 0;
    width: 90%;
  }
  /* Small devices (portrait tablets and large phones, 600px and up) */
  @media only screen and (min-width: 600px) {
  }

  /* Medium devices (landscape tablets, 768px and up) */
  @media only screen and (min-width: 768px) {
  }

  /* Large devices (laptops/desktops, 992px and up) */
  @media only screen and (max-width: 1200px) {
  }

  /* Extra large devices (large laptops and desktops, 1200px and up) */
  @media only screen and (min-width: 1200px) {
  }
`
export default SkillContainer
