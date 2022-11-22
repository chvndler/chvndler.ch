import { theme } from 'stitches.config';

import { Canvas, Container, FixedCanvas, Text } from '@/components/ds';
import { AlternateFooter } from '@/components/layout/app-footer/alternate-footer';
import { AtlrNavbar } from '@/components/layout/atlr.navbar';

const TestPage = () => {
  return (
    <>
      <AtlrNavbar />
      <FixedCanvas>
        <Canvas>
          <Container css={{ margin: 'auto', alignItems: 'center', justifyContent: 'center' }}>
            <Text
              css={{
                textAlign: 'center',
                color: theme.colors.sage11,
                fontSize: 32,
                fontFamily: theme.fonts.latBoldExtd,
                fontWeight: 500,
                letterSpacing: '-0.03rem',
                lineHeight: '1.3'
              }}
            >
              CHANDLER®
            </Text>
            <Text
              css={{
                fontSize: 16,
                fontFamily: theme.fonts.panSb,
                fontWeight: 'auto',
                textAlign: 'center',
                lineHeight: '1',
                color: theme.colors.chxn4A
              }}
            >
              Front-End Developer and Designer
            </Text>
          </Container>
        </Canvas>
      </FixedCanvas>

      <AlternateFooter />
    </>
  );
};

export default TestPage;
