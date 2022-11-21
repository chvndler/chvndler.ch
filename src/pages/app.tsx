import { Canvas, Sup, Text } from '@/components/ds';
import { AppFooter } from '@/components/layout/app-footer';
import { MenuOnHoverComponent } from '@/components/primitives/popover/menu-on-hover';

const AppPage = () => {
  return (
    <>
      <MenuOnHoverComponent />
      <Canvas>
        <Text
          css={{
            fontSize: 40,
            fontFamily: '"Lateral Standard Bold", sans-serif',
            fontWeight: 'bold',
            textAlign: 'center',
            lineHeight: 'normal',
            color: '$chxn4',
            letterSpacing: '-0.05rem'
          }}
        >
          CHANDLER<Sup>®</Sup>
        </Text>
        <Text
          css={{
            fontSize: 17,
            fontFamily: '"Lateral Standard Regular", sans-serif',
            fontWeight: 400,
            textAlign: 'center',
            lineHeight: '8px',
            color: '$sage11'
          }}
        >
          Front-End Developer and Designer
        </Text>
      </Canvas>
      <AppFooter />
    </>
  );
};

export default AppPage;
