import '@/css/global.scss';

import type { NextComponentType, NextPageContext } from 'next';
import type { AppProps } from 'next/app';
import { RealViewportProvider } from 'next-real-viewport';
import { ThemeProvider } from 'next-themes';
import * as React from 'react';
import { createContext, useContext } from 'react';
import { darkTheme, globalCss } from 'stitches.config';

import { useAppStore } from '@/context/use-app-store';
import { atelierLog, isClient, isDev, isProd } from '@/lib/constants';

const Context = createContext<{ fontsLoaded: boolean }>({ fontsLoaded: false });
export const useAppContext = () => useContext(Context);

// TODO delete this basement log if not a basement project.
if (isProd && isClient) {
  // eslint-disable-next-line no-console
  console.log(atelierLog);
}

export type Page<P = Record<string, unknown>> = NextComponentType<NextPageContext, Record<string, unknown>, P> & {
  getLayout?: GetLayoutFn<P>;
};

export type GetLayoutFn<P = Record<string, unknown>> = (
  props: Omit<AppProps<P>, 'pageProps'> & { pageProps: P }
) => React.ReactNode;

// apply globalCss..
const globalStyles = globalCss({
  html: {
    margin: 0,
    padding: 0,
    overflowX: 'hidden',
    minHeight: '-webkit-fill-available',
    backgroundColor: '$chxn1'
  },
  body: {
    opacity: 0,
    margin: 0,
    WebkitTextSizeAdjust: '100%',
    minHeight: '-webkit-fill-available',
    backgroundColor: '$chxn1'
  }
});

// App Begin...
const App = ({ Component, pageProps, ...rest }: AppProps) => {
  globalStyles();

  React.useEffect(() => {
    if (!isDev) return;
    let mousetrapRef: Mousetrap.MousetrapInstance | undefined = undefined;
    import('mousetrap').then(({ default: mousetrap }) => {
      mousetrapRef = mousetrap.bind(['command+i', 'ctrl+i', 'alt+i'], () => {
        document.body.classList.toggle('inspect');
      });
    });

    return () => {
      mousetrapRef?.unbind(['command+i', 'ctrl+i', 'alt+i']);
    };
  }, []);

  React.useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.code === `Tab`) {
        document.body.classList.add('user-is-tabbing');
      }
    }

    function handleMouseDown() {
      document.body.classList.remove('user-is-tabbing');
    }

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('mousedown', handleMouseDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('mousedown', handleMouseDown);
    };
  }, []);

  React.useEffect(() => {
    const maxWaitTime = 1500; // tweak this as needed.

    const timeout = window.setTimeout(() => {
      onReady();
    }, maxWaitTime);

    function onReady() {
      window.clearTimeout(timeout);
      useAppStore.setState({ fontsLoaded: true });
      document.documentElement.classList.add('fonts-loaded');
    }

    try {
      document.fonts.ready
        .then(() => {
          onReady();
        })
        .catch((error: unknown) => {
          console.error(error);
          onReady();
        });
    } catch (error) {
      console.error(error);
      onReady();
    }
  }, []);

  const getLayout: GetLayoutFn =
    (Component as any).getLayout || (({ Component, pageProps }) => <Component {...pageProps} />);

  return (
    <>
      <ThemeProvider
        disableTransitionOnChange
        attribute="class"
        value={{ light: 'light-theme', dark: darkTheme.className }}
        defaultTheme="system"
      >
        <RealViewportProvider>{getLayout({ Component, pageProps, ...rest })}</RealViewportProvider>
      </ThemeProvider>
    </>
  );
};

export default App;
