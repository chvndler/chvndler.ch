import { Container } from '@/components/ds';
import { HeroSection } from '@/components/sections/hero';
import { PageLayout } from '~/components/layout/page';

const TestPage = () => {
  return (
    <>
      <PageLayout>
        <HeroSection size="1" color="default" alignment="responsiveLeft" css={{ padding: 0, height: '200vh' }}>
          <Container size="1" css={{ padding: 20, paddingTop: '100px' }}></Container>
        </HeroSection>
      </PageLayout>
    </>
  );
};

export default TestPage;
