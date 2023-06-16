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
      sohne: ['Sohne', 'sans-serif'],
      ibmSans: ['IBM Plex Sans', 'sans-serif'],
      ibmMono: ['IBM Plex Mono', 'monospace'],
      helmet: ['Helmet Neue', 'sans-serif'],
      fraktion: ['Fraktion Sans V', 'sans-serif'],
      mono: ['SF Mono', 'monospace'],
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      B100: '#f4f4f4',
      B500: 'rgba(103, 119, 201, 1)',
      B600: 'rgba(224, 255, 158, 1)',
      B900: '#1d1d1d',

      carbon: {
        50: 'rgba(246, 248, 250, 1)',
        100: 'rgba(223, 233, 233, 1)',
        200: 'rgba(200, 210, 210, 1)',
        300: 'rgba(174, 184, 184, 1)',
        400: 'rgba(149, 159, 159, 1)',
        500: 'rgba(109, 119, 119, 1)',
        600: 'rgba(88, 100, 100, 1)',
        700: 'rgba(60, 70, 70, 1)',
        800: 'rgba(45, 55, 55, 1)',
        900: 'rgba(13, 17, 17, 1)',
        950: 'rgba(0, 2, 3, 1)',
      },

      grey: {
        A1: 'hsla(0, 0%, 0%, 0.012)',
        A2: 'hsla(0, 0%, 0%, 0.027)',
        A3: 'hsla(0, 0%, 0%, 0.047)',
        A4: 'hsla(0, 0%, 0%, 0.071)',
        A5: 'hsla(0, 0%, 0%, 0.090)',
        A6: 'hsla(0, 0%, 0%, 0.114)',
        A7: 'hsla(0, 0%, 0%, 0.141)',
        A8: 'hsla(0, 0%, 0%, 0.220)',
        A9: 'hsla(0, 0%, 0%, 0.439)',
        A10: 'hsla(0, 0%, 0%, 0.478)',
        A11: 'hsla(0, 0%, 0%, 0.565)',
        A12: 'hsla(0, 0%, 0%, 0.910)',

        50: 'rgba(249, 250, 251, 1)',
        100: 'rgba(243, 244, 246, 1)',
        200: 'rgba(229, 231, 235, 1)',
        300: 'rgba(209, 213, 219, 1)',
        400: 'rgba(156, 163, 175, 1)',
        500: 'rgba(107, 114, 128, 1)',
        600: 'rgba(75, 85, 99, 1)',
        700: 'rgba(55, 65, 81, 1)',
        800: 'rgba(31, 41, 55, 1)',
        900: 'rgba(17, 24, 39, 1)',
        950: 'rgba(3, 7, 18, 1)',
      },

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

      grape: {
        50: '#fdf4ff',
        100: '#fae8ff',
        200: '#f5d0fe',
        300: '#f0abfc',
        400: '#e879f9',
        500: '#d946ef',
        600: '#c026d3',
        700: '#a21caf',
        800: '#86198f',
        900: '#701a75',
        950: '#4a044e',
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
      typography: (theme) => ({
        //..
        '--tw-prose-pre-code': theme('colors.hypergrape[700]'),
      }),
      backgroundColor: {
        'global-nav': 'var(--globalnav-bg)',
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
      backdropBlur: {
        gnav: '20px',
      },
      backdropSaturate: {
        sat180: '1.8',
      },
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
