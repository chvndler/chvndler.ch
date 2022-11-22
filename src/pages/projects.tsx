import { Container, Section, Separator, Space, Text } from '@/components/ds';
import { RelativeFooter } from '@/components/layout/app-footer/relative-footer';
import { PageLayout } from '@/components/layout/page';
import { ProjectDisplay } from '@/components/primitives/project-display';

const ProjectsPage = () => {
  return (
    <>
      <PageLayout>
        <Section size={'4'}>
          <Container size={'3'}>
            <Text
              css={{
                color: '$chxn9',
                fontSize: 22,
                fontFamily: '"Lateral Extended Bold", sans-serif',
                fontWeight: 'bold'
              }}
            >
              projects.
            </Text>
            <Text
              css={{
                textTransform: 'lowercase',
                fontSize: 13,
                fontWeight: 400,
                color: '$chxn3',
                fontFamily: '"Lateral Extended Medium", sans-serif'
              }}
            >
              SCROLL LEFT ( OR ) RIGHT TO VIEW.
            </Text>
          </Container>

          <Space size={'2'} />

          <Container size={'3'}>
            <Text
              css={{
                color: '$sage10',
                fontFamily: '"Lateral Standard Bold", sans-serif',
                fontSize: 52,
                fontWeight: 'bold',
                textAlign: 'left',
                letterSpacing: '-0.08rem',
                lineHeight: '50px',
                '@md': {
                  fontSize: 38,
                  lineHeight: '36px',
                  letterSpacing: '0rem'
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
