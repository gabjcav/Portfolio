import styled from 'styled-components';

const AboutContainer = styled.div`
    position: relative; 
    width: 100%;
    height: 600px;
    margin: 0 auto;
    margin-top: 8.5%;
    display: flex;
    flex-direction: wrap;
    justify-content: center;
    align-items: center;
    gap: 5%;
    padding: 1.7%;
    #info-me-container{
      text-align: center; 
      margin-top: 10vh; 
    }
    p{
      font-size: 1.15rem; 
    }
    #work{
      margin-bottom: 50px; 
      #contact {
        color: var(--light-green); 
      }

    }
    


    @media (max-width: 600px) {
      #info-me-container {
        text-align: left; 
        margin-top: 70vh; 
      }
    }
`

export default AboutContainer; 