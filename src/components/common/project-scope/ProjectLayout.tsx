import React from 'react';

import { Container, Grid, Section } from '@/components/ds';

type ProjectLayoutProps = {
  children: React.ReactNode;
};

export const ProjectLayout = ({ children }: ProjectLayoutProps) => {
  return (
    <>
      <Section size="2" css={{ paddingTop: 40 }}>
        <Container size="2" css={{}}>
          <Grid
            align="stretch"
            flow="row"
            columns="2"
            gap="4"
            css={{
              gridTemplateColumns: 'repeat(2, 1fr)',
              '@md': {
                gridTemplateColumns: 'repeat(2, 1fr)'
              },
              '@sm': {
                gridTemplateColumns: 'repeat(1, 1fr)'
              }
            }}
          >
            {children}
          </Grid>
        </Container>
      </Section>
    </>
  );
};
