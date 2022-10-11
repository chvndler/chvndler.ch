import { Container, Section, Text } from '@/components/ds';
import { PageLayout } from '@/components/layout/page';
import { Reveal } from '@/components/primitives/reveal';
import { RelativeFooter } from '~/components/layout/app-footer/relative-footer';

const ProjectsPage = () => {
  return (
    <>
      <PageLayout>
        <Section>
          <Container size="2">
            <Text css={{ fontFamily: '$druk', fontSize: 20, fontWeight: 'bold', letterSpacing: '-0.05rem' }}>
              NOTES
            </Text>
          </Container>
          <Reveal />
        </Section>
      </PageLayout>
      <RelativeFooter />
    </>
  );
};

export default ProjectsPage;
