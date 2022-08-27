import {
  blackA,
  gold,
  goldA,
  goldDark,
  goldDarkA,
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
  sand,
  sandA,
  sandDark,
  sandDarkA,
  sky,
  skyA,
  skyDark,
  skyDarkA,
  slate,
  slateA,
  slateDark,
  slateDarkA,
  whiteA,
  yellow,
  yellowA,
  yellowDark,
  yellowDarkA,
} from '@radix-ui/colors';
import type * as Stitches from '@stitches/react';
import { createStitches } from '@stitches/react';
import { mixins } from 'stitches-mixins';

export type { VariantProps } from '@stitches/react';
export const { styled, css, theme, createTheme, getCssText, globalCss, keyframes, config } = createStitches({
  theme: {
    colors: {
      // Colors..
      ...gray,
      ...mauve,
      ...slate,
      ...sage,
      ...sand,
      ...sky,
      ...lime,
      ...yellow,
      ...gold,

      // Alphas..
      ...grayA,
      ...mauveA,
      ...slateA,
      ...sageA,
      ...sandA,
      ...skyA,
      ...limeA,
      ...yellowA,
      ...goldA,

      ...whiteA,
      ...blackA,

      blur: 'rgba(240,240,240,0.7)',
      overlay: 'hsl(206 22% 7% / 35%)',
      midnight: '#152023',
      tartOrange: '#ff3333',
      voltYellow: '#e7fe26',
      sand: '#dedac7',
      opal: '#a7bfc2',
      mist: '#eeeeee',
      rhythm: '#413a3c',

      white: 'hsl(0, 0%, 100%)',
      crimson: '#d64045',
      air: '#477194',
      sky2: '#28c2ff',
      maximumBlue: '#5e7ce2',
      volt: '#7cff5c',
      crayola: '#ED254E',
      pinky: '#ff206e',
      blueblue: '#0151f5',
      pinkyA: 'hsla(339, 100%, 56%, 0.6)',

      // chvn...
      chvn0: '#FEFEFE',
      chvn1: '#E2E4EB',
      chvn2: '#A3ABC0',
      chvn3: '#828DA9',
      chvn4: '#667394',
      chvn5: '#525D77',

      chvn6: '#484349',
      chvn7: '#f7f0f0',
      chvn8: '#5e7ce2',
      chvn9: '#87b37a',


      // Translucent Alphas..
      light100: 'rgba(240, 240, 240, 0.7)',
      light50: 'rgba(240, 240, 240, 0.8)',
      clear100: 'rgba(240, 240, 240, 0.2)',

      // Neons..
      superYellow: '#F6F930',
      superLime: '#96F550',
      slime: '#FFFD8E',
      lime9Alpha: 'rgba(153,213,42, 0.2)',
      sky9Alpha: 'rgba(104,221,253,0.3)',

      // Semantics..
      hiContrast: '$slate12',
      semiTransparent: '$light100',
      loContrast: '$slate1',
      panel: '$gray12',

      // Lo Contrast..
      canvas: 'hsl(0 0% 93%)',
      transparentPanel: 'hsl(0 0% 0% / 97%)',
      shadowLight: 'hsl(206 22% 7% / 15%)',
      shadowDark: 'hsl(206 22% 7% / 40%)',
    },
    fonts: {
      inter: '"Inter", sans-serif',
      chGrotesk: '"CH Grotesk", sans-serif',
      miu: '"MIU MIU", sans-serif',
      pragmaticaExtended: '"pragmatica-extended", sans-serif',
      pragmatica: '"pragmatica", sans-serif',
      untitled: '"-apple-system", "Helvetica Neue", sans-serif',
    },
    fontWeights: {
      100: '100',
      200: '200',
      300: '300',
      400: '400',
      500: '500',
      600: '600',
      700: '700',
      800: '800',
      900: '900',
    },
    space: {
      1: '5px',
      2: '10px',
      3: '15px',
      4: '20px',
      5: '25px',
      6: '35px',
      7: '45px',
      8: '65px',
      9: '80px',
    },
    sizes: {
      1: '5px',
      2: '10px',
      3: '15px',
      4: '20px',
      5: '25px',
      6: '35px',
      7: '45px',
      8: '65px',
      9: '80px',
    },
    fontSizes: {
      1: '10px',
      2: '12px',
      3: '13px',
      4: '15px',
      5: '17px',
      6: '21px',
      7: '27px',
      8: '35px',
      9: '59px',
    },
    radii: {
      1: '4px',
      2: '6px',
      3: '8px',
      4: '12px',
      round: '50%',
      pill: '9999px',
    },
    zIndices: {
      1: '100',
      2: '200',
      3: '300',
      4: '400',
      max: '999',
    },
  },
  media: {
    // primary..
    xs: '(max-width: 520px)',
    sm: '(max-width: 650px)',
    md: '(max-width: 820px)',
    lg: '(max-width: 1200px)',
    xl: '(min-width: 1201px)',

    // secondary..
    bp1: '(min-width: 520px)',
    bp2: '(min-width: 900px)',
    bp3: '(min-width: 1200px)',
    bp4: '(min-width: 1800px)',

    // prefers..
    motion: '(prefers-reduced-motion)',
    hover: '(any-hover: hover)',
    dark: '(prefers-color-scheme: dark)',
    light: '(prefers-color-scheme: light)',
  },
  utils: {
    include: mixins({
      orchidShadow: {
        boxShadow: '0 25px 50px -12px orchid',
      },
    }),
    p: (value: Stitches.PropertyValue<'padding'>) => ({
      padding: value,
    }),
    pt: (value: Stitches.PropertyValue<'paddingTop'>) => ({
      paddingTop: value,
    }),
    pr: (value: Stitches.PropertyValue<'paddingRight'>) => ({
      paddingRight: value,
    }),
    pb: (value: Stitches.PropertyValue<'paddingBottom'>) => ({
      paddingBottom: value,
    }),
    pl: (value: Stitches.PropertyValue<'paddingLeft'>) => ({
      paddingLeft: value,
    }),
    px: (value: Stitches.PropertyValue<'paddingLeft'>) => ({
      paddingLeft: value,
      paddingRight: value,
    }),
    py: (value: Stitches.PropertyValue<'paddingTop'>) => ({
      paddingTop: value,
      paddingBottom: value,
    }),
    w: (value: Stitches.PropertyValue<'width'>) => ({
      width: value,
    }),
    m: (value: Stitches.PropertyValue<'margin'>) => ({
      margin: value,
    }),
    mt: (value: Stitches.PropertyValue<'marginTop'>) => ({
      marginTop: value,
    }),
    mr: (value: Stitches.PropertyValue<'marginRight'>) => ({
      marginRight: value,
    }),
    mb: (value: Stitches.PropertyValue<'marginBottom'>) => ({
      marginBottom: value,
    }),
    ml: (value: Stitches.PropertyValue<'marginLeft'>) => ({
      marginLeft: value,
    }),
    mx: (value: Stitches.PropertyValue<'marginLeft'>) => ({
      marginLeft: value,
      marginRight: value,
    }),
    my: (value: Stitches.PropertyValue<'marginTop'>) => ({
      marginTop: value,
      marginBottom: value,
    }),

    ta: (value: Stitches.PropertyValue<'textAlign'>) => ({ textAlign: value }),

    fd: (value: Stitches.PropertyValue<'flexDirection'>) => ({
      flexDirection: value,
    }),
    fw: (value: Stitches.PropertyValue<'flexWrap'>) => ({ flexWrap: value }),

    ai: (value: Stitches.PropertyValue<'alignItems'>) => ({
      alignItems: value,
    }),
    ac: (value: Stitches.PropertyValue<'alignContent'>) => ({
      alignContent: value,
    }),
    jc: (value: Stitches.PropertyValue<'justifyContent'>) => ({
      justifyContent: value,
    }),
    as: (value: Stitches.PropertyValue<'alignSelf'>) => ({ alignSelf: value }),
    fg: (value: Stitches.PropertyValue<'flexGrow'>) => ({ flexGrow: value }),
    fs: (value: Stitches.PropertyValue<'flexShrink'>) => ({
      flexShrink: value,
    }),
    fb: (value: Stitches.PropertyValue<'flexBasis'>) => ({ flexBasis: value }),

    bc: (value: Stitches.PropertyValue<'backgroundColor'>) => ({
      backgroundColor: value,
    }),

    br: (value: Stitches.PropertyValue<'borderRadius'>) => ({
      borderRadius: value,
    }),
    btrr: (value: Stitches.PropertyValue<'borderTopRightRadius'>) => ({
      borderTopRightRadius: value,
    }),
    bbrr: (value: Stitches.PropertyValue<'borderBottomRightRadius'>) => ({
      borderBottomRightRadius: value,
    }),
    bblr: (value: Stitches.PropertyValue<'borderBottomLeftRadius'>) => ({
      borderBottomLeftRadius: value,
    }),
    btlr: (value: Stitches.PropertyValue<'borderTopLeftRadius'>) => ({
      borderTopLeftRadius: value,
    }),
    brc: (value: Stitches.PropertyValue<'borderColor'>) => ({
      borderColor: value,
    }),
    bs: (value: Stitches.PropertyValue<'boxShadow'>) => ({ boxShadow: value }),
    lh: (value: Stitches.PropertyValue<'lineHeight'>) => ({
      lineHeight: value,
    }),
    ox: (value: Stitches.PropertyValue<'overflowX'>) => ({ overflowX: value }),
    oy: (value: Stitches.PropertyValue<'overflowY'>) => ({ overflowY: value }),

    pe: (value: Stitches.PropertyValue<'pointerEvents'>) => ({
      pointerEvents: value,
    }),
    us: (value: Stitches.PropertyValue<'userSelect'>) => ({
      WebkitUserSelect: value,
      userSelect: value,
    }),

    userSelect: (value: Stitches.PropertyValue<'userSelect'>) => ({
      WebkitUserSelect: value,
      userSelect: value,
    }),

    size: (value: Stitches.PropertyValue<'width'>) => ({
      width: value,
      height: value,
    }),

    appearance: (value: Stitches.PropertyValue<'appearance'>) => ({
      WebkitAppearance: value,
      appearance: value,
    }),
    backgroundClip: (value: Stitches.PropertyValue<'backgroundClip'>) => ({
      WebkitBackgroundClip: value,
      backgroundClip: value,
    }),
  },
});

export type CSS = Stitches.CSS<typeof config>;

export const darkTheme = createTheme('darkTheme', {
  colors: {
    ...grayDark,
    ...mauveDark,
    ...slateDark,
    ...sageDark,
    ...sandDark,
    ...skyDark,
    ...limeDark,
    ...yellowDark,
    ...goldDark,

    ...grayDarkA,
    ...mauveDarkA,
    ...slateDarkA,
    ...sageDarkA,
    ...sandDarkA,
    ...skyDarkA,
    ...limeDarkA,
    ...yellowDarkA,
    ...goldDarkA,

    blur: 'rgba(0, 0, 0, 0.7)',

    // Semantic colors..
    hiContrast: '$slate12',
    loContrast: '$slate1',
    canvas: 'hsl(0 0% 15%)',
    panel: '$slate3',
    transparentPanel: 'hsl(0 100% 100% / 97%)',
    shadowLight: 'hsl(206 22% 7% / 35%)',
    shadowDark: 'hsl(206 22% 7% / 20%)',

    // CUSTOM FOR DARK
    superLime: '#7A306C',
    slime: '#c9cccd',
    light100: 'rgba(0, 0, 0, 0.4)',
    light50: 'rgba(0, 0, 0, 0.8)',


    // chvn...
    chvn0: '#525D77',
    chvn1: '#667394',
    chvn2: '#828DA9',
    chvn3: '#A3ABC0',
    chvn4: '#E2E4EB',
    chvn5: '#FEFEFE',

    chvn6: '#484349',
    chvn7: '#f7f0f0',
    chvn8: '#5e7ce2',
    chvn9: '#87b37a',
  },
  utils: {},
});
