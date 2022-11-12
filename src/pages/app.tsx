import { Meta } from '@/components/common/meta';
import { Canvas } from '@/components/ds';
import { IntroFooter } from '@/components/layout/intro-footer';
import { Intro } from '@/components/sections/intro';

// RENDER APP©...
const AppPage = () => {
  return (
    <>
      <Meta />
      <Canvas>
        <Intro />
      </Canvas>
      <IntroFooter />
    </>
  );
};

export default AppPage;
