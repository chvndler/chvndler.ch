import {Inter} from 'next/font/google'
import localFont from 'next/font/local'

// define your variable fonts
const inter = Inter()
const aspekta = localFont({src: '/fonts/aspekta/AspektaVF.woff2'})

const fraktion = localFont({
  src: '/fonts/fraktion/sans/PPFraktionSans-Variable.ttf',
  display: 'swap',
  variable: '--font-fraktion',
})

const atkinson = localFont({
  src: '/fonts/atkinson/Akinson-Hyperlegible-Regular-102a.woff2',
  display: 'swap',
  variable: '--font-hyperlegible',
})

export {
  //
  inter,
  //
  fraktion,
  //
  aspekta,
  //
  atkinson,
}
