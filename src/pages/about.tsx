import { ColorBar } from '@/components/ColorBar';
import { IndexContent } from '@/components/IndexContent';
import { Box } from '@/ui';
import Head from 'next/head';
import React from 'react';
import { FixedFooter } from '@/components/FixedFooter';

const About = () => {
  return (
    <>
      <Head>
        <title>chvn.me/about</title>
      </Head>
      <ColorBar />

      <Box css={{
        width: '100vw',
        height: '100vh',
        padding: 0,
        margin: 0,
        overflow: 'auto',
        backgroundColor: '$mauve1',
      }}>
        <IndexContent />
        <FixedFooter />
      </Box>
    </>
  );
};

export default About;
