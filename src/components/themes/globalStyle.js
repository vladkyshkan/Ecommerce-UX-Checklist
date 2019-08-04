import { createGlobalStyle } from "styled-components";
import InterRegular from "../../fonts/InterRegular.woff";
import InterRegular2 from "../../fonts/InterRegular.woff2";
import InterMedium from "../../fonts/InterMedium.woff";
import InterMedium2 from "../../fonts/InterMedium.woff2";
import InterBold from "../../fonts/InterBold.woff";
import InterBold2 from "../../fonts/InterBold.woff2";

const GlobalStyle = createGlobalStyle`
  *, *::after, *::before {
    box-sizing: border-box;
  }

  @font-face {
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    src: url(${InterRegular2}) format('woff2'), url(${InterRegular}) format('woff');
  }

  @font-face {
    font-family: "Inter";
    font-style: normal;
    font-weight: 500;
    src: url(${InterMedium2}) format('woff2'), url(${InterMedium}) format('woff');
  }

  @font-face {
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    src: url(${InterBold2}) format('woff2'), url(${InterBold}) format('woff');
  }
  
  body {
    margin: 0;
    font-family: "Inter";
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.body};
    border-top: 3px solid rgba(0, 193, 147, 1);
  }

  a {
    color: rgba(0, 193, 147, 1);
  }

  a:hover {
    color: rgba(0, 193, 147, 0.5);
  }

  button:focus {
    outline: 0;
  }
`;

export default GlobalStyle;
