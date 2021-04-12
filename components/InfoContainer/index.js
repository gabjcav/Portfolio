import styled from 'styled-components';

const InfoContainer = styled.div`
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
          .live{
            padding: 2%;
            color: var(--dark-gray);
            background-color: var(--light-green); 
            box-shadow: 3px 3px 3px -3px rgba(0, 0, 0, 0.59);
            border-radius: 5%; 
            font-weight: bold; 
            transition: .3s ease; 
            &:hover{
              background-color: white; 
            }
          }
        }
        
`

export default InfoContainer;