import { styled } from 'stitches.config';

export const Container = styled('div', {
  boxSizing: 'border-box',
  flexShrink: 0,
  marginLeft: 'auto',
  marginRight: 'auto',
  paddingLeft: 20,
  paddingRight: 20,
  '@sm': {
    paddingLeft: 18,
    paddingRight: 18
  },
  variants: {
    size: {
      '0': {
        maxWidth: '480px'
      },
      '1': {
        maxWidth: '560px'
      },
      '2': {
        maxWidth: '715px'
      },
      '3': {
        maxWidth: '1145px'
      },
      '4': {
        maxWidth: 'none'
      }
    }
  },
  defaultVariants: {
    size: '4'
  }
});
