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
        top: 50,
        left: 0,
        width: '50vw',
        height: 'auto',
        paddingLeft: '10px',
        paddingRight: '10px',
        margin: 0,
        '@xl': {
          width: '40vw',
        },
        '@lg': {
          width: '70vw',
        },
        '@md': {
          width: '70vw',
          paddingLeft: '0',
          paddingRight: '0',
        },
        '@sm': {
          width: '100vw',
          paddingLeft: '0',
          paddingRight: '0',
        },
      }}>


        <IntroSection />
        <ProjectGrid />


        <ConnectSection />


      </Box>
    </>
  );
};
