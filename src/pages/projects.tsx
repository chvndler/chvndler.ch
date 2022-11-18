import { Container, Section, Separator, Space, Text } from '@/components/ds';
import { RelativeFooter } from '@/components/layout/app-footer/relative-footer';
import { PageLayout } from '@/components/layout/page';
import { ProjectGridIndex } from '@/components/primitives/ProjectGrid';

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

        <Separator decorative orientation={'horizontal'} css={{ backgroundColor: '$lime9' }} />

        <Space size={'2'} />

        <Section size={'3'}>
          <Container size={'4'}>
            <ProjectGridIndex />
          </Container>
        </Section>

        <Space size={'5'} />

        <RelativeFooter />
      </PageLayout>
    </>
  );
};

export default ProjectsPage;
