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

          // dev
          // backgroundColor: '$grayA2',
          // border: '1px solid $grayA3',
          // borderLeftWidth: 0,
          // borderRightWidth: 0
        }}
      >
        <Grid flow="column" align="center" justify="start" gap="2">
          {children}
        </Grid>
      </Section>
    </>
  );
};
