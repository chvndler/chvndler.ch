import * as AspectRatioPrimitive from '@radix-ui/react-aspect-ratio';
import { styled } from '@stitches/react';
import Image from 'next/image';
import React from 'react';
type AspectProps = {
  children?: any;
};

// Your app...
const Box = styled('div', {});

export const StyledImg = styled(Image, {
  objectFit: 'cover',
  width: '100%',
  height: '100%'
});

export const AspectRatio = AspectRatioPrimitive;
export const Img = StyledImg;

/*
export const Aspect = ({ children }: AspectProps) => (
  <Box
    css={{
      width: 'auto',
      height: 'auto',
      borderRadius: 20,
      overflow: 'hidden'
    }}
  >
    <AspectRatio.Root ratio={1 / 1}>{children}</AspectRatio.Root>
  </Box>
);
*/

export const EmblaAspect = ({ children }: AspectProps) => {
  return (
    <Box
      css={{
        width: 'auto',
        height: '100%',
        maxHeight: 320,
        borderRadius: 0,
        overflow: 'hidden'
      }}
    >
      <AspectRatio.Root ratio={1 / 1}>{children}</AspectRatio.Root>
    </Box>
  );
};
