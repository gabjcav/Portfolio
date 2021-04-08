import styled from 'styled-components';

const Line = styled.div`
    display:block;
    height:2px;
    width: 100%; 
    margin: 1% auto; 
    background-image: -webkit-linear-gradient(left , var(--dark-gray) 4%, var(--light-green) 50%, var(--dark-gray) 96%);

    @media (max-width:600px) {
        background-image: -webkit-linear-gradient(left , var(--gray) 4%, var(--light-green) 50%, var(--gray) 96%);
    }
`

export default Line; 