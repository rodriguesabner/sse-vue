import { injectGlobal } from 'vue-styled-components';

export default injectGlobal`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    border: 0;
    font-family: 'Roboto', sans-serif;
  }

  html, body, #app {
    width: 100%;
    height: 100vh;
  }

`;
