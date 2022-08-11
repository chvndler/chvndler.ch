import { styled } from '@/lib/stitches.config';

export const Space = styled('div', {
  boxSizing: 'border-box',
  padding: '0',
  margin: '0',
  display: 'block',

  variants: {
    // sizing..
    size: {
      1: {
        // backgroundColor: 'transparent',
        height: '14px',
        width: '100%',
        maxWidth: '100vw',
      },
      2: {
        // backgroundColor: 'transparent',
        height: '40px',
        width: '100%',
        maxWidth: '100vw',
      },
      3: {
        // backgroundColor: 'transparent',
        height: '80px',
        width: '100%',
        maxWidth: '100vw',
      },
    },
    // testing flag..
    color: {
      dev: {
        backgroundColor: '$mauve2',
      },
    },
  },
});
