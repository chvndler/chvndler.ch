import { Inter } from 'next/font/google';
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

const sohne = localFont({
  src: '../../../public/fonts/sohne/Sohne-buch-regular.woff2',
  display: 'swap',
  style: 'normal',
});

const helmet = localFont({
  src: '../../../public/fonts/other/helm/HelmetNeue-Regular.woff2',
  display: 'swap',
  style: 'normal',
});

export {
  inter,
  sohne,

  // locals..
  helmet,
};
