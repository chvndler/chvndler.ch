import { styled, theme } from 'stitches.config';

import { Canvas, Container, Text } from '@/components/ds';
import { FixedCanvas } from '@/components/ds/canvas';
import { CoverFooter } from '@/components/layout/app-footer';
import { AtlrNavbar } from '@/components/layout/atlr.navbar';

const AppPage = () => {
  return (
    <>
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
    </>
  );
};

export default AppPage;

const NameText = styled('h1', {
  textAlign: 'center',
  color: theme.colors.sage9,
  fontSize: 30,
  fontFamily: theme.fonts.latBoldExtd,
  fontWeight: 500,
  letterSpacing: '-0.04em',
  lineHeight: '1.3'
});

const RoleText = styled(Text, {
  fontSize: 16,
  fontFamily: theme.fonts.panSb,
  fontWeight: 'auto',
  textAlign: 'center',
  lineHeight: '1',
  color: theme.colors.sage11
});

/*
const AboutText = styled('p', {
  color: '$sage10',
  fontFamily: theme.fonts.panMd,
  fontWeight: 500,
  fontSize: 16,
  lineHeight: 1.4,
  textAlign: 'center',
  letterSpacing: '',

  '@sm': {
    fontSize: 16,
    textAlign: 'left',
    letterSpacing: ''
  }
});
*/
