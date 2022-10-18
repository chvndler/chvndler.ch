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
            <Text css={{ fontFamily: '$neueMonteal', fontSize: 20, fontWeight: 'normal', letterSpacing: '-0.05rem' }}>
              Projects
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
