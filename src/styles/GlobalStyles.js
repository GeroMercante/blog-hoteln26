import { createGlobalStyle } from "styled-components";
import '@fontsource/poppins';
import '@fontsource/playfair-display';
// font-family: "Playfair Display";
const GlobalStyles = createGlobalStyle`
    *,*::before,*::after{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        scroll-behavior: smooth;
    }

    body{
        font-family: "Poppins", sans-serif;
        overflow-x: hidden;
        scroll-behavior: smooth;
        margin: 0;
        padding: 0;
    }

    h1,h2,
    h3,h4,
    h5,h6,
    p,a,
    button{
        margin: 0;
        padding: 0;
    }

    a{
        color: inherit;
        text-decoration: none;
    }

    li{
      list-style: none;
    }
    
    button{
      border: none;
      outline: none;
    }

    img,
    video{
      width: 100%;
      height: 100%;
    }
`;

export default GlobalStyles;
