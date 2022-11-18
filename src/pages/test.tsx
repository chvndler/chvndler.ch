import { styled } from 'stitches.config';

import { Meta } from '@/components/common/meta';
import { Container, Section } from '@/components/ds';
import { PageLayout } from '@/components/layout/page';
import { ProjectGridIndex } from '@/components/primitives/ProjectGrid';
import { PageHero } from '@/components/sections/page-hero';

const TestingBox = styled('div', {
  bozSizing: 'border-box',
  height: '100vh',
  width: 'auto'
});
// RENDER APP©...
const TestPage = () => {
  return (
    <>
      <PageLayout>
        <Meta />

        <PageHero />
        <TestingBox>
          <Section size={'3'}>
            <Container size={'4'}>
              <ProjectGridIndex />
            </Container>
          </Section>
        </TestingBox>
      </PageLayout>
    </>
  );
};

export default TestPage;
