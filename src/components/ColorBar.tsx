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
      height: '6px',
      padding: 0,
      margin: 0,
      // backgroundColor: '$volt',
      // backgroundImage: 'linear-gradient(45deg, #06b9f6, #a0b9b5, #d1ba71, #f1bc06)',
      backgroundImage: 'linear-gradient(45deg, hsla(195, 95%, 49%, 0.6), hsl(170, 15%, 68%, 0.7), hsla(92, 100%, 73%, 0.6), hsl(46, 51%, 63%, 0.2), hsla(195, 95%, 49%, 0.8))',
    }} />
  );
};


/**
 * background-image: linear-gradient(90deg, #c36b00, #bf8962, #aaa6af, #6bc4ff)
 */
