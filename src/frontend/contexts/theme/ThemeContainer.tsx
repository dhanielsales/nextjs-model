import { ColorModeProvider, CSSReset } from '@chakra-ui/react';
import { ChakraProvider } from '@chakra-ui/react';
import GlobalStyles from '@frontend/styles/global';
import theme from '@frontend/styles/theme';
import React from 'react';

const ThemeContainer: React.FC = ({ children }) => (
  <ChakraProvider theme={theme}>
    <ColorModeProvider
      options={{
        initialColorMode: 'light',
        useSystemColorMode: true,
      }}
      value="light"
    >
      <GlobalStyles />
      <CSSReset />
      {children}
    </ColorModeProvider>
  </ChakraProvider>
);

export default ThemeContainer;
