import { Container, Text } from '@/components/ds';
import { RelativeFooter } from '@/components/layout/app-footer/relative-footer';
import { PageLayout } from '@/components/layout/page';
import { ProjectSection } from '@/components/sections/project-section';

const ProjectsPage = () => {
  return (
    <>
      <PageLayout>
        <Container size="2">
          <Text
            css={{
              color: '$sage10',
              fontFamily: '$druk',
              fontSize: 16,
              fontWeight: 'bold',
              textAlign: 'center',
              letterSpacing: 'normal'
            }}
          >
            PROJECTS
          </Text>
        </Container>

        <ProjectSection />
      </PageLayout>
      <RelativeFooter />
    </>
  );
};

export default ProjectsPage;
