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
}
