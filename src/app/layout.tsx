import './index.scss';

import { siteURL } from '../lib/const';
import { cn } from '../lib/utils';
import { AppHooks } from './hooks';
import { ThemeProvider } from '../context/theme-provider';
import { Header, Footer } from '../components/layout';
import { inter } from './_scss/fonts';

import type { Metadata } from 'next';
// import TopBar from '@/components/shared/topbar';
import NextTopLoader from 'nextjs-toploader';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body className={cn(`${inter.className} font-unica antialiased`)} style={{ opacity: 0 }}>
        <ThemeProvider>
          <NextTopLoader
            color='#2299DD'
            initialPosition={0.08}
            crawlSpeed={200}
            height={2}
            crawl={true}
            showSpinner={false}
            easing='ease'
            speed={300}
            // shadow='0 0 10px #2299DD,0 0 5px #2299DD'
          />
          <Header />
          <main>{children}</main>
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
    images: ['/static/img/og.jpg'],
  },
  category: '',
  verification: {},
  other: {
    custom: 'none',
  },
};
