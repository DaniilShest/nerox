import { ThemeProvider } from 'next-themes';
import AppProvider from '../context/AppContext';
// настройки плагина
import './i18n';
import '../index.scss';
if (typeof window !== "undefined") {
  require("bootstrap/dist/js/bootstrap");
}

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider defaultTheme='light'>
      <AppProvider>
        <Component {...pageProps} />
      </AppProvider>
    </ThemeProvider>
  )
}

export default MyApp
