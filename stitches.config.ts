/** @format */

import {
 blackA,
 gray,
 grayA,
 grayDark,
 grayDarkA,
 mauve,
 mauveA,
 mauveDark,
 mauveDarkA,
 sage,
 sageA,
 sageDark,
 sageDarkA,
 slate,
 slateA,
 slateDark,
 slateDarkA,
 whiteA
} from '@radix-ui/colors'
import type * as Stitches from '@stitches/react'
import {createStitches, defaultThemeMap} from '@stitches/react'

export type {VariantProps} from '@stitches/react'

export const {
 styled,
 css,
 theme,
 createTheme,
 getCssText,
 globalCss,
 keyframes,
 config,
 reset
} = createStitches({
 themeMap: {
  ...defaultThemeMap
 },
 prefix: 'atlr-',
 theme: {
  colors: {
   ...gray,
   ...grayA,
   ...mauve,
   ...mauveA,
   ...slate,
   ...slateA,
   ...sage,
   ...sageA,
   ...whiteA,
   ...blackA,

   background: '#101010',
   black: '#000000',
   white: '#ffffff',
   blur: 'rgba(72,67,73,0.1)',
   trnsprnt: 'transparent',
   tp: 'transparent',

   fizz: 'rgb(218, 255, 71)',
   heliotrope: 'rgb(202, 96, 255)',

   honeySuckle: 'rgb(226, 255, 112)',
   portage: 'rgb(186, 143, 247)',

   ruby: 'rgb(216, 43, 98)',
   winterSky: 'rgb(255, 50, 115)',

   chxn1: '#f7f0f0',
   chxn2: '#bcc1cd',
   chxn3: '#A09FA6',
   chxn4: '#484349',
   chxn4A: 'rgba(72, 67, 73, 0.8)',
   chxn5: '#2b2a30',
   chxn6: '#5e7ce2',
   chxn7: '#ff3333',
   chxn8: '#72f863',
   chxn9: '#ff3474',
   chxn10: '#a288a6',
   chxn11: '#93827f',
   chxn12: '#222222',
   chxn13: '#BA8FF7',
   tartOrange: '#ff3333',
   berry: '#686799',

   ig: '#ff3333',
   insta: '#ff3474',
   maxBlue: '#5e7ce2',
   twitter: '#1DA1F2',
   github: '#6cc644',
   githubAlt: '#6e5494',
   arena: '#484349',
   linkedin: '#0077B5',
   readcv: '#8A918E',
   fb: '#4267B2'
  },
  fonts: {
   inter: '"Inter", sans-serif',
   scto: '"Scto Grotesk A Regular", sans-serif',
   sctoBold: '"Scto Grotesk A Bold", sans-serif',
   system:
    '-apple-system,Helvetica,sans-serif,"Apple Color Emoji","Segoe UI Emoji", sans-serif',

   mono: '"At Hauss Mono Retina", monospace',
   monoBold: '"At Hauss Mono Bold", monospace',
   monoMedium: '"At Hauss Mono Medium", monospace',
   monoSemibold: '"At Hauss Mono Semibold", monospace',

   helvRound: '"Helvetica Rounded Bold", sans-serif',

   panB: '"PP Pangram Sans Rounded Bold", sans-serif',
   panSb: '"PP Pangram Sans Rounded Semibold", sans-serif',
   panMd: '"PP Pangram Sans Rounded Medium", sans-serif',
   panRg: '"PP Pangram Sans Rounded Regular", sans-serif',

   latBoldStd: '"Lateral Standard Bold", sans-serif',
   latMedStd: '"Lateral Standard Medium", sans-serif',
   latRegStd: '"Lateral Standard Regular", sans-serif',
   latRegExtd: '"Lateral Extended Regular", sans-serif',
   latMedExtd: '"Lateral Extended Medium", sans-serif',
   latBoldExtd: '"Lateral Extended Bold", sans-serif'
  },
  fontSizes: {
   1: '12px',
   2: '14px',
   3: '16px',
   4: '18px',
   5: '20px',
   6: '24px',
   7: '32px',
   8: '36px',
   9: '40px',
   10: '48px',
   11: '64px',
   12: '88px',
   13: '114px',
   14: '120px'
  },
  lineHeights: {
   1: '12px',
   2: '14px',
   3: '17px',
   4: '18px',
   5: '20px',
   6: '25px',
   7: '32px',
   8: '39px',
   9: '48px',
   10: '48px',
   12: '88px',
   13: '114px',
   14: '120px'
  },
  space: {
   1: '4px',
   2: '8px',
   3: '16px',
   4: '32px',
   5: '64px',
   6: '128px',
   7: '256px',
   8: '512px'
  },
  sizes: {
   1: '4px',
   2: '8px',
   3: '16px',
   4: '32px',
   5: '64px',
   6: '128px',
   7: '256px',
   8: '512px'
  },
  radii: {
   1: '2px',
   2: '4px',
   3: '8px',
   4: '10px',
   5: '12px',
   6: '14px',
   round: '9999px'
  }
 },
 media: {
  /**
   * @breakpoints
   */
  xs: '(max-width: 480px)',
  sm: '(max-width: 520px)',
  md: '(max-width: 740px)',
  lg: '(max-width: 860px)',
  xl: '(max-width: 1200px)',
  xxl: '(min-width: 1201px)',

  bp1: `(min-width: 520px)`,
  bp2: `(min-width: 900px)`,
  bp3: `(min-width: 1200px)`,
  bp4: `(min-width: 1580px)`,

  /**
   * @user prefs
   */
  motion: '(prefers-reduced-motion)',
  hover: '(any-hover: hover)',
  dark: '(prefers-color-scheme: dark)',
  light: '(prefers-color-scheme: light)'

  /* alternate usage of bp's
   * bp1: `(min-width: 520px)`,
   * bp2: `(min-width: 900px)`,
   * bp3: `(min-width: 1200px)`,
   * bp4: `(min-width: 1580px)`,
   */
 },
 utils: {
  font: (value: Stitches.PropertyValue<'fontFamily'>) => ({
   /**
    * @example font: theme.font.value,
    */
   fontFamily: value
  }),
  p: (value: Stitches.PropertyValue<'padding'>) => ({
   /**
    * @example p: 2,
    * @returns padding: 2;
    */
   padding: value
  }),
  linearGradient: () => (value: Stitches.PropertyValue<'backgroundImage'>) => ({
   backgroundImage: `linear-gradient(${value})`
  }),
  px: (value: Stitches.PropertyValue<'paddingLeft'>) => ({
   paddingLeft: value,
   paddingRight: value
  }),
  py: (value: Stitches.PropertyValue<'paddingTop'>) => ({
   paddingTop: value,
   paddingBottom: value
  }),
  pL: (value: Stitches.PropertyValue<'paddingLeft'>) => ({
   paddingLeft: value
  }),
  pR: (value: Stitches.PropertyValue<'paddingRight'>) => ({
   paddingRight: value
  })
 }
})

export type CSS = Stitches.CSS<typeof config>

export const darkTheme = createTheme('dark-theme', {
 colors: {
  ...grayDark,
  ...grayDarkA,
  ...mauveDark,
  ...mauveDarkA,
  ...slateDark,
  ...slateDarkA,
  ...sageDark,
  ...sageDarkA,

  fizz: 'rgb(202, 96, 255)',
  heliotrope: 'rgb(226, 255, 112)',

  honeySuckle: 'rgb(186, 143, 247)',
  portage: 'rgb(226, 255, 112)',

  chxn1: '#1A171A',
  chxn2: '#3f4b54',
  chxn3: '#919191',
  chxn4: '#f1f1f1',
  chxn4A: 'rgba(241, 241, 241, 0.8)',
  chxn5: '#FFFFFF',
  chxn6: '#5e7ce2',
  chxn7: '#ff3333',
  chxn8: '#72f863',
  chxn9: '#ff3474',
  chxn10: '#a288a6',
  chxn11: '#93827f',
  chxn12: '#222222',
  chxn13: '#EAFF97',

  blur: 'rgba(0, 0, 0, 0.1)',

  tartOrange: '#5e7ce2',
  maxBlue: '#72719b'
 },
 utils: {}
})
