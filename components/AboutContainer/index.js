import styled from 'styled-components';

const AboutContainer = styled.div`
    width: 30%;
    height: 50%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 1.7%;

    #info-me-container{
      text-align: center; 
      /* margin-top: 9vh;  */
    }
    p{
      font-size: 1.15rem; 
    }
    #work {
      margin-bottom: 50px;
      border: 1px dashed var(--light-green);
      padding: 15px;
      border-radius: 4px;
      text-align: center;
      margin: 0 auto;
      width: 80%;
   
      #contact {
        color: var(--light-green); 
      }

    }
    


    @media (max-width: 600px) {
      margin-top: 0; 
      width: 90%; 
      #info-me-container {
        text-align: left; 
        margin: 0 auto; 
        /* margin-top: 67vh;  */
        width: 95%; 
      }
    }

    @media (max-width: 1440px) {
      margin-top: 0; 
      width: 70%; 
      #info-me-container {
        text-align: center; 
        margin: 0 auto; 
        /* margin-top: 67vh;  */
        width: 95%; 
      }
    }
`

export default AboutContainer; 