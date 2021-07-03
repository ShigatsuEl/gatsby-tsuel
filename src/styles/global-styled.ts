import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

export const GlobalStyle = createGlobalStyle`
  ${normalize}

  * {
    box-sizing: border-box;
  }

  a {
    text-decoration:none;
    cursor: pointer;
  }

  ul, ol, li {
    list-style: none;
  }
`;
