import './_app.css';
import { AppProps } from 'next/app';
import { ChakraBaseProvider, extendTheme } from '@chakra-ui/react';
import { AppContextProvider } from '@/context/AppContext';
import ErrorBoundary from '@/components/ErrorBoundary';
import Layout from '@/components/Layout';

const colors = {
  ED: {
    //color
    primary: '#2541b2',
    secondary: '#f4b51e',
    white: '#fff',
    light: '#f5f5f5',
    dark: '#161616',
    philippineGray: '#8a8a8a',
    lotion: '#FAFAFA',
    mauve: '#632c50',
    lightGray: '#16161680',
    brightGray: '#ebebeb',
    darkGray: '#00000029',
    pumpkin: '#f26f10',
    chineseGold: '#d09e02',
    lightSeaGreen400: '#21a0aa',
    lightSeaGreen600: '#1cb19a',
    mediumAquamarine: '#74d5a4',
    navyBlue: '#123A5C',
    dullSecondary: '#BEA236',

    //font color
    fontColorPrimary: '#2541b2',
    fontColorSecondary: '#f4b51e',
    fontColorLotion: '#FAFAFA',
    fontColorWhite: '#fff',
    fontColorLight: '#f5f5f5',
    fontColorDark: '#161616',
    fontColorLightGray: '#16161680',

    //font family
    fontFamilyPrimary: 'IBM Plex Sans',
    fontFamilySecondary: 'IBM Plex Serif',
    // fonts: {
    //   heading: `'IBM Plex Sans`,
    //   body: `'IBM Plex Serif', sans-serif`,
    // },
    /* Shahdows */
    shahdowPrimary: '#2441b273',
  },
  
};
const theme = extendTheme({colors});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ErrorBoundary>
      <ChakraBaseProvider theme={theme}>
        <AppContextProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </AppContextProvider>
      </ChakraBaseProvider>
    </ErrorBoundary>
  );
}

export default MyApp;
