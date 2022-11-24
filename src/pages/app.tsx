import { styled, theme } from 'stitches.config';

import { Canvas, Container, Text } from '@/components/ds';
import { FixedCanvas } from '@/components/ds/canvas';
import { CoverFooter } from '@/components/layout/app-footer';
import { AtlrNavbar } from '@/components/layout/atlr.navbar';
import ChxnCursor, { CursorWrapper } from '@/components/primitives/cursor';

const AppPage = () => {
  return (
    <>
      <CursorWrapper>
        <AtlrNavbar />
        <FixedCanvas>
          <Canvas>
            <Container size={'1'} css={{ margin: 'auto', alignItems: 'center', justifyContent: 'center' }}>
              <NameText>CHANDLER®</NameText>
              <RoleText>Front-End Developer and Designer</RoleText>
            </Container>
          </Canvas>
        </FixedCanvas>
        <CoverFooter />
        <ChxnCursor />
      </CursorWrapper>
    </>
  );
};

export default AppPage;

const NameText = styled('h1', {
  fontFamily: theme.fonts.latBoldExtd,
  color: theme.colors.chxn13,
  textAlign: 'center',
  fontSize: 30,
  fontWeight: 500,
  letterSpacing: '-0.04em',
  lineHeight: '1.3'
});

const RoleText = styled(Text, {
  fontFamily: theme.fonts.panSb,
  color: theme.colors.sage11,
  fontSize: 16,
  fontWeight: 'auto',
  textAlign: 'center',
  lineHeight: '1'
});
