import { ChvnLogoFixed } from '@/components/ChvnLogoFixed';
import { ColorBar } from '@/components/ColorBar';
import { IndexContent } from '@/components/IndexContent';
import { Box } from '@/ui';
import Head from 'next/head';
import React from 'react';


const About = () => {
  return (
    <>
      <Head>
        <title>chvn.me/about</title>
      </Head>
      <ColorBar />
      
      
      <Box css={{ minWidth: '100vw', minHeight: '100vh', padding: 0, margin: 0, backgroundColor: '$mauve1' }}>
        <IndexContent />
        <ChvnLogoFixed />
      </Box>
    </>
  );
};

export default About;
