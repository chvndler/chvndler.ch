import { styled } from '@/lib/stitches.config';

export const Container = styled('div', {
  // Reset
  boxSizing: 'border-box',
  flexShrink: 0,

  // Custom
  marginLeft: 'auto',
  marginRight: 'auto',
  paddingLeft: '$5',
  paddingRight: '$5',

  '@sm': {
    paddingLeft: '$4',
    paddingRight: '$4',
  },

  variants: {
    size: {
      '1': {
        maxWidth: '430px',
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
  },
  defaultVariants: {
    size: '4',
  },
});
