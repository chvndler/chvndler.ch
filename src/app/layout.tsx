import './index.scss';

import { cn } from '@/lib/utils';
import { siteURL } from '@/lib/const';
import { AppHooks } from './hooks';
import { ThemeProvider } from '@/context/theme-provider';
import { Header, Footer } from '@/components/layout';
import { twk } from '@/lib/fonts';
import { CommandMenu } from '@/components/shared/cmdk';
import { TopLoader } from '@/components/primitives';
import { VerticalFade } from '@/components/shared/faders';
import type { Metadata } from 'next';

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
        className={cn(`${twk.className} align-middle antialiased`)}
        style={{ opacity: 0 }}>
        <ThemeProvider>
          <TopLoader />
          <Header />
          <VerticalFade
            side='top'
            style={{
              height: 140,
            }}
          />

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
    userScalable: false,
  },
  openGraph: {
    title: 'Chandler Chappell',
    description: 'Personal site.',
    url: siteURL,
    siteName: 'Chandler Chappell',
    images: [
      {
        url: `${siteURL}/og.png`,
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
    icon: '/favicon.ico',
    shortcut: '/shortcut-icon.png',
    apple: '/static/favicon/apple-touch-icon.png',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Chandler Chappell',
    description: 'Personal site.',
    creator: '@chvndlerch',
    images: ['/og-alt.png'],
  },
  category: '',
  verification: {},
  other: {
    custom: 'none',
  },
};
