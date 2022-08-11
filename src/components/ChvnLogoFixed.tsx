import { ChvndlerClipped } from '@/components/logo/chvndler-clipped';
import { Box } from '@/ui';
import React from 'react';


export const ChvnLogoFixed = () => {
  return (
    <>
      <Box css={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        width: '100vw',
        height: 'auto',
        backgroundColor: 'transparent',
        padding: 0,
        margin: 0,
        color: '$mauve7',
      }}>
        {/* <!-- <ChvnOutline /> --> */}
        
        <ChvndlerClipped />
      </Box>
    </>
  );
};
