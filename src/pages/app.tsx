import { styled, theme } from 'stitches.config';

import { Canvas, Container, PassLink, Space, Text } from '@/components/ds';
import { FixedCanvas } from '@/components/ds/canvas';
import { PageLayout } from '@/components/layout/page';
import { Avatar } from '@/components/primitives/avatar';
import { CursorData } from '@/components/sxripts';

const gitlink = 'https://github.com/chvndler';

const NextAppPage = () => {
  return (
    <>
      <PageLayout page_type={'App'}>
        <FixedCanvas>
          <Canvas>
            <Container
              size={'1'}
              css={{
                display: 'flex',
                flexDirection: 'column',
                margin: 'auto',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <AviNFT />
              <NameText>CHANDLER®</NameText>
              <RoleText>Front-End Developer and Designer</RoleText>
              <Space size={'1'} />
              <CursorData />
            </Container>
          </Canvas>
        </FixedCanvas>
      </PageLayout>
    </>
  );
};

export default NextAppPage;

/**
 * @styles
 */
const NameText = styled('h1', {
  fontFamily: theme.fonts.latBoldExtd,
  color: theme.colors.heliotrope,
  textAlign: 'center',
  fontSize: 30,
  fontWeight: 500,
  letterSpacing: '-0.04em',
  lineHeight: '1.3',
  marginTop: 12
});

const RoleText = styled(Text, {
  fontFamily: theme.fonts.panB,
  color: theme.colors.mauve11,
  fontSize: 16,
  fontWeight: 'auto',
  textAlign: 'center',
  lineHeight: '1'
});

const AviNFT = () => {
  return (
    <PassLink href={gitlink}>
      <Avatar
        interactive
        size={'4'}
        shape={'circle'}
        alt={'Chandler®'}
        fallback={'C'}
        src={'https://avatars.githubusercontent.com/u/70621588?s=96&v=4'}
      />
    </PassLink>
  );
};
