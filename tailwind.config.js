/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      inter: ['Inter', 'sans-serif'],
      aspekta: ['Aspekta V', 'sans-serif'],
      atkinson: ['Atkinson Hyperlegible', 'sans-serif'],
      tstar: ['T-Star Pro', 'sans-serif'],
      roboflex: ['Roboto Flex V', 'sans-serif'],
      sfmono: ['SF Mono', 'monospace'],
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      hypergrape: '#DC53D4',
      zorba: '#9A9087',
      malta: '#BAAE9D',
      shark: '#1F2124',
      graygray: '#1D1D1D',
      whisper: '#F9F9F9',

      whiteA1: 'hsla(0, 0%, 100%, 0)',
      whiteA2: 'hsla(0, 0%, 100%, 0.013)',
      whiteA3: 'hsla(0, 0%, 100%, 0.034)',
      whiteA4: 'hsla(0, 0%, 100%, 0.056)',
      whiteA5: 'hsla(0, 0%, 100%, 0.086)',
      whiteA6: 'hsla(0, 0%, 100%, 0.124)',
      whiteA7: 'hsla(0, 0%, 100%, 0.176)',
      whiteA8: 'hsla(0, 0%, 100%, 0.249)',
      whiteA9: 'hsla(0, 0%, 100%, 0.386)',
      whiteA10: 'hsla(0, 0%, 100%, 0.446)',
      whiteA11: 'hsla(0, 0%, 100%, 0.592)',
      whiteA12: 'hsla(0, 0%, 100%, 0.923)',

      blackA1: 'hsla(0, 0%, 0%, 0.012)',
      blackA2: 'hsla(0, 0%, 0%, 0.027)',
      blackA3: 'hsla(0, 0%, 0%, 0.047)',
      blackA4: 'hsla(0, 0%, 0%, 0.071)',
      blackA5: 'hsla(0, 0%, 0%, 0.090)',
      blackA6: 'hsla(0, 0%, 0%, 0.114)',
      blackA7: 'hsla(0, 0%, 0%, 0.141)',
      blackA8: 'hsla(0, 0%, 0%, 0.220)',
      blackA9: 'hsla(0, 0%, 0%, 0.439)',
      blackA10: 'hsla(0, 0%, 0%, 0.478)',
      blackA11: 'hsla(0, 0%, 0%, 0.565)',
      blackA12: 'hsla(0, 0%, 0%, 0.910)',

      grayA1: 'hsla(0, 0%, 0%, 0.012)',
      grayA2: 'hsla(0, 0%, 0%, 0.027)',
      grayA3: 'hsla(0, 0%, 0%, 0.047)',
      grayA4: 'hsla(0, 0%, 0%, 0.071)',
      grayA5: 'hsla(0, 0%, 0%, 0.090)',
      grayA6: 'hsla(0, 0%, 0%, 0.114)',
      grayA7: 'hsla(0, 0%, 0%, 0.141)',
      grayA8: 'hsla(0, 0%, 0%, 0.220)',
      grayA9: 'hsla(0, 0%, 0%, 0.439)',
      grayA10: 'hsla(0, 0%, 0%, 0.478)',
      grayA11: 'hsla(0, 0%, 0%, 0.565)',
      grayA12: 'hsla(0, 0%, 0%, 0.910)',

      gray1: 'hsl(0, 0%, 99.0%)',
      gray2: 'hsl(0, 0%, 97.3%)',
      gray3: 'hsl(0, 0%, 95.1%)',
      gray4: 'hsl(0, 0%, 93.0%)',
      gray5: 'hsl(0, 0%, 90.9%)',
      gray6: 'hsl(0, 0%, 88.7%)',
      gray7: 'hsl(0, 0%, 85.8%)',
      gray8: 'hsl(0, 0%, 78.0%)',
      gray9: 'hsl(0, 0%, 56.1%)',
      gray10: 'hsl(0, 0%, 52.3%)',
      gray11: 'hsl(0, 0%, 43.5%)',
      gray12: 'hsl(0, 0%, 9.0%)',

      sage1: 'hsl(155, 30.0%, 98.8%)',
      sage2: 'hsl(150, 16.7%, 97.6%)',
      sage3: 'hsl(151, 10.6%, 95.2%)',
      sage4: 'hsl(151, 8.8%, 93.0%)',
      sage5: 'hsl(151, 7.8%, 90.8%)',
      sage6: 'hsl(152, 7.2%, 88.4%)',
      sage7: 'hsl(153, 6.7%, 85.3%)',
      sage8: 'hsl(154, 6.1%, 77.5%)',
      sage9: 'hsl(155, 3.5%, 55.5%)',
      sage10: 'hsl(154, 2.8%, 51.7%)',
      sage11: 'hsl(155, 3.0%, 43.0%)',
      sage12: 'hsl(155, 24.0%, 9.0%)',

      mauve1: 'hsl(300, 20.0%, 99.0%)',
      mauve2: 'hsl(300, 7.7%, 97.5%)',
      mauve3: 'hsl(294, 5.5%, 95.3%)',
      mauve4: 'hsl(289, 4.7%, 93.3%)',
      mauve5: 'hsl(283, 4.4%, 91.3%)',
      mauve6: 'hsl(278, 4.1%, 89.1%)',
      mauve7: 'hsl(271, 3.9%, 86.3%)',
      mauve8: 'hsl(255, 3.7%, 78.8%)',
      mauve9: 'hsl(252, 4.0%, 57.3%)',
      mauve10: 'hsl(253, 3.5%, 53.5%)',
      mauve11: 'hsl(252, 4.0%, 44.8%)',
      mauve12: 'hsl(260, 25.0%, 11.0%)',

      zinc1: '#fafafa',
      zinc2: '#f4f4f5',
      zinc3: '#e4e4e7',
      zinc4: '#d4d4d8',
      zinc5: '#a1a1aa',
      zinc6: '#71717a',
      zinc7: '#52525b',
      zinc8: '#3f3f46',
      zinc9: '#27272a',
      zinc10: '#18181b',
      zinc11: '#0f0f10',

      zinc: {
        50: '#fafafa',
        100: '#f4f4f5',
        200: '#e4e4e7',
        300: '#d4d4d8',
        400: '#a1a1aa',
        500: '#71717a',
        600: '#52525b',
        700: '#3f3f46',
        800: '#27272a',
        900: '#18181b',
        950: '#09090b',
      },

      // Grayscale Design palette: https://grayscale.design/app?lums=92.72,85.96,73.80,58.76,39.22,24.42,15.15,11.44,6.93,4.69&palettes=%23FF43EE&filters=0%7C0&names=hypergrape&labels=
      stone: {
        50: '#fafaf9',
        100: '#f5f5f4',
        200: '#e7e5e4',
        300: '#d6d3d1',
        400: '#a8a29e',
        500: '#78716c',
        600: '#57534e',
        700: '#44403c',
        800: '#292524',
        900: '#1c1917',
        950: '#0c0a09',
      },

      grayscale: {
        50: 'rgb(253, 253, 253)',
        100: 'rgb(251, 251, 251)',
        200: 'rgb(244, 244, 244)',
        300: 'rgb(235, 235, 235)',
        400: 'rgb(225, 225, 225)',
        500: 'rgb(212, 212, 212)',
        600: 'rgb(192, 192, 192)',
        700: 'rgb(165, 165, 165)',
        800: 'rgb(109, 109, 109)',
        900: 'rgb(100, 100, 100)',
        1000: 'rgb(90, 90, 90)',
        1100: 'rgb(29, 29, 29)',
      },
      hypergrape: {
        50: 'rgb(255, 252, 255)',
        100: 'rgb(255, 249, 255)',
        200: 'rgb(255, 239, 254)',
        300: 'rgb(255, 227, 253)',
        400: 'rgb(255, 213, 251)',
        500: 'rgb(255, 192, 250)',
        600: 'rgb(255, 159, 247)',
        700: 'rgb(255, 103, 242)',
        800: 'rgb(197, 0, 181)',
        900: 'rgb(182, 0, 167)',
        1000: 'rgb(165, 0, 151)',
        1100: 'rgb(59, 0, 54)',
      },
    },
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('tailwindcss-radix')({
      // Default: `radix`
      variantPrefix: 'rdx',
    }),
  ],
}
