import {styled} from 'stitches.config'

export const BlurCanvas = styled('div', {
 zIndex: '18',
 boxSizing: 'border-box',
 margin: 'auto',
 padding: '0',

 variants: {
  color: {
   light: {
    backgroundColor: '$blur',
   },
   dark: {
    backgroundColor: '$blurDark',
   },
  },
  blur: {
   sm: {
    backdropFilter: 'saturate(180%) blur(8px)',
    WebkitBackdropFilter: 'saturate(180%) blur(8px)',
    saturate: '180%',
    '@sm': {
     backdropFilter: 'saturate(180%) blur(4px)',
     WebkitBackdropFilter: 'saturate(180%) blur(4px)',
    },
   },
   md: {
    backdropFilter: 'saturate(180%) blur(11px)',
    WebkitBackdropFilter: 'saturate(180%) blur(11px)',
   },
   lg: {
    backdropFilter: 'saturate(180%) blur(16px)',
    WebkitBackdropFilter: 'saturate(180%) blur(16px)',
   },
  },
  position: {
   fixed: {
    position: 'fixed',
    top: '0',
    width: '100vw',
    height: '100vh',
   },
   relative: {
    position: 'relative',
    width: '100vw',
    height: '100vh',
   },
  },
 },
})
