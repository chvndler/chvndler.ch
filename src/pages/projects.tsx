import { Container, Section, Separator, Space, Text } from '@/components/ds';
import { RelativeFooter } from '@/components/layout/app-footer/relative-footer';
import { PageLayout } from '@/components/layout/page';
import { ProjectDisplay } from '@/components/primitives/project-display';

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
              current projects
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

            <Space size={'1'} />
            <Text
              css={{
                fontSize: 12,
                fontWeight: '500',
                color: '$chxn3',
                fontFamily: '"Lateral Extended Medium", sans-serif'
              }}
            >
              SCROLL LEFT OR RIGHT TO SEE MORE.
            </Text>
          </Container>
        </Section>

        <Space size={'2'} />

        <Separator decorative orientation={'horizontal'} css={{ backgroundColor: '$sage1' }} />

        <Space size={'2'} />

        <Container size={'4'}>
          <ProjectDisplay />
        </Container>

        <Space size={'5'} />

        <RelativeFooter />
      </PageLayout>
    </>
  );
};

export default ProjectsPage;
