'use client'

import {useEffect, Suspense} from 'react'
import {isProd, isClient, isDev, siteLog} from '../lib/const'
import {gaTrackingId} from '../lib/const'

import {useAppStore} from '../components/hooks/use-app-store'
import {GoogleAnalytics} from '@/components/google-analytics'

export const AppHooks = () => {
  if (isProd && isClient && isDev) {
    console.log(siteLog)
  }

  useFontsLoaded()

  return gaTrackingId ? (
    <Suspense>
      <GoogleAnalytics />
    </Suspense>
  ) : null
}

// AppHooks.
const useFontsLoaded = () => {
  useEffect(() => {
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