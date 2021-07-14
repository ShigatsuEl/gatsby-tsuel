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

.line-numbers-rows span::before {
  color: #e0e0e0;
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

.command-line-prompt > span::before {
  color: #e0e0e0;
}

code[class*="language-"],
pre[class*="language-"] {
	color: #e0e0e0;
	background: none;
	font-family: Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;
	text-align: left;
	white-space: pre;
	word-spacing: normal;
	word-break: normal;
	word-wrap: normal;
	line-height: 1.5;

	-moz-tab-size: 4;
	-o-tab-size: 4;
	tab-size: 4;

	-webkit-hyphens: none;
	-moz-hyphens: none;
	-ms-hyphens: none;
	hyphens: none;

}

/* Inline code */
:not(pre) > code[class*='language-'] {
  padding: .11em .3em;
  margin: 0 .1em;
  border-radius: .3em;
  white-space: normal;
  background: #fffbfe;
  color: #da3a6a;
  border: 1.2px solid #da3a6a;
}

/* token set */
.token.comment,
.token.block-comment,
.token.prolog,
.token.doctype,
.token.cdata {
  color: #616161;
}

.token.punctuation {
  color: #e0e0e0;
}

.token.tag,
.token.attr-name,
.token.namespace,
.token.deleted {
  color: #e2777a;
}

.token.function-name {
  color: #6196cc;
}

.token.boolean,
.token.number,
.token.function {
  color: #ff9100;
}

.token.property,
.token.class-name,
.token.constant,
.token.symbol {
  color: #ffff00;
}

.token.selector,
.token.important,
.token.atrule,
.token.keyword,
.token.builtin {
  color: #b388ff;
}

.token.string,
.token.char,
.token.attr-value,
.token.regex,
.token.variable {
  color: #00e676;
}

.token.operator,
.token.entity,
.token.url {
  color: #2bccca;
}

.token.important,
.token.bold {
  font-weight: bold;
}
.token.italic {
  font-style: italic;
}

.token.entity {
  cursor: help;
}

.token.inserted {
  color: green;
}
`;
