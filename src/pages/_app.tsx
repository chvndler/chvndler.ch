import { CmndK } from '@/components/CmndK';
import { css, globalCss } from '@/lib/stitches.config';
import '@/styles/ch-grotesk.css';
import '@/styles/command.css';
import '@/styles/global.css';
import { res } from '@/styles/res';
import { Box } from '@/ui';
import { ThemeProvider } from 'next-themes';
import { AppProps } from 'next/app';
import React from 'react';


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
      <ThemeProvider
        disableTransitionOnChange
        attribute='class'
        value={{ theme: 'default-theme' }}
      >
        <Box css={{ zIndex: '0', backgroundColor: 'transparent' }}>
          <div
            className={appWrapper({
              display: 'flex',
              flexDirection: 'column',
            })}
          >
            <Component {...pageProps} />

          </div>
        </Box>
      </ThemeProvider>
    </>
  );
};

export default App;
