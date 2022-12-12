import {styled} from 'stitches.config'

export const LogoLink = styled('a', {
 boxSizing: 'border-box',
 display: 'block',
 outline: 0,
 color: '$hiContrast',
 position: 'relative',
 borderRadius: 20,

 '@hover': {
  color: '$chxn4',
  transition: 'color 0.6s ease',
  '&:hover': {
   color: '$maxBlue',
  },
 },

 '&:focus': {
  zIndex: 1,
  color: '$hiContrast',
  boxShadow: '0 0 0 2px $colors$blue8',
 },
 '&:focus:not(:focus-visible)': {
  boxShadow: 'none',
 },

 variants: {
  variant: {
   box: {
    backgroundColor: '$mauve5',
    boxShadow: '0 0 0 1px $colors$gray8',
    '&::before': {
     content: '',
     borderRadius: 20,
     zIndex: 1,
     position: 'absolute',
     pointerEvents: 'none',
     transition: '120ms opacity',
     inset: 0,
     opacity: 0,
     backgroundColor: '$mauve6',
     boxShadow: '0 0 0 1px $colors$grayA6',
    },
    '&:hover::before': {
     opacity: 1,
    },
    '&:focus::before': {
     boxShadow: '0 0 0 1px $colors$grayA4',
    },
    '&:focus:not(:focus-visible)::before': {
     opacity: 1,
    },
   },
  },
 },
 defaultVariants: {
  variant: 'normal',
 },
})
