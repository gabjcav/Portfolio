import styled from 'styled-components';

const AboutContainer = styled.div`
    position: relative; 
    width: 100%;
    height: 600px;
    margin: 0 auto;
    margin-top: 8.5%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 5%;
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
      margin-top: 68%; 
      #info-me-container {
        text-align: left; 
        margin: 0 auto; 
        /* margin-top: 67vh;  */
        width: 95%; 
      }
    }
`

export default AboutContainer; 