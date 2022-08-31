// import { CmndK } from '@/components/CmndK';
import { css, darkTheme, globalCss } from '@/lib/stitches.config';
import '@/styles/miumiu.css';
import '@/styles/ch-grotesk.css';
import '@/styles/command.css';
import '@/styles/global.css';
import '@/styles/dracula.css';
import { res } from '@/styles/res';
import { Box } from '@/ui';
import { ThemeProvider } from 'next-themes';
import { AppProps } from 'next/app';
import React from 'react';
import Head from 'next/head';
import { NavBar } from '@/components/NavBar';


const globalStyles = globalCss(res, {
  html: {
    margin: 0,
    padding: 0,
    overflowX: 'hidden',
    backgroundColor: '$mauve1',

    minHeight: '-webkit-fill-available',
  },
  body: {
    margin: 0,
    color: '$hiContrast',
    WebkitTextSizeAdjust: '100%',
    backgroundColor: '$mauve1',
    minHeight: '-webkit-fill-available',
  },
});


const appWrapper = css({
  include: ['box', 'minHeightScreen'],
});

const App = ({ Component, pageProps }: AppProps) => {
  globalStyles();

  return (
    <>
      <Head>
        <title>__</title>
        <meta name='viewport' content='width=device-width, user-scalable=no' />
      </Head>
      <ThemeProvider
        disableTransitionOnChange
        attribute='class'
        value={{ light: 'light-theme', dark: darkTheme.className }}
        defaultTheme='system'
      >
        <Box css={{ zIndex: '0', backgroundColor: 'transparent' }}>
          <div
            className={appWrapper({
              display: 'flex',
              flexDirection: 'column',
            })}
          >
            <NavBar />
            <Component {...pageProps} />
          </div>
        </Box>
      </ThemeProvider>
    </>
  );
};

export default App;
