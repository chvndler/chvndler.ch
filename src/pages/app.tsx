import { Meta } from '@/components/common/meta';
import { Canvas } from '@/components/ds';
import { Intro } from '@/components/sections/intro';

/*
const TemporaryFooter = () => {
  return (
    <>
      <Container size="1" css={{ position: 'fixed', bottom: 40, left: 0, right: 0 }}>
        <TimeDisplay />
        <Text
          css={{
            color: '$chxn3',
            lineHeight: '1',
            fontFamily: '$tStar',
            fontSize: 14,
            fontWeight: '600',
            textAlign: 'center',
            textTransform: 'uppercase',
            letterSpacing: '0.04rem'
          }}
        >
          website will re-open soon.
        </Text>
      </Container>
    </>
  );
};
*/

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
