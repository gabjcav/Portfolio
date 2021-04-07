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
        }
`

export default InfoContainer;