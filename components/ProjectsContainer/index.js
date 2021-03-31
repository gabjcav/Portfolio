import styled from 'styled-components';

const ProjectsContainer = styled.div`
    width: 60%;
    height: 600px;
    margin: 0 auto;
    margin-top: 5%;
    display: flex;
    flex-direction: wrap;
    justify-content: center;
    align-items: center;
    gap: 5%;
    padding: 1.7%;
    margin-bottom: 0; 
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
        
      }
    }   


    //   MEDIA QUERIES   //

  /* Extra small devices (phones, 600px and down) */
  @media only screen and (max-width: 600px) {
    width: 100%;
    height: 200px;
    margin: 0 auto;
    margin-top: 5%;
    display: grid;
    grid-template-rows: repeat(4, 1fr); 
    gap: 25px;
    margin-bottom: 10%; 
    .project{
      margin: 0 auto; 
      height: 500px;
      width: 90%;

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

export default ProjectsContainer;