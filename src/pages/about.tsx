import { ColorBar } from '@/components/ColorBar';
import { IndexContent } from '@/components/IndexContent';
import { Box } from '@/ui';
import React from 'react';
import { PageLayout } from '@/components/layout/page';

const About = () => {
  return (
    <>
      <PageLayout>
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
      </PageLayout>
    </>
  );
};

export default About;
