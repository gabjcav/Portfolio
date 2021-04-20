import { createGlobalStyle } from 'styled-components';


const GlobalStyle = createGlobalStyle`
    html,
    a {
    color: inherit;
    text-decoration: none;
    }

    :root {
    --deep-purple: #0c0032;
    --semi-deep-purple: #190061;
    --purple: #240090;
    --light-purple: #3500d3;

    --light-green: #86c232;
    --dark-green: #61892f;

    --gray: #474b4f;
    --semi-dark-gray: #363c41;
    --dark-gray: #222629;
    }

    * {
        box-sizing: border-box;
    }



    body {
        margin: 0;
        font-family: 'Roboto Condensed', sans-serif;
        height: 100%; 
        background-color: var(--dark-gray); 
        color: white; 
        width: 100%;
    }

    @media (max-width: 600px) {

    }

    .count-particles{
        display: none
    }
    #tsparticles{
        width: 50%; 
    }
`

export default GlobalStyle;