import { css, darkTheme, globalCss } from '@/lib/stitches.config';
import '@/styles/global.scss';
import '@/styles/dracula.css';
import { res } from '@/styles/res';
import { Box } from '@/ui';
import { ThemeProvider } from 'next-themes';
import { AppProps } from 'next/app';
import React from 'react';
import Head from 'next/head';
import { CmndK } from '@/components/CmndK';

import { atelierLog, isClient, isDev, isProd } from '@/lib/constants';

// TODO delete this basement log if not a basement project.
if (isProd && isClient && isDev) {
  // eslint-disable-next-line no-console
  console.log(atelierLog);
}

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

  React.useEffect(() => {
    if (isDev) return;
  });

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
            <CmndK />
            <Component {...pageProps} />
          </div>
        </Box>
      </ThemeProvider>
    </>
  );
};

export default App;
