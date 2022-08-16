import { styled } from '@/lib/stitches.config';

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
  outline: 0,
  borderRadius: '$2',
  color: '$hiContrast',
  border: '1px solid $mauveA4',
  backgroundClip: 'padding-box',
  // backgroundColor: '$grayA3',
  
  '@hover': {
    '&:hover': {
      backgroundColor: '$grayA4',
    },
  },
  '&:active': {
    bc: '$grayA5',
  },
  
  '&:focus': {
    borderColor: '$slate8',
  },
  '&:focus:not(:focus-visible)': {
    borderColor: 'transparent',
  },
});
