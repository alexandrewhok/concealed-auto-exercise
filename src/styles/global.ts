import { createGlobalStyle } from "styled-components";
import { theme } from "./theme";

export const GlobalStyle = createGlobalStyle`
  html {
    font-size: 16px;
    font-family: ${theme.fontFamily};
  }

  body {
    font-family: ${theme.fontFamily};
    background-color: ${theme.colors.base};
    color: ${theme.colors.primary};
  }

  h1, h2, h3, h4, h5, h6, p {
    font-family: ${theme.fontFamily};
  }

  h1 { font-size: ${theme.typography.h1}; font-weight: 700; }
  h2 { font-size: ${theme.typography.h2}; font-weight: 700; }
  h3 { font-size: ${theme.typography.h3}; font-weight: 600; }
  h4 { font-size: ${theme.typography.h4}; font-weight: 600; }
  h5 { font-size: ${theme.typography.h5}; font-weight: 400; }
  h6 { font-size: ${theme.typography.h6}; font-weight: 300; }
  p  { font-size: ${theme.typography.p}; }
`;
