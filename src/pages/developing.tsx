import { ChvnLogoFixed } from '@/components/ChvnLogoFixed';
import { ColorBar } from '@/components/ColorBar';
import { ThemeToggle } from '@/components/ThemeToggle';
import { Box, Section, Text } from '@/ui';
import Head from 'next/head';
import React from 'react';


const Developing = () => {
  return (
    <>
      <Head>
        <title>/developing</title>
      </Head>
      <ColorBar />
      <ThemeToggle />
      <Box css={{ minWidth: '100vw', minHeight: '100vh', padding: 0, margin: 0, backgroundColor: '$mauve1' }}>
        
        <Box css={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '50vw',
          height: 'auto',
          paddingLeft: '10px',
          paddingRight: '10px',
          margin: 0,
          '@xl': {
            width: '30vw',
          },
          '@lg': {
            width: '50vw',
          },
          '@md': {
            width: '70vw',
          },
          '@sm': {
            width: '100vw',
          },
        }}>
          <Section size={2}>
            <Text css={{ fontFamily: '$pragmaticaExtended', fontSize: '18px', fontWeight: '500', color: '$opal' }}>
              chvn.me/developing
            </Text>
          </Section>
        </Box>
        
        
        <ChvnLogoFixed />
      </Box>
    </>
  );
};

export default Developing;
