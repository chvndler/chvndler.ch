import { styled, theme } from 'stitches.config';

export const IconButton = styled('button', {
  boxSizing: 'border-box',
  position: 'relative',
  display: 'inline-flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: 28,
  height: 28,
  background: 'none',
  padding: 0,
  margin: 0,
  outline: 'none',
  borderRadius: 8,
  color: theme.colors.sage10,
  border: `1px solid ${theme.colors.sage6}`,
  backgroundClip: 'padding-box',

  '@hover': {
    '&:hover': {
      backgroundColor: '$grayA4'
    }
  },
  '&:active': {
    bc: '$grayA5'
  },

  '&:focus': {
    borderColor: '$slate8'
  },
  '&:focus:not(:focus-visible)': {
    borderColor: 'transparent'
  }
});
