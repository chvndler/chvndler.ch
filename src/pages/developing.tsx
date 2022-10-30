import { Canvas } from '@/components/ds';
import { PageLayout } from '@/components/layout/page';
import { EmblaSlide } from '@/components/primitives/scroll-carousel';

const DevelopingPage = () => {
  return (
    <>
      <PageLayout>
        <Canvas>
          <EmblaSlide />
        </Canvas>
      </PageLayout>
    </>
  );
};

export default DevelopingPage;
