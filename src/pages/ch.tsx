import { PageLayout } from '@/components/layout/page';
import { MainHero } from '~/components/common/main-hero';
import { Canvas } from '~/components/ds';

const Home = () => {
  return (
    <PageLayout>
      <Canvas>
        <MainHero />
      </Canvas>
    </PageLayout>
  );
};

export default Home;
