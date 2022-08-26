import React from 'react';
import { ProjectGrid } from '@/components/ProjectGrid';
import { IntroSection } from '@/components/IntroSection';
import { ConnectSection } from '@/components/ConnectSection';
import { Box } from '@/ui';


export const IndexContent = () => {
  return (
    <>
      <Box css={{
        position: 'absolute',
        top: 40,
        left: 0,
        width: '50vw',
        height: 'auto',
        paddingLeft: '10px',
        paddingRight: '10px',
        margin: 0,
        '@xl': {
          width: '50vw',
        },
        '@lg': {
          width: '75vw',
        },
        '@md': {
          width: '70vw',
          paddingLeft: '0',
          paddingRight: '0',
          paddingBottom: '60px',
        },
        '@sm': {
          width: '100vw',
          paddingLeft: '0',
          paddingRight: '0',
          paddingBottom: '100px',
        },
      }}>
        <IntroSection />
        <ProjectGrid />
        <ConnectSection />
      </Box>
    </>
  );
};
