import { PageLayout } from '@/components/layout/page';
import { MainHero } from '~/components/common/main-hero';
import { Canvas } from '~/components/ds';
import { AppFooter } from '~/components/layout/app-footer';
import { TimePlusCursorData } from '~/components/primitives/time-x-cursor-data';

const Home = () => {
  return (
    <PageLayout>
      <Canvas>
        <MainHero />
      </Canvas>
      <TimePlusCursorData />
      <AppFooter />
    </PageLayout>
  );
};

export default Home;
