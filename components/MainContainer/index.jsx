import styled from 'styled-components'

const MainContainer = styled.main`
  width: 100vw;
  height: 100%;
  margin-top: 5%;

  h2 {
    margin: 0 auto;
    margin-top: 50px;
    margin-bottom: 50px;
    text-align: center;
    width: 30%;
    padding: 10px;
    font-weight: 300;
    font-size: 3rem;
    border-radius: 2px;
    span {
      color: var(--light-green);
    }
  }
  #work {
    border: 1px dashed var(--light-green);
    padding: 15px;
    border-radius: 4px;
    text-align: center;
    width: 80%;
    margin: 0 auto;
  }

  .container {
    width: 60%;
    height: 600px;
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
      height: 100%;
      width: 90%;
      background-color: var(--gray);
      border-radius: 5px;
      box-shadow: 6px 5px 5px -4px rgba(0, 0, 0, 0.59);
      display: grid;
      grid-template-rows: repeat(5, 1fr);
      .desc {
        text-align: center;
        height: 50px;
      }
      .project-image {
        width: 90%;
        margin: 0 auto;
        height: 70px;
        box-shadow: 6px 5px 5px -4px rgba(0, 0, 0, 0.4);
        border-radius: 5px;
      }

      .info-container {
        display: grid;
        grid-template-columns: repeat(1, 1fr);
        align-items: center;
        justify-content: center;
        min-height: 70%;

        ul {
          min-height: 96px;
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          width: 100%;
        }

        .link-container {
          display: flex;
          flex-direction: row;
          justify-content: space-around;
          align-items: center;
          height: 60px;
        }
      }
    }
  }

  .about {
    height: 650px;
    border-radius: 5px;
    width: 50%;
    margin: 0 auto;
    font-size: 1.3rem;
    #contact {
      color: var(--light-green);
      transition: 0.3s ease;
      &:hover {
        color: white;
      }
    }
    p {
      font-size: 1.4rem;
    }
    .skill-container {
      margin: 6% 0;
      width: 120%;
      font-size: 1.2rem;
    }
    ul {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      margin-bottom: 10%;
      li {
        margin-right: 10px;
      }
    }
  }

  /* Extra small devices (phones, 600px and down) */
  @media only screen and (max-width: 600px) {
    h2 {
      font-size: 1.5rem;
      margin-bottom: 20%;
      display: none;
    }

    .about {
      margin-top: 30%;
      ul {
        font-size: 1rem;
      }
      p {
        font-size: 1.3rem;
      }
      .skill-container {
        margin-top: 30%;
      }
    }

    .projects {
      flex-direction: column;
      width: 100%;
      margin-top: 800px;
      .project {
        height: 500px;
        width: 100%;
        .project-image {
          width: 50%;
        }
      }
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
