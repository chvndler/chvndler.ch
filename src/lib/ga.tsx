/** @format */

import {useRouter} from 'next/router'
import Script from 'next/script'
import * as React from 'react'

import {gaTrackingId} from './constants'

export const GA_TRACKING_ID = process.env.GOOGLE_TAG_MANAGER_ID
export const DOMAIN = process.env.NEXT_PUBLIC_SITE_URL

declare global {
  interface Window {
    gtag: undefined | ((...args: any[]) => void)
  }
}

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const pageview = (url: string) => {
  if (!window.gtag) {
    console.warn('window.gtag is not defined')
    return
  }
  window.gtag('config', GA_TRACKING_ID, {
    page_path: url
  })
}

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const event = ({
  action,
  category,
  label,
  value
}: {
  action: string
  category: string
  label: string
  value: string
}) => {
  if (!window.gtag) {
    console.warn('window.gtag is not defined')
    return
  }
  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value: value
  })
}

// Put this in _document.tsx
export const GAScripts = () => {
  return (
    <>
      <Script strategy='afterInteractive' async src={`https://www.googletagmanager.com/gtag/js?id=${gaTrackingId}`} />
      <Script
        id='gtag-init'
        strategy='afterInteractive'
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${gaTrackingId}', {
              page_path: window.location.pathname,
              page_view: window.location.pathname,
              page_title: window.location.pathname,
            });
          `
        }}
      />
    </>
  )
}

export const useAppGA = () => {
  const router = useRouter()

  React.useEffect(() => {
    const handleRouteChange = (url: string) => {
      pageview(url)
    }
    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])
}
