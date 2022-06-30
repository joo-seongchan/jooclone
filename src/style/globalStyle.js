import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const GlobalStyle = createGlobalStyle`

${reset}

*{
    box-sizing: border-box;
}

body{
    font-family: 'Noto Sans KR', sans-serif;
    background-color: gray;
}
a{
    text-decoration: none;
}
`;
