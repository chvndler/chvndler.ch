import React from 'react';
import { Head, Html, Main, NextScript } from 'next/document';
import { getCssText } from '@/lib/stitches.config';

export default function Document() {
  return (
    <Html lang='en'>
      <Head>
        <style id='stitches' dangerouslySetInnerHTML={{ __html: getCssText() }} />
        <link rel='stylesheet' href='https://use.typekit.net/ofb1egk.css' />

        <link rel='amphtml' href='https://chvn.me' />
        <link rel='canonical' href='https://chvn.me' />

        <link rel='apple-touch-icon' sizes='57x57' href='ico/apple-icon-57x57.png' />
        <link rel='apple-touch-icon' sizes='60x60' href='ico/apple-icon-60x60.png' />
        <link rel='apple-touch-icon' sizes='72x72' href='ico/apple-icon-72x72.png' />
        <link rel='apple-touch-icon' sizes='76x76' href='ico/apple-icon-76x76.png' />
        <link rel='apple-touch-icon' sizes='114x114' href='ico/apple-icon-114x114.png' />
        <link rel='apple-touch-icon' sizes='120x120' href='ico/apple-icon-120x120.png' />
        <link rel='apple-touch-icon' sizes='144x144' href='ico/apple-icon-144x144.png' />
        <link rel='apple-touch-icon' sizes='152x152' href='ico/apple-icon-152x152.png' />
        <link rel='apple-touch-icon' sizes='180x180' href='ico/apple-icon-180x180.png' />
        <link rel='icon' type='image/png' sizes='192x192' href='ico/android-icon-192x192.png' />
        <link rel='icon' type='image/png' sizes='32x32' href='ico/favicon-32x32.png' />
        <link rel='icon' type='image/png' sizes='96x96' href='ico/favicon-96x96.png' />
        <link rel='icon' type='image/png' sizes='16x16' href='ico/favicon-16x16.png' />
        <link rel='manifest' href='/manifest.json' />
        <meta name='msapplication-TileColor' content='#ffffff' />
        <meta name='msapplication-TileImage' content='ico/ms-icon-144x144.png' />
        <meta name='theme-color' content='#ffffff' />

        {/* <!-- Preload Jetbrains for CodeBlocks
          <link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono&display=swap" rel="stylesheet" />
          --> */}

        <meta name='googlebot' content='follow, index, noarchive' />
        <meta name='robots' content='follow, index, noarchive' />
        <meta name='msapplication-config' content='/browserconfig.xml' />
        <meta name='description' content='chvndler.ch' />

        <meta property='og:title' content='chvndler®' />
        <meta property='og:url' content='https://chvn.me' />
        <meta property='og:image' content='https://cdn.ady.systems/chvn/assets/socialnash.jpg' />
        <meta property='og:image:secure_url' content='https://cdn.ady.systems/chvn/assets/socialnash.jpg' />
        <meta property='og:image:type' content='image/jpeg' />
        <meta property='og:image:width' content='1600' />
        <meta property='og:image:height' content='900' />
        <meta property='og:image:alt' content='Social Share Image with Logo' />
        <meta name='mobile-web-app-capable' content='yes' />

        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:creator' content='@chv_ndler' />
        <meta name='twitter:site' content='@chv_ndler' />
        <meta property='og:locale' content='en_us' />
        <meta property='og:site_name' content='chvn.me' />
        <meta property='og:type' content='website' />
        <meta property='og:url' content='https://chvndler.ch' />
      </Head>

      <body>
      <Main />
      <NextScript />
      </body>
    </Html>
  );
}
