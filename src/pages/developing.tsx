import { ColorBar } from '@/components/ColorBar';
import { Box, Canvas } from '@/ui';
import Head from 'next/head';
import React from 'react';
import { CmndK } from '@/components/CmndK';

const Developing = () => {
  return (
    <>
      <Head>
        <title>/developing</title>
      </Head>
      <ColorBar />
      <Canvas css={{ alignItems: 'center', margin: 'auto', justifyContent: 'center', textAlign: 'center' }}>
        <Box css={{ padding: '40px' }}>
          <CmndK />
        </Box>
      </Canvas>
    </>
  );
};

export default Developing;
