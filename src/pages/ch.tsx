import { PageLayout } from '@/components/layout/page';
import { Canvas } from '~/components/ds';
import { CoverGrid } from '~/components/layout/cover-grid';

const Home = () => {
  return (
    <PageLayout>
      <Canvas>
        <CoverGrid />
      </Canvas>
    </PageLayout>
  );
};

export default Home;
