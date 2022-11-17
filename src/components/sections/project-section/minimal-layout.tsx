import { Container, Grid, Section } from '@/components/ds';
import { MinimalProjectEntry } from '@/components/primitives/project-display/ProjectEntry';

export const MinimalProjectSection = () => {
  return (
    <Section size={'4'}>
      <Container size={'4'}>
        <Grid
          gap="2"
          align="stretch"
          flow="row"
          columns="3"
          css={{
            gap: '2',
            '@lg': {
              gridTemplateColumns: 'repeat(2, 1fr)'
            },
            '@md': {
              gridTemplateColumns: 'repeat(1, 1fr)'
            },
            '@sm': {
              gridTemplateColumns: 'repeat(1, 1fr)'
            }
          }}
        >
          <MinimalProjectEntry
            pRepository="https://github.com/chvndler"
            pTitle="atlr.typesxript"
            pSummary="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
          />
          <MinimalProjectEntry
            pRepository="https://github.com/chvndler"
            pTitle="atlr.icxns"
            pSummary="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
          />{' '}
          <MinimalProjectEntry
            pRepository="https://github.com/chvndler"
            pTitle="atlr.colr"
            pSummary="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
          />
        </Grid>
      </Container>
    </Section>
  );
};
