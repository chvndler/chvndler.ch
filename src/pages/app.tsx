import { Meta } from '@/components/common/meta';
import { Canvas } from '@/components/ds';
import { Intro } from '@/components/sections/intro';

// RENDER APP©...
const AppPage = () => {
  return (
    <>
      <Meta />
      <Canvas>
        <Intro />
      </Canvas>
    </>
  );
};

export default AppPage;
