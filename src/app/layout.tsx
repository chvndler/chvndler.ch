import './app.min.scss';

import { siteURL } from '../lib/const';
import { AppHooks } from './hooks';
import { ThemeProvider } from '../context/theme-provider';
import { AppWrapper, Header, Footer } from '../components/layout';
import { ColorBar } from '../components/shared';
import type { Metadata } from 'next';
import { cn } from '../lib/utils';
import { archivo } from './_scss/fonts';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(`${archivo.className}, font-archivo antialiased`)} style={{ opacity: 1 }}>
        <ThemeProvider>
          <ColorBar />
          <Header />
          <AppWrapper>{children}</AppWrapper>
          <Footer />
        </ThemeProvider>
        <AppHooks />
      </body>
    </html>
  );
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
    { media: '(prefers-color-scheme: light)', color: '#F9F0F0' },
    { media: '(prefers-color-scheme: dark)', color: '#111111' },
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
};
