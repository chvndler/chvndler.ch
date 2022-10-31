import { Canvas, Container, Text } from '@/components/ds';
import { PageLayout } from '@/components/layout/page';
import { AlternateThemeButton } from '@/components/primitives/theme-button';
import { TimeDisplay } from '@/components/primitives/time-display';
import { AboutMe } from '@/components/sections/about-me';
import { ConnectSection } from '@/components/sections/connect/indext';
import { NameAndTitle } from '@/components/sections/name-and-title';

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

// RENDER APP©...
const AppPage = () => {
  return (
    <>
      <PageLayout>
        <AlternateThemeButton />
        <Canvas>
          <NameAndTitle />
          <AboutMe />
          <ConnectSection />
        </Canvas>
        <TemporaryFooter />
      </PageLayout>
    </>
  );
};

export default AppPage;
