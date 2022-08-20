import { Box } from '@/ui';


export const ColorBar = () => {
  return (
    <Box css={{
      zIndex: '9999',
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      minWidth: '100vw',
      height: '4px',
      padding: 0,
      margin: 0,
      backdropFilter: 'blur(12px)',
      WebkitBackdropFilter: 'blur(12px)',
      saturate: '200%',
      backgroundImage: 'linear-gradient(45deg, hsla(195, 95%, 49%, 0.6), hsl(170, 15%, 68%, 0.7), hsla(92, 100%, 73%, 0.6), hsl(46, 51%, 63%, 0.2), hsla(195, 95%, 49%, 0.8))',
    }} />
  );
};
