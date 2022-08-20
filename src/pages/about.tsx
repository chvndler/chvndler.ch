import { ColorBar } from '@/components/ColorBar';
import { IndexContent } from '@/components/IndexContent';
import { Box } from '@/ui';
import Head from 'next/head';
import React from 'react';
import { NavBar } from '@/components/NavBar';

const About = () => {
  return (
    <>
      <Head>
        <title>chvn.me/about</title>
      </Head>

      <NavBar />
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
      </Box>
    </>
  );
};

export default About;
