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
      padding: 1%; 
      .github {
        width: 50px;
          height: 50px;
        transition: .3s ease;
        &:hover {
          transform: scale(1.05);
          

        }
      }
      .desc {
        text-align: center;
        height: 50px;
      }
      .project-image {
        width: 100%;
        margin: 0 auto;
        height: 70px;
        box-shadow: 6px 5px 5px -4px rgba(0, 0, 0, 0.4);
        border-radius: 5px;
      }

    }   


    //   MEDIA QUERIES   //


  /* Extra small devices (phones, 600px and down) */
  @media only screen and (max-width: 600px) {
    width: 100%;
    height: 200px;
    margin: 15% auto;
    display: grid;
    grid-template-rows: repeat(4, 1fr); 
    gap: 14%;
    .project{
      margin: 0 auto; 
      height: 500px;
      width: 90%;
      .project-image {
        width: 90%;
        margin: 0 auto;
        height:70%;
        box-shadow: 6px 5px 5px -4px rgba(0, 0, 0, 0.4);
        border-radius: 5px;
      }
    }
  }

  
  @media only screen and (min-width: 600px) {
     display: grid;
     grid-template-rows: repeat(1, 1fr); 
      justify-content: space-evenly;
     .project{
      margin: 0 auto; 
      height: 500px;
      width: 55%;
    }
  }

  @media only screen and (min-width: 1439px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    .project{
      width: 100%; 
      .project-image {
        width: 85%;
        margin: 0 auto;
        height:80%;
        box-shadow: 6px 5px 5px -4px rgba(0, 0, 0, 0.4);
        border-radius: 5px;
      }
    }
  }
  @media only screen and (min-width: 2000px) {
    display: flex;
    .project{
      .project-image {
        width: 100%;
        margin: 0 auto;
        height: 70px;
        box-shadow: 6px 5px 5px -4px rgba(0, 0, 0, 0.4);
        border-radius: 5px;
      }
    }
    
  }



`

export default ProjectsContainer;