'use client'

// client

import {Analytics as VercelAnalytics} from '@vercel/analytics/react'
import {GoogleAnalytics as GAnalytics} from './google-analytics'

export function AppAnalytics() {
  return <VercelAnalytics />
}

export function GoogleAnalytics() {
  return <GAnalytics />
}
