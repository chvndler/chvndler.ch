import {blackA, gray, grayA, lime, limeA, mauve, slate, slateA, whiteA} from '@radix-ui/colors'

import {atlr} from './src'

const baseKitThemeColors = {
  /**
   *
   * previous colors..
   *
   * let's get these updated and mapped to tokens better..
   *
   *
   *
   */

  blur: 'rgba(72,67,73,0.1)',

  fizz4: 'rgb(226, 255, 112)',
  fizz5: 'rgb(218, 255, 71)',

  psych4: 'rgb(186, 143, 247)',
  psych5: 'rgb(202, 96, 255)',

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

  /* --------------------------------- ATLR -------------------------------------- */
  atlr1: atlr.atlr1,
  atlr2: atlr.atlr2,
  atlr3: atlr.atlr3,
  atlr4: atlr.atlr4,
  atlr5: atlr.atlr5,
  atlr6: atlr.atlr6,
  atlr7: atlr.atlr7,
  atlr8: atlr.atlr8,
  atlr9: atlr.atlr9,

  matte: atlr.matte,
  /* --------------------------------- End ATLR --------------------------------- */

  /* ------------------------ Radix-UI Colors ------------------------------------- */
  blackA1: blackA.blackA1,
  blackA2: blackA.blackA2,
  blackA3: blackA.blackA3,
  blackA4: blackA.blackA4,
  blackA5: blackA.blackA5,
  blackA6: blackA.blackA6,
  blackA7: blackA.blackA7,
  blackA8: blackA.blackA8,
  blackA9: blackA.blackA9,
  blackA10: blackA.blackA10,
  blackA11: blackA.blackA11,
  blackA12: blackA.blackA12,

  whiteA: whiteA.whiteA1,
  whiteA2: whiteA.whiteA2,
  whiteA3: whiteA.whiteA3,
  whiteA4: whiteA.whiteA4,
  whiteA5: whiteA.whiteA5,
  whiteA6: whiteA.whiteA6,
  whiteA7: whiteA.whiteA7,
  whiteA8: whiteA.whiteA8,
  whiteA9: whiteA.whiteA9,
  whiteA10: whiteA.whiteA10,
  whiteA11: whiteA.whiteA11,
  whiteA12: whiteA.whiteA12,

  gray1: gray.gray1,
  gray2: gray.gray2,
  gray3: gray.gray3,
  gray4: gray.gray4,
  gray5: gray.gray5,
  gray6: gray.gray6,
  gray7: gray.gray7,
  gray8: gray.gray8,
  gray9: gray.gray9,
  gray10: gray.gray10,
  gray11: gray.gray11,
  gray12: gray.gray12,

  grayA1: grayA.grayA1,
  grayA2: grayA.grayA2,
  grayA3: grayA.grayA3,
  grayA4: grayA.grayA4,
  grayA5: grayA.grayA5,
  grayA6: grayA.grayA6,
  grayA7: grayA.grayA7,
  grayA8: grayA.grayA8,
  grayA9: grayA.grayA9,
  grayA10: grayA.grayA10,
  grayA11: grayA.grayA11,
  grayA12: grayA.grayA12,

  mauve1: mauve.mauve1,
  mauve2: mauve.mauve2,
  mauve3: mauve.mauve3,
  mauve4: mauve.mauve4,
  mauve5: mauve.mauve5,
  mauve6: mauve.mauve6,
  mauve7: mauve.mauve7,
  mauve8: mauve.mauve8,
  mauve9: mauve.mauve9,
  mauve10: mauve.mauve10,
  mauve11: mauve.mauve11,
  mauve12: mauve.mauve12,

  slate1: slate.slate1,
  slate2: slate.slate2,
  slate3: slate.slate3,
  slate4: slate.slate4,
  slate5: slate.slate5,
  slate6: slate.slate6,
  slate7: slate.slate7,
  slate8: slate.slate8,
  slate9: slate.slate9,
  slate10: slate.slate10,
  slate11: slate.slate11,
  slate12: slate.slate12,

  slateA1: slateA.slateA1,
  slateA2: slateA.slateA2,
  slateA3: slateA.slateA3,
  slateA4: slateA.slateA4,
  slateA5: slateA.slateA5,
  slateA6: slateA.slateA6,
  slateA7: slateA.slateA7,
  slateA8: slateA.slateA8,
  slateA9: slateA.slateA9,
  slateA10: slateA.slateA10,
  slateA11: slateA.slateA11,
  slateA12: slateA.slateA12,

  lime1: lime.lime1,
  lime2: lime.lime2,
  lime3: lime.lime3,
  lime4: lime.lime4,
  lime5: lime.lime5,
  lime6: lime.lime6,
  lime7: lime.lime7,
  lime8: lime.lime8,
  lime9: lime.lime9,
  lime10: lime.lime10,
  lime11: lime.lime11,
  lime12: lime.lime12,

  limeA1: limeA.limeA1,
  limeA2: limeA.limeA2,
  limeA3: limeA.limeA3,
  limeA4: limeA.limeA4,
  limeA5: limeA.limeA5,
  limeA6: limeA.limeA6,
  limeA7: limeA.limeA7,
  limeA8: limeA.limeA8,
  limeA9: limeA.limeA9,
  limeA10: limeA.limeA10,
  limeA11: limeA.limeA11,
  limeA12: limeA.limeA12,
  /* ------------------------ End Radix-UI Colors -------------------------------- */

  /**
   *
   * sociol colors.
   */
  ig: '#ff3333',
  insta: '#ff3474',
  maxBlue: '#5e7ce2',
  twitter: '#1DA1F2',
  github: '#6cc644',
  githubAlt: '#6e5494',
  arena: '#484349',
  linkedin: '#0077B5',
  readcv: '#8A918E',
  fb: '#4267B2',

  /**
   *
   *
   *
   * accidentsls...
   *
   */
  clear: 'transparent',
  transparent: 'transparent',
  tp: 'transparent',
  white: '#fff',
  black: '#000',
  current: 'currentColor'
}

export const kitColors = baseKitThemeColors
