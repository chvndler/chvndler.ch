import { Inter, Archivo, IBM_Plex_Sans, IBM_Plex_Mono, DM_Sans, DM_Mono } from 'next/font/google';
import localFont from 'next/font/local';

/**
 *
 * Inter Variable
 */
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

/**
 *
 * IBM Plex Sans & IBM Plex Mono
 */
const IBMPlexSans = IBM_Plex_Sans({
  subsets: ['latin', 'latin-ext'],
  display: 'swap',
  weight: ['100', '200', '300', '400', '500', '600', '700'],
});

const IBMPlexMono = IBM_Plex_Mono({
  subsets: ['latin', 'latin-ext'],
  display: 'swap',
  // preload: true,
  weight: ['100', '200', '300', '400', '500', '600', '700'],
});

/**
 *
 * DM Sans & DM Mono
 */
const DMSans = DM_Sans({
  subsets: ['latin', 'latin-ext'],
  display: 'swap',
  preload: true,
  weight: ['400', '500', '700'],
});

const DMMono = DM_Mono({
  subsets: ['latin', 'latin-ext'],
  display: 'swap',
  weight: ['300', '400', '500'],
});

/**
 *
 * Archivo Variable
 */
const archivo = Archivo({
  subsets: ['latin', 'latin-ext'],
  display: 'swap',
  variable: '--font-archivo',
  preload: true,
});

const helmet = localFont({
  src: '../../../public/fonts/helm/HelmetNeue-Regular.woff2',
  display: 'swap',
  style: 'normal',
});

const unica = localFont({
  src: '../../../public/fonts/unica/NeueHaasUnica-Regular.woff2',
  display: 'swap',
  style: 'normal',
});

export {
  inter,
  unica,
  archivo,
  //
  DMSans,
  DMMono,
  //
  IBMPlexSans,
  IBMPlexMono,
  // locals..
  helmet,
};
