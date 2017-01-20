import { injectGlobal } from 'styled-components';

/* eslint no-unused-expressions: 0 */
injectGlobal`
  html,
  body {
    height: 100%;
    width: 100%;
  }

  body {
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  body.fontLoaded {
    font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  #app {
    background-color: #fafafa;
    min-height: 100%;
    height: 100%;
    min-width: 100%;
  }
  /**
   * Set Up main Header—Main—Footer flex layout
   */
  div[data-reactroot] {
    min-height: 100%;
    min-width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    & > * { flex-basis: 1 1 auto }
    & > *:nth-child(2) { flex-grow: 99 }
  }

  p,
  label {
    font-family: Georgia, Times, 'Times New Roman', serif;
    line-height: 1.5em;
  }
`;
