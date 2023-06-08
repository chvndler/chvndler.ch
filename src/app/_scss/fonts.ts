import { Inter, Archivo, Inter_Tight } from 'next/font/google';
import localFont from 'next/font/local';

const archivoo = localFont({
  src: '../../../public/fonts/archivo/Archivo-Variable.ttf',
  weight: '1 999',
  style: 'normal',
});

const helmet = localFont({
  src: '../../../public/fonts/helm/HelmetNeue-Regular.woff2',
  display: 'swap',
  style: 'normal',
});

// variable fonts
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

export { archivo, archivoo, helmet, inter, interTight };
