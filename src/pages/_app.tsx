import ThemeContainer from '@frontend/contexts/theme/ThemeContainer';
import { NextPage } from 'next';
import { AppProps } from 'next/app';

const App: NextPage<AppProps> = ({ Component, pageProps }) => (
  <ThemeContainer>
    <Component {...pageProps} />
  </ThemeContainer>
);

export default App;
