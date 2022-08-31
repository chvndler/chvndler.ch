import { ColorBar } from '@/components/ColorBar';
import { Project } from '@/components/projects/Project';
import { Box, Container, Section } from '@/ui';
import Head from 'next/head';
import React from 'react';

const Projects = () => {
  return (
    <>
      <Head>
        <title>/projects</title>
      </Head>
      <ColorBar />

      <Box>
        <Section size={2} css={{ paddingTop: '80px' }}>
          <Container size={3} css={{}}>
            <Project />
          </Container>
        </Section>
      </Box>
    </>
  );
};

export default Projects;
