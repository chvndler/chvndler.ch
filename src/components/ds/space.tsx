import { styled } from 'stitches.config';

export const Space = styled('div', {
  boxSizing: 'border-box',
  padding: '0',
  margin: '0',
  display: 'block',

  variants: {
    size: {
      0: {
        height: '8px',
        width: '100%',
        maxWidth: '100vw'
      },
      1: {
        height: '14px',
        width: '100%',
        maxWidth: '100vw'
      },
      2: {
        height: '40px',
        width: '100%',
        maxWidth: '100vw'
      },
      3: {
        height: '80px',
        width: '100%',
        maxWidth: '100vw'
      }
    },
    color: {
      dev: {
        backgroundColor: '$mauve2'
      }
    }
  }
});
