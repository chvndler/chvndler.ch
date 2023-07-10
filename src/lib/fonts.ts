import { Inter } from 'next/font/google';
import localFont from 'next/font/local';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const sohne = localFont({
  src: '../../public/fonts/sohne/Sohne-buch-regular.woff2',
  display: 'swap',
  style: 'normal',
});

const favorit = localFont({
  src: '../../public/fonts/favorit/ABCFavorit-Regular.woff2',
  style: 'normal',
});

const twk = localFont({
  src: '../../public/fonts/twk/TWKLausanne-400.woff2',
  style: 'normal',
});

const mono = localFont({
  src: '../../public/fonts/ibm-plex-mono/IBMPlexMono-Text.woff2',
});

export { inter, favorit, sohne, twk, mono };
