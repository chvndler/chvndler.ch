import { prjcts as items } from '@/lib/prjcts';
import { Grid, Section } from '@/ui';
import React from 'react';
import { ProjectEntry } from './ProjectEntry';


export const Project = () => {
  return (
    <>
      <Section size='2' css={{ paddingTop: '0', paddingBottom: '40px' }}>
        <Grid
          css={{
            gap: '4px',
            gridTemplateColumns: '1fr',
            '@bp1': {
              gap: '4px',
              gridTemplateColumns: '1fr 1fr',
            },
            '@bp2': {
              gap: '4px',
              gridTemplateColumns: '1fr 1fr',
            },
          }}>
          {items.map(entry => {
            return <ProjectEntry key={entry.key} title={entry.title} href={entry.url}
                                 description={entry.description} />;
          })}
        </Grid>
      </Section>
    </>
  );
};
