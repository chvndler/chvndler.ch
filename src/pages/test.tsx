import { Canvas, Container } from '@/components/ds';
import { UseFullViewport } from '~/components/common/viewport/alt';
import { AppBar } from '~/components/layout/app-bar';
import { AppFooter } from '~/components/layout/app-footer';
import { CDCLogo } from '~/components/logos';

const TestPage = () => {
  return (
    <>
      <AppBar />
      <UseFullViewport>
        <Canvas>
          <Container css={{ alignContent: 'center', margin: 'auto', display: 'flex', justifyContent: 'center' }}>
            <CDCLogo />
          </Container>
        </Canvas>
      </UseFullViewport>
      <AppFooter />
    </>
  );
};

export default TestPage;
