import {styled} from 'stitches.config'

export const Paragraph = styled('span', {
 lineHeight: '1.3',
 margin: '0',
 fontWeight: 400,
 fontVariantNumeric: 'tabular-nums',
 display: 'block',
 color: '$mauve12',

 variants: {
  size: {
   '1': {
    fontSize: '$3',
   },
   '2': {
    fontSize: '$4',
   },
   '3': {
    fontSize: '$3',
   },
   '4': {
    fontSize: '$4',
   },
   '5': {
    fontSize: '$5',
    letterSpacing: '-.015em',
   },
   '6': {
    fontSize: '$6',
    letterSpacing: '-.016em',
   },
   '7': {
    fontSize: '$7',
    letterSpacing: '-.031em',
    textIndent: '-.005em',
   },
   '8': {
    fontSize: '$8',
    letterSpacing: '-.034em',
    textIndent: '-.018em',
   },
   '9': {
    fontSize: '$9',
    letterSpacing: '-.055em',
    textIndent: '-.025em',
   },
  },

  bold: {
   true: {
    fontWeight: 'bold',
   },
  },
 },
 defaultVariants: {
  size: '3',
 },
})
