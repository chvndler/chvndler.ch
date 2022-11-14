import {
  blackA,
  blue,
  blueA,
  blueDark,
  blueDarkA,
  gray,
  grayA,
  grayDark,
  grayDarkA,
  lime,
  limeA,
  limeDark,
  limeDarkA,
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
} from '@radix-ui/colors';
import type * as Stitches from '@stitches/react';
import { createStitches, defaultThemeMap } from '@stitches/react';

export type { VariantProps } from '@stitches/react';

export const { styled, css, theme, createTheme, getCssText, globalCss, keyframes, config, reset } = createStitches({
  themeMap: {
    ...defaultThemeMap
  },
  prefix: 'atelier', // *put your preferred css prefix here.* //
  theme: {
    colors: {
      ...gray,
      ...grayA,
      ...mauve,
      ...mauveA,
      ...lime,
      ...limeA,
      ...blue,
      ...blueA,
      ...slate,
      ...slateA,
      ...sage,
      ...sageA,
      ...whiteA,
      ...blackA,

      // defaults
      background: '#101010',
      black: '#000000',
      blur: 'rgba(72,67,73,0.1)',
      appbarButton: 'rgba(0, 0, 0, 0.03)',
      table: 'transparent',
      white: '#ffffff',

      // CHXN.v01
      chxn1: '#f7f0f0',
      chxn2: '#bcc1cd',
      chxn3: '#A09FA6',
      chxn4: '#484349',
      chxn5: '#2b2a30',
      chxn6: '#5e7ce2',
      chxn7: '#ff3333',
      chxn8: '#72f863',
      chxn9: '#ff3474',
      chxn10: '#a288a6',
      chxn11: '#93827f',
      chxn12: '#222222',

      tartOrange: '#ff3333',
      maxBlue: '#5e7ce2',
      twitter: '#1DA1F2',
      github: '#6cc644',
      githubAlt: '#6e5494'
    },
    fonts: {
      untitled: '"Inter", -apple-system, system-ui, sans-serif',
      inter: '"Inter", sans-serif',
      rightGrotesk: '"PP Right Grotesk", sans-serif',
      rightGroteskWide: '"PP Right Grotesk Wide", sans-serif', // weight: 470, 900
      rightGroteskTextWide: '"PP Right Grotesk Text Wide", sans-serif',
      neueMontreal: '"PP Neue Montreal", sans-serif',
      lateralStandard: '"Lateral Standard Regular", sans-serif'
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
    // breakpoints...
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

    // user preferences...
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
      // example font: , == fontFamily: ;
      fontFamily: value
    }),
    linearGradient: () => (value: Stitches.PropertyValue<'padding'>) => ({
      backgroundImage: `linear-gradient(${value})`
    }),
    p: (value: Stitches.PropertyValue<'padding'>) => ({
      // example p: 0, == padding: 0;
      padding: value
    }),
    px: (value: Stitches.PropertyValue<'paddingLeft'>) => ({
      paddingLeft: value,
      paddingRight: value
    }),
    py: (value: Stitches.PropertyValue<'paddingTop'>) => ({
      paddingTop: value,
      paddingBottom: value
    })
  }
});

export type CSS = Stitches.CSS<typeof config>;

export const darkTheme = createTheme('dark-theme', {
  colors: {
    ...grayDark,
    ...grayDarkA,
    ...mauveDark,
    ...mauveDarkA,
    ...limeDark,
    ...limeDarkA,
    ...blueDark,
    ...blueDarkA,
    ...slateDark,
    ...slateDarkA,
    ...sageDark,
    ...sageDarkA,

    chxn1: '#1A171A',
    chxn2: '#3f4b54',
    chxn3: '#919191',
    chxn4: '#f1f1f1',
    chxn5: '#FFFFFF',
    chxn6: '#5e7ce2',
    chxn7: '#ff3333',
    chxn8: '#72f863',
    chxn9: '#ff3474',
    chxn10: '#a288a6',
    chxn11: '#93827f',
    chxn12: '#222222',

    blur: 'rgba(0, 0, 0, 0.1)',

    tartOrange: '#5e7ce2',
    maxBlue: '#72719b'
  },
  utils: {}
});
