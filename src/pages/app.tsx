import { Canvas, Sup, Text } from '@/components/ds';
import { AppFooter } from '@/components/layout/app-footer';
import { PageLayout } from '@/components/layout/page';

const AppPage = () => {
  return (
    <>
      <PageLayout>
        <Canvas>
          <Text
            css={{
              fontSize: 38,
              fontFamily: '"Lateral Standard Bold", sans-serif',
              fontWeight: 'bold',
              textAlign: 'center',
              lineHeight: 'normal',
              color: '$sage11',
              letterSpacing: '-0.05rem'
            }}
          >
            CHANDLER<Sup>®</Sup>
          </Text>
          <Text
            css={{
              fontSize: 16,
              fontFamily: '"Lateral Standard Regular", sans-serif',
              fontWeight: 400,
              textAlign: 'center',
              lineHeight: '12px',
              color: '$sage11'
            }}
          >
            Front-End Developer and Designer
          </Text>
        </Canvas>
        <AppFooter />
      </PageLayout>
    </>
  );
};

export default AppPage;
