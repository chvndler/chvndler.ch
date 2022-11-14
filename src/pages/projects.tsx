import { styled } from 'stitches.config';

import { Button, Container, Grid, Paragraph, Section, Separator, Space, Text } from '@/components/ds';
import { RelativeFooter } from '@/components/layout/app-footer/relative-footer';
import { PageLayout } from '@/components/layout/page';

const ProjectBox = styled('div', {
  border: '1px solid',
  borderLeftWidth: 1,
  borderLeftStyle: 'inset',
  borderRightWidth: 0,
  borderTopWidth: 0,
  borderBottomWidth: 0,
  padding: 22,
  width: 'auto',

  '&:hover': {}
});

const ProjectSummary = styled(Paragraph, {
  fontFamily: '$lateralStandard',
  fontWeight: 'normal',
  fontSize: 13,
  color: '$sage9'
});

const ProjectTitle = styled(Text, {
  fontSize: 22,
  fontFamily: '"Lateral Extended Bold", sans-serif',
  fontWeight: 'bold',
  color: '$chxn4'
});

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
              EXPLORATIONS.
            </Text>
          </Container>
        </Section>
        <Space size={'2'} />
        <Separator decorative orientation={'horizontal'} />
        <Space size={'2'} />
        <Section size={'4'}>
          <Container size={'4'}>
            <Grid
              gap="3"
              align="stretch"
              flow="row"
              columns="3"
              css={{
                gap: '2',
                '@md': {
                  gridTemplateColumns: 'repeat(2, 1fr)'
                },
                '@sm': {
                  gridTemplateColumns: 'repeat(1, 1fr)'
                }
              }}
            >
              <ProjectBox css={{}}>
                <ProjectTitle>atlr® typesxcript</ProjectTitle>
                <Space size={'1'} />
                <ProjectSummary>
                  Opinionated and essential starting code for Next.js, React, Atlr® DS, and Typescript. I begin here
                  with most every project I create. Use it on your next build and let me know how you like it.
                </ProjectSummary>
                <Space size={'2'} />
                <Button css={{ fontSize: 10, fontFamily: '"Lateral Extended Bold", sans-serif' }}>view more</Button>
              </ProjectBox>

              <ProjectBox css={{}}>
                <ProjectTitle>Atlr® DS</ProjectTitle>
                <Space size={'1'} />
                <ProjectSummary>
                  An open-source React Component Library built using Stitches x Radix-UI™. I've slightly styled each
                  component as a starting point. Minimally Styled. Highly performant.
                </ProjectSummary>
                <Space size={'2'} />
                <Button css={{ fontSize: 10, fontFamily: '"Lateral Extended Bold", sans-serif' }}>view more</Button>
              </ProjectBox>

              <ProjectBox css={{}}>
                <ProjectTitle>atlr® icxns</ProjectTitle>
                <Space size={'1'} />
                <ProjectSummary>
                  Not your basic icon set.
                  <br />A small icon library for the web. These glyphs go with any modern project, or use theme if you
                  just need some sauce to your app.
                </ProjectSummary>
                <Space size={'2'} />
                <Button css={{ fontSize: 10, fontFamily: '"Lateral Extended Bold", sans-serif' }}>view more</Button>
              </ProjectBox>
            </Grid>
          </Container>
        </Section>
      </PageLayout>
      <RelativeFooter />
    </>
  );
};

export default ProjectsPage;
