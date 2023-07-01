import './index.scss';

import { siteURL } from '../lib/const';
import { cn } from '../lib/utils';
import { AppHooks } from './hooks';
import { ThemeProvider } from '../context/theme-provider';
import { Header, Footer } from '../components/layout';
import { favorit } from './_scss/fonts';

import type { Metadata } from 'next';
import TopLoader from '@/components/primitives/loader';
import { CommandMenu } from '@/components/core/cmdk';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang='en'
      suppressHydrationWarning>
      <body
        className={cn(`${favorit.className} font-unica antialiased`)}
        style={{ opacity: 0 }}>
        <ThemeProvider>
          <TopLoader />
          <Header />
          <main>{children}</main>
          <Footer />

          <CommandMenu />
        </ThemeProvider>
        <AppHooks />
      </body>
    </html>
  );
}

export const metadata: Metadata = {
  metadataBase: new URL('https://www.chvndler.ch'),
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
        url: `${siteURL}/og-green.jpg`,
        width: 1200,
        height: 627,
      },
    ],
    locale: 'en-US',
    type: 'website',
  },
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#FFFFFF' },
    { media: '(prefers-color-scheme: dark)', color: '#171717' },
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
    images: ['/og-green.jpg'],
  },
  category: '',
  verification: {},
  other: {
    custom: 'none',
  },
};
