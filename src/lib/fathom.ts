import * as Fathom from 'fathom-client'
import {useRouter} from 'next/router'
import * as React from 'react'

const FATHOM = process.env.FATHOM_SITE_ID

export const useFathom = () => {
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
  // Record a pageview when route changes
  router.events.on('routeChangeComplete', onRouteChangeComplete)

  // Unassign event listener
  return () => {
   router.events.off('routeChangeComplete', onRouteChangeComplete)
  }
 }, [router.events])
}
