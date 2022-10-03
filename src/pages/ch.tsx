import { PageLayout } from '@/components/layout/page';
import { MainHero } from '~/components/common/main-hero';
import { Canvas } from '~/components/ds';
import { AppFooter } from '~/components/layout/app-footer';

const Home = () => {
  return (
    <PageLayout>
      <Canvas>
        <MainHero />
      </Canvas>
      <AppFooter />
    </PageLayout>
  );
};

export default Home;
