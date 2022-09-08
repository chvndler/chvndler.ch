import { ColorBar } from '@/components/ColorBar';
import { Canvas } from '@/ui';
import Head from 'next/head';
import React from 'react';

const Developing = () => {
  return (
    <>
      <Head>
        <title>/developing</title>
      </Head>
      <ColorBar />
      <Canvas css={{ alignItems: 'center', margin: 'auto', justifyContent: 'center', textAlign: 'center' }}>
      </Canvas>
    </>
  );
};

export default Developing;
