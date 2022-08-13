import React from 'react';
import { ThemeToggle } from '@/components/ThemeToggle';
import { ProjectGrid } from '@/components/ProjectGrid';
import { IntroSection } from '@/components/IntroSection';
import { ConnectSection } from '@/components/ConnectSection';
import { Box, Section, Space } from '@/ui';


export const IndexContent = () => {
  return (
    <>
      <ThemeToggle />
      <Box css={{
        position: 'absolute',
        top: 0,
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

        <Section size={2}>
          <IntroSection />
          <ProjectGrid />
        </Section>

        <Space size={1} />

        <Section size={2}>
          <ConnectSection />
        </Section>


      </Box>
    </>
  );
};
