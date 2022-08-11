import { ChvnLogoFixed } from '@/components/ChvnLogoFixed';
import { ColorBar } from '@/components/ColorBar';
import { Project } from '@/components/projects/Project';
import { ThemeToggle } from '@/components/ThemeToggle';
import { Box, Container, Section, Text } from '@/ui';
import Head from 'next/head';
import React from 'react';


const Projects = () => {
  return (
    <>
      <Head>
        <title>/projects</title>
      </Head>
      <ColorBar />
      
      <Box css={{ minWidth: '100vw', minHeight: '100vh', padding: 0, margin: 0, backgroundColor: '$mauve1' }}>
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
            <Text css={{ fontFamily: '$pragmatica', fontSize: '13px', fontWeight: 'bold', color: '$opal' }}>
              CHVN.ME/PROJECTS
            </Text>
          </Section>
        </Box>
        
        
        <Section>
          <Container size={3} css={{}}>
            <Project />
          </Container>
        
        </Section>
        
        
        <ChvnLogoFixed />
      </Box>
    </>
  );
};

export default Projects;
