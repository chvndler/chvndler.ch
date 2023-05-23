import {Inter} from 'next/font/google'
import localFont from 'next/font/local'

// define your variable fonts
const inter = Inter()
const aspekta = localFont({src: '/fonts/aspekta/AspektaVF.woff2'})
const robotoFlex = localFont({src: '/fonts/roboto-flex/Roboto-Flex-V.ttf'})
const atkinson = localFont({
  src: '/fonts/atkinson/Akinson-Hyperlegible-Regular-102a.woff2',
})

export {inter, aspekta, atkinson, robotoFlex}
