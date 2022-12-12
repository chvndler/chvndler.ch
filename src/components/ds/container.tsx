import {styled} from 'stitches.config'

export const Container = styled('div', {
 display: 'flex',
 flexDirection: 'column',
 boxSizing: 'border-box',
 flexShrink: 0,
 marginLeft: 'auto',
 marginRight: 'auto',
 paddingLeft: 18,
 paddingRight: 18,
 variants: {
  size: {
   '0': {
    maxWidth: '480px',
   },
   '1': {
    maxWidth: '560px',
   },
   '2': {
    maxWidth: '715px',
   },
   '3': {
    maxWidth: '1145px',
   },
   '4': {
    maxWidth: 'none',
   },
  },
  align: {
   left: {
    justifyContent: 'flex-start',
   },
   center: {
    margin: 'auto',
    justifyContent: 'center',
    alignItems: 'center',
   },
   right: {
    justifyContent: 'flex-end',
   },
  },
 },
 defaultVariants: {
  size: '4',
  align: 'left',
 },
})
