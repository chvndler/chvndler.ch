import '@/css/global.scss'

import * as Fathom from 'fathom-client'
import type {NextComponentType, NextPageContext} from 'next'
import type {AppProps} from 'next/app'
// import {useFathom} from '@/lib/fathom'
import {useRouter} from 'next/router'
import {ThemeProvider} from 'next-themes'
import NextNProgress from 'nextjs-progressbar'
import * as React from 'react'
import {createContext, useContext} from 'react'
import {darkTheme, globalCss, theme} from 'stitches.config'

import {useAppStore} from '@/context/use-app-store'

const FATHOM = process.env.FATHOM_SITE_ID

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

const Context = createContext<{fontsLoaded: boolean}>({fontsLoaded: false})
export const useAppContext = () => useContext(Context)

const App = ({Component, pageProps, ...rest}: AppProps) => {
  /**
   * Sripts..
   */
  // useFathom()
  globalStyles()
  useFontsLoaded()

  const router = useRouter()

  React.useEffect(() => {
    /**
     * Initialize Fathom...
     * be sure to add the exact match of your domain.
     * DO NOT include ( https:// )
     * DO include ( www. ) if you're using it.
     */
    Fathom.load(FATHOM, {
      includedDomains: ['chvndler.ch', 'www.chvndler.ch', 'api.chvndler.ch']
    })

    function onRouteChangeComplete() {
      Fathom.trackPageview()
    }

    router.events.on('routeChangeComplete', onRouteChangeComplete)

    return () => {
      router.events.off('routeChangeComplete', onRouteChangeComplete)
    }
  }, [router.events])

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
        height={2}
      />
      <ThemeProvider
        disableTransitionOnChange
        attribute={'class'}
        value={{light: 'light-theme', dark: darkTheme.className}}
        defaultTheme={'light-theme'}>
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
