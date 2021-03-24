import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

    body {
        padding: 0;
        margin: 0;
        font-family: 'Oswald';
        height: 100%; 
        background-color: var(--dark-gray); 
        color: white; 
    }
`

export default GlobalStyle;