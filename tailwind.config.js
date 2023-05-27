/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    // using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      inter: ['Inter V', 'sans-serif'],
      archivo: ['Archivo V', 'sans-serif'],
      fraktion: ['Fraktion Sans V', 'sans-serif'],
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      B100: '#f4f4f4',
      B500: '#6777c9',
      B900: '#1d1d1d',
      B600: '#ebfebc',

      slate: {
        50: '#f8fafc',
        100: '#f1f5f9',
        200: '#e2e8f0',
        300: '#cbd5e1',
        400: '#94a3b8',
        500: '#64748b',
        600: '#475569',
        700: '#334155',
        800: '#1e293b',
        900: '#0f172a',
        950: '#020617',
      },

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

      blackA1: 'hsla(0, 0%, 0%, 0.)',
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
    },
    extend: {
      backgroundColor: {
        'surface-action': 'var(--surface-action)',
        'surface-neutral': 'var(--surface-neutral)',
        'color-bar': 'var(--color-bar)',
        'dark-color-bar': 'var(--dark-color-bar)',
      },
      textDecorationColor: {
        underline: 'hsl(var(--underline))',
      },
      boxShadow: {
        sminner: 'inset 0px 0px 0.2px 1px hsla(0, 0%, 0%, 0.114)',
      },
      typography: (theme) => ({
        //..
        '--tw-prose-pre-code': theme('colors.hypergrape[700]'),
      }),
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('tailwindcss-radix')({
      //..
      variantPrefix: 'rdxkit',
    }),
  ],
};
