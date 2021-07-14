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

/**
 * Add back the container background-color, border-radius, padding, margin
 * and overflow that we removed from <pre>.
 */
.gatsby-highlight-code-line {
  background-color: #022a4b;
  display: block;
  margin-right: -1em;
  margin-left: -1em;
  padding-right: 1em;
  padding-left: 0.75em;
  border-left: 0.25em solid #8b00ff;
}

.gatsby-highlight {
  background-color: #242323;
  border-radius: 0.3em;
  margin: 0.5em 0;
  padding: 1em;
  overflow: auto;
}

.gatsby-highlight pre[class*="language-"] {
  background-color: transparent;
  margin: 0;
  padding: 0;
  overflow: initial;
  float: left;
  min-width: 100%;
}

/* If you only want to use line numbering */
.gatsby-highlight pre[class*="language-"].line-numbers {
  padding: 0;
  padding-left: 2.8em;
  overflow: initial;
}

.command-line-prompt > span:before {
  color: #999;
  content: " ";
  display: block;
  padding-right: 0.8em;
}

/* Prompt for all users */
.command-line-prompt > span[data-user]:before {
  content: "[" attr(data-user) "@" attr(data-host) "] $";
}

/* Prompt for root */
.command-line-prompt > span[data-user="root"]:before {
  content: "[" attr(data-user) "@" attr(data-host) "] #";
}

.command-line-prompt > span[data-prompt]:before {
  content: attr(data-prompt);
}
`;
