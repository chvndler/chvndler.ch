import { Container, Section, Text } from '@/components/ds';
import { PageLayout } from '@/components/layout/page';
import { Reveal } from '@/components/primitives/reveal';

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
        <Section size="2">
          <Reveal />
        </Section>
      </PageLayout>
    </>
  );
};

export default ProjectsPage;
