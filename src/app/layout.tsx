import './app.min.scss'

import {siteURL} from '../lib/const'
import {AppHooks} from './hooks'
import {AppWrapper, ThemeProvider} from '../components/core'
import {Header} from '../components/ui/header'
import {Footer} from '../components/ui/footer'
import type {Metadata} from 'next'
import localFont from 'next/font/local'
const inter = localFont({
  src: '../../public/fonts/inter/Inter-roman.var.woff2',
  display: 'swap',
  variable: '--font-inter',
})

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang='en' className={`antialiased`} suppressHydrationWarning={true}>
      <body className={`bg-bglight antialiased dark:bg-bgdark`} style={{opacity: 0}}>
        <ThemeProvider>
          <main>
            <Header />
            <AppWrapper>{children}</AppWrapper>
            <Footer />
          </main>
          <AppHooks />
        </ThemeProvider>
      </body>
    </html>
  )
}

export const metadata: Metadata = {
  metadataBase: new URL('https://www.chvndler.ch/'),
  title: 'Chandler Chappell',
  description: 'Personal site.',
  manifest: `${siteURL}/manifest.webmanifest`,
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
  openGraph: {
    title: 'Chandler Chappell',
    description: 'Personal site.',
    url: siteURL,
    siteName: 'Chandler Chappell',
    images: [
      {
        url: `${siteURL}/static/img/og.jpg`,
        width: 1800,
        height: 945,
      },
    ],
    locale: 'en-US',
    type: 'website',
  },
  themeColor: [
    {media: '(prefers-color-scheme: light)', color: '#F9F0F0'},
    {media: '(prefers-color-scheme: dark)', color: '#111111'},
  ],
  icons: {
    icon: '/favicon.svg',
    shortcut: '/shortcut-icon.png',
    apple: '/static/favicon/apple-touch-icon.png',
    other: {
      rel: 'apple-touch-icon-precomposed',
      url: '/apple-touch-icon-precomposed.png',
    },
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Chandler Chappell',
    description: 'Personal site.',
    creator: '@chvndler',
    images: ['/static/img/og.jpg'],
  },
  category: 'technology',
  verification: {},
  other: {
    custom: 'none',
  },
}
