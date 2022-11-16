import { Grid } from '@/components/ds';
import { ProjectEntry } from '@/components/primitives/project-display/ProjectEntry';

export const CoverGrid = () => {
  return (
    <>
      <Grid
        align="stretch"
        flow="row"
        columns="2"
        gap="2"
        css={{
          '@md': {
            gridTemplateColumns: 'repeat(1, 1fr)'
          },
          '@sm': {
            gridTemplateColumns: 'repeat(1, 1fr)'
          }
        }}
      >
        <ProjectEntry
          pRepository="https://github.com/chvndler"
          pTitle="A4"
          pSummary="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
        />
        <ProjectEntry
          pRepository="https://github.com/chvndler"
          pTitle="A4"
          pSummary="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
        />
      </Grid>

      <Grid
        align="stretch"
        flow="row"
        columns="3"
        gap="2"
        css={{
          '@md': {
            gridTemplateColumns: 'repeat(1, 1fr)'
          },
          '@sm': {
            gridTemplateColumns: 'repeat(1, 1fr)'
          }
        }}
      >
        <ProjectEntry
          pRepository="https://github.com/chvndler"
          pTitle="A4"
          pSummary="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
        />
        <ProjectEntry
          pRepository="https://github.com/chvndler"
          pTitle="A4"
          pSummary="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
        />
        <ProjectEntry
          pRepository="https://github.com/chvndler"
          pTitle="A4"
          pSummary="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
        />
      </Grid>
    </>
  );
};
