import '@/css/global.scss'

import type {NextComponentType, NextPageContext} from 'next'
import type {AppProps} from 'next/app'
import {ThemeProvider} from 'next-themes'
import NextNProgress from 'nextjs-progressbar'
import * as React from 'react'
import {createContext, useContext} from 'react'
import {darkTheme, globalCss, theme} from 'stitches.config'

import {useFontsLoaded} from '@/hooks/use-fonts-loaded'
import {useFathom} from '@/lib/fathom'

const Context = createContext<{fontsLoaded: boolean}>({fontsLoaded: false})
export const useAppContext = () => useContext(Context)

const App = ({Component, pageProps, ...rest}: AppProps) => {
  useFathom()
  globalStyles()
  useFontsLoaded()

  const getLayout: GetLayoutFn =
    (Component as any).getLayout || (({Component, pageProps}) => <Component {...pageProps} />)

  return (
    <>
      <NextNProgress
        options={{easing: 'ease', speed: 400, showSpinner: false}}
        showOnShallow={false}
        color={'#EAFF97'}
        startPosition={0.4}
        stopDelayMs={300}
        height={3}
      />
      <ThemeProvider
        disableTransitionOnChange
        enableSystem={true}
        attribute={'class'}
        storageKey={'chxn-theme'}
        value={{light: 'light-theme', dark: darkTheme.className}}
        defaultTheme={'light'}>
        {getLayout({Component, pageProps, ...rest})}
      </ThemeProvider>
    </>
  )
}

const globalStyles = globalCss({
  html: {
    margin: 0,
    padding: 0,
    backgroundColor: theme.colors.chxn1
  },
  body: {
    opacity: 0,
    margin: 0,
    WebkitTextSizeAdjust: '100%',
    backgroundColor: theme.colors.chxn1
  }
})

export type Page<P = Record<string, unknown>> = NextComponentType<NextPageContext, Record<string, unknown>, P> & {
  getLayout?: GetLayoutFn<P>
}

export type GetLayoutFn<P = Record<string, unknown>> = (
  props: Omit<AppProps<P>, 'pageProps'> & {pageProps: P}
) => React.ReactNode

export default App
