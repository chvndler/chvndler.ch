import { styled } from 'stitches.config';

import { Box, Container, Grid, Paragraph, Section, Separator, Space, Text } from '@/components/ds';
import { PageLayout } from '@/components/layout/page';

const ProjectsPage = () => {
  return (
    <>
      <PageLayout>
        <Section size={'4'}>
          <Container size={'4'}>
            <Text
              css={{
                color: '$sage10',
                fontFamily: '$neueMontreal',
                fontSize: 72,
                fontWeight: 'normal',
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
                <Text css={{ fontSize: 22 }}>atlr.typesxcript</Text>
                <Space size={'1'} />
                <Paragraph css={{ fontSize: 12 }}>
                  Lemkus reached out to us to create a new design system and conduct an overhaul of the brand’s digital
                  experience. The objective was to provide customers with seamless purchasing journeys and we did this
                  by combining robust user experience with strong and engaging content.
                </Paragraph>
              </ProjectBox>

              <ProjectBox css={{}}>
                <Text css={{ fontSize: 22 }}>@atlr/ds</Text>
                <Space size={'1'} />
                <Paragraph css={{ fontSize: 12 }}>
                  Lemkus reached out to us to create a new design system and conduct an overhaul of the brand’s digital
                  experience. The objective was to provide customers with seamless purchasing journeys and we did this
                  by combining robust user experience with strong and engaging content.
                </Paragraph>
              </ProjectBox>
            </Grid>
          </Container>
        </Section>
      </PageLayout>
    </>
  );
};

export default ProjectsPage;

const ProjectBox = styled(Box, {
  border: '1px solid $mauveA8',
  padding: 22,
  borderRadius: 16,
  width: 'auto'
});
