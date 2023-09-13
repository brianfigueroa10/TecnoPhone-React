import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

    html{
    scroll-behavior: smooth;
    }
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        background-color: #222;
        font-family: 'Poppins', sans-serif;
    }
`;
