import {
  Inter,
  Archivo,
  Inter_Tight,
  IBM_Plex_Sans,
  IBM_Plex_Mono,
} from 'next/font/google';
import localFont from 'next/font/local';

const helmet = localFont({
  src: '../../../public/fonts/helm/HelmetNeue-Regular.woff2',
  display: 'swap',
  style: 'normal',
});

// variable Google fonts
const IBMPlexSans = IBM_Plex_Sans({
  subsets: ['latin', 'latin-ext'],
  display: 'swap',
  preload: true,
  weight: '500',
});

const IBMPlexMono = IBM_Plex_Mono({
  subsets: ['latin', 'latin-ext'],
  display: 'swap',
  // preload: true,
  weight: '500',
});

const archivo = Archivo({
  subsets: ['latin', 'latin-ext'],
  display: 'swap',
  variable: '--font-archivo',
  preload: true,
});

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const interTight = Inter_Tight({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter-tight',
});

export { archivo, IBMPlexSans, IBMPlexMono, helmet, inter, interTight };
