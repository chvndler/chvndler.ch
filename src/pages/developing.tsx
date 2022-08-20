import { ColorBar } from '@/components/ColorBar';
import { Box, Canvas, Text } from '@/ui';
import Head from 'next/head';
import React from 'react';
import { CmndK } from '@/components/CmndK';
import { NavBar } from '@/components/NavBar';

const Developing = () => {
  return (
    <>
      <Head>
        <title>/developing</title>
      </Head>
      <NavBar />
      <ColorBar />
      <Canvas css={{ alignItems: 'center', margin: 'auto', justifyContent: 'center', textAlign: 'center' }}>
        <CmndK />
      </Canvas>
    </>
  );
};

export default Developing;
