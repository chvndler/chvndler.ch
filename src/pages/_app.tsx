/**
 * Copyright (C) 2022 @chvndler
 * All Rights Reserved.
 *
 * You may use, distribute and modify this code under the
 * terms of the MIT license. You should have received a
 * copy of the MIT license with this repository.
 *
 * See https://github.com/chvndler
 *
 * @format
 */

import '@/css/global.scss'

import type {NextComponentType, NextPageContext} from 'next'
import type {AppProps} from 'next/app'
import {ThemeProvider} from 'next-themes'
import NextNProgress from 'nextjs-progressbar'
import * as React from 'react'
import {createContext, useContext} from 'react'
import {darkTheme, globalCss} from 'stitches.config'

import {AnalyticsProvider} from '@/components/sxripts'
import {useAppStore} from '@/context/use-app-store'

const Context = createContext<{fontsLoaded: boolean}>({fontsLoaded: false})
export const useAppContext = () => useContext(Context)

const App = ({Component, pageProps, ...rest}: AppProps) => {
 globalStyles()
 useFontsLoaded()

 const getLayout: GetLayoutFn =
  (Component as any).getLayout || (({Component, pageProps}) => <Component {...pageProps} />)

 return (
  <>
   <AnalyticsProvider>
    <NextNProgress
     options={{easing: 'ease', speed: 400, showSpinner: false}}
     showOnShallow={false}
     color={'#EAFF97'}
     startPosition={0.4}
     stopDelayMs={300}
     height={2}
    />
    <ThemeProvider
     disableTransitionOnChange
     attribute={'class'}
     value={{light: 'light-theme', dark: darkTheme.className}}
     defaultTheme={'light-theme'}>
     {getLayout({Component, pageProps, ...rest})}
    </ThemeProvider>
   </AnalyticsProvider>
  </>
 )
}

// globalCss
const globalStyles = globalCss({
 html: {
  margin: 0,
  padding: 0,
  backgroundColor: '$chxn1'
 },
 body: {
  opacity: 0,
  margin: 0,
  WebkitTextSizeAdjust: '100%',
  backgroundColor: '$chxn1'
 }
})

/**
 * App Hooks...
 */
const useFontsLoaded = () => {
 React.useEffect(() => {
  const maxWaitTime = 1500 // tweak this as needed.

  const timeout = window.setTimeout(() => {
   onReady()
  }, maxWaitTime)

  function onReady() {
   window.clearTimeout(timeout)
   useAppStore.setState({fontsLoaded: true})
   document.documentElement.classList.add('fonts-loaded')
  }

  try {
   document.fonts.ready
    .then(() => {
     onReady()
    })
    .catch((error: unknown) => {
     console.error(error)
     onReady()
    })
  } catch (error) {
   console.error(error)
   onReady()
  }
 }, [])
}

export type Page<P = Record<string, unknown>> = NextComponentType<NextPageContext, Record<string, unknown>, P> & {
 getLayout?: GetLayoutFn<P>
}

export type GetLayoutFn<P = Record<string, unknown>> = (
 props: Omit<AppProps<P>, 'pageProps'> & {pageProps: P}
) => React.ReactNode

export default App
