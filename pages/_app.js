import { CSSReset, ThemeProvider } from '@chakra-ui/react';
import { AuthProvider } from '../lib/auth';
import '../styles/globals.css';
import customTheme from '../styles/theme';

function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={customTheme}>
      <AuthProvider>
        <CSSReset />
        <Component {...pageProps} />
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
