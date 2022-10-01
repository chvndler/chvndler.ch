import * as AspectRatioPrimitive from '@radix-ui/react-aspect-ratio';
import { styled } from '@stitches/react';
import React from 'react';

type AspectProps = {
  children?: React.ReactNode;
};
// Exports
export const AspectRatio = AspectRatioPrimitive;

// Your app...
const Box = styled('div', {});

export const Img = styled('img', {
  objectFit: 'cover',
  width: '100%',
  height: '100%'
});

export const Aspect = ({ children }: AspectProps) => (
  <Box
    css={{
      width: 320,
      height: 296,
      borderRadius: 20,
      overflow: 'hidden'
    }}
  >
    <AspectRatio.Root ratio={1 / 1}>{children}</AspectRatio.Root>
  </Box>
);

/*
      <Img
        src="https://images.unsplash.com/photo-1535025183041-0991a977e25b?w=300&dpr=2&q=80"
        alt="Landscape photo by Tobias Tullius"
      />
      */
