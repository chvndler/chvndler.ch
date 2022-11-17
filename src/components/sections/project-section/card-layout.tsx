import { Container, Grid, Section } from '@/components/ds';
import { ProjectEntry } from '@/components/primitives/project-display/ProjectEntry';

export const ProjectSectionWithCards = () => {
  return (
    <Section size={'4'}>
      <Container size={'4'}>
        <Grid
          gap="2"
          align="stretch"
          flow="row"
          columns="2"
          css={{
            gap: '2',
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
            pTitle="atlr.typesxript"
            pSummary="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
          />
          <ProjectEntry
            pRepository="https://github.com/chvndler"
            pTitle="A4"
            pSummary="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
          />
        </Grid>
      </Container>
    </Section>
  );
};
