import { Canvas, Section } from '@/components/ds';
import { PageLayout } from '@/components/layout/page';

const DevMirrorPage = () => {
  return (
    <>
      <PageLayout page_type={'CoverPage'}>
        <Section size={'4'}>
          <Canvas></Canvas>
        </Section>
      </PageLayout>
    </>
  );
};

export default DevMirrorPage;
