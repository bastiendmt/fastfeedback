import { CSSReset, ThemeProvider } from '@chakra-ui/react';
import { AuthProvider } from '@/lib/auth';
import '@/styles/globals.css';
import customTheme from '@/styles/theme';
import { css, Global } from '@emotion/react';

const GlobalStyle = ({ children }) => {
  return (
    <>
      <CSSReset />
      <Global
        styles={css`
          htlm {
            min-width: 360px;
            scroll-behaviour: smooth;
          }

          #__next {
            display: flex;
            flex-direction: column;
            align-items: center;
            min-height: 100vh;
          }
        `}
      >
        {children}
      </Global>
    </>
  );
};

function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={customTheme}>
      <AuthProvider>
        <GlobalStyle />
        <Component {...pageProps} />
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
