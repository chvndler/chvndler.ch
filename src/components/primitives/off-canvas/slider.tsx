import React from 'react';

import { Grid, Section } from '@/components/ds';

type SlideProps = {
  children?: React.ReactNode;
};

export const ContentSlider = ({ children }: SlideProps) => {
  return (
    <>
      <Section
        size="4"
        css={{
          position: 'relative',
          overflowX: 'scroll',
          overflowY: 'hidden',
          WebkitOverflowScrolling: 'touch',
          MsOverflowStyle: 'none',
          scrollbarWidth: 'none',
          '&::-webkit-scrollbar': {
            display: 'none'
          }
        }}
      >
        <Grid flow="column" align="center" justify="start" gap="3" css={{ marginRight: 10 }}>
          {children}
        </Grid>
      </Section>
    </>
  );
};
