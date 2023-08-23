import { createGlobalStyle } from "styled-components";


const GlobalStyled = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body{
        background-color: #ccc;
    }
`

export default GlobalStyled