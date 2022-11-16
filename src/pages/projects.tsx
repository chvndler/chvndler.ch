import { Container, Grid, Section, Separator, Space, Text } from '@/components/ds';
import { RelativeFooter } from '@/components/layout/app-footer/relative-footer';
import { PageLayout } from '@/components/layout/page';
import { MinimalProjectEntry, ProjectEntry } from '@/components/primitives/project-display/ProjectEntry';

const ProjectsPage = () => {
  return (
    <>
      <PageLayout>
        <Section size={'4'}>
          <Container size={'4'}>
            <Text
              css={{
                color: '$chxn4',
                fontSize: 18,
                fontFamily: '"Lateral Extended Bold", sans-serif',
                fontWeight: 'bold'
              }}
            >
              projects
            </Text>
          </Container>

          <Space size={'2'} />
          <Container size={'4'}>
            <Text
              css={{
                color: '$sage10',
                fontFamily: '"Lateral Standard Bold", sans-serif',
                fontSize: 72,
                fontWeight: 'bold',
                textAlign: 'left',
                letterSpacing: '-0.08rem',
                lineHeight: '70px',
                '@md': {
                  fontSize: 42,
                  lineHeight: '40px'
                }
              }}
            >
              HERE ARE A FEW OF MY
              <br />
              CURRENT PROJECTS AND
              <br />
              EXPERIMENTS.
            </Text>
          </Container>
        </Section>
        <Space size={'2'} />
        <Separator decorative orientation={'horizontal'} />
        <Space size={'2'} />
        <Section size={'4'}>
          <Container size={'4'}>
            <Grid
              gap="2"
              align="stretch"
              flow="row"
              columns="3"
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
              />{' '}
              <ProjectEntry
                pRepository="https://github.com/chvndler"
                pTitle="A4"
                pSummary="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
              />
            </Grid>
          </Container>
        </Section>

        <Space size={'2'} />

        <Section size={'4'}>
          <Container size={'4'}>
            <Grid
              gap="2"
              align="stretch"
              flow="row"
              columns="3"
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
      </PageLayout>
      <RelativeFooter />
    </>
  );
};

export default ProjectsPage;
