import { styled } from '@/lib/stitches.config';

export const Canvas = styled('div', {
  zIndex: '20',
  backgroundColor: 'transparent',
  boxSizing: 'border-box',
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '100%',
  height: 'auto',
  margin: 'auto',
  padding: '0',
});
