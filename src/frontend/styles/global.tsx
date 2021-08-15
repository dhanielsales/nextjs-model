import { css, Global } from '@emotion/react';
import React from 'react';

const globalCss = css`
  body {
    -webkit-font-smoothing: antialiased !important;
  }

  html,
  #__next,
  body {
    height: 100%;
  }

  html {
    font-size: 100%;
  }

  @font-face {
    font-family: 'Lato';
    src: url('/fonts/Lato/Lato-Black.ttf');
    font-weight: 900;
    font-style: normal;
  }
  @font-face {
    font-family: 'Lato';
    src: url('/fonts/Lato/Lato-BlackItalic.ttf');
    font-weight: 900;
    font-style: italic;
  }
  @font-face {
    font-family: 'Lato';
    src: url('/fonts/Lato/Lato-Bold.ttf');
    font-weight: bold;
    font-style: normal;
  }
  @font-face {
    font-family: 'Lato';
    src: url('/fonts/Lato/Lato-BoldItalic.ttf');
    font-weight: bold;
    font-style: italic;
  }
  @font-face {
    font-family: 'Lato';
    src: url('/fonts/Lato/Lato-Italic.ttf');
    font-weight: normal;
    font-style: italic;
  }
  @font-face {
    font-family: 'Lato';
    src: url('/fonts/Lato/Lato-Light.ttf');
    font-weight: 300;
    font-style: normal;
  }
  @font-face {
    font-family: 'Lato';
    src: url('/fonts/Lato/Lato-LightItalic.ttf');
    font-weight: 300;
    font-style: italic;
  }
  @font-face {
    font-family: 'Lato';
    src: url('/fonts/Lato/Lato-Regular.ttf');
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: 'Lato';
    src: url('/fonts/Lato/Lato-Thin.ttf');
    font-weight: 100;
    font-style: normal;
  }
  @font-face {
    font-family: 'Lato';
    src: url('/fonts/Lato/Lato-ThinItalic.ttf');
    font-weight: 100;
    font-style: italic;
  }
`;

const GlobalStyles = () => <Global styles={globalCss} />;

export default GlobalStyles;
