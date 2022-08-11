import { styled } from '@/lib/stitches.config';

export const Section = styled('section', {
  // Reset

  boxSizing: 'border-box',
  flexShrink: 1,
  // backgroundColor: '$gray4',
  '&::before': {
    boxSizing: 'border-box',
    content: '""',
  },
  '&::after': {
    boxSizing: 'border-box',
    content: '""',
  },

  variants: {
    size: {
      1: {
        py: '$3',
        paddingLeft: '40px',
        paddingRight: '40px',
      },
      2: {
        py: '$5',
        paddingLeft: '0px',
        paddingRight: '0px',
        margin: 'auto',
      },
      3: {
        py: '80px',
        paddingLeft: '15px',
        paddingRight: '15px',
        margin: 'auto',
      },
      4: {
        py: '150px',
        px: '10px',
        margin: 'auto',
      },
    },
  },
  defaultVariants: {
    size: '3',
  },
});
