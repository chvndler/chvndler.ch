import { Box, Container, Flex, PassLink, Space, Text } from '@/components/ds';
import { AtlrNavbar } from '@/components/layout/atlr.navbar';
import { R3FCanvasLayout } from '@/components/layout/r3f-canvas-layout';
import { ALogoScene } from '@/components/primitives/three/Scenes';

const ThreeDevPage = () => {
  return (
    <>
      <Box css={{ zIndex: 99999 }}>
        <AtlrNavbar />
      </Box>
      <Container size={'3'} css={{ position: 'fixed', bottom: 0, left: 0, right: 0, paddingBottom: 30, zIndex: 100 }}>
        <Flex css={{ flexDirection: 'row', alignItems: 'center', gap: 4, justifyContent: 'center', margin: 'auto' }}>
          <Text
            css={{
              color: '$chxn4',
              textAlign: 'center',
              fontSize: 12,
              fontFamily: `"Lateral Extended Regular", sans-serif`
            }}
          >
            built with
          </Text>
          <PassLink href={'https://threejs.org/'} target={'_blank'}>
            <Text
              css={{
                color: '$chxn7',
                textAlign: 'center',
                fontSize: 12,
                fontFamily: `"Lateral Extended Medium", sans-serif`,
                textDecoration: 'underline',
                '&:hover': {
                  textDecoration: 'underline',
                  decorationColor: '$chxn6',
                  cursor: 'pointer'
                }
              }}
            >
              three.js
            </Text>
          </PassLink>
        </Flex>
        <Space size={'1'} />
        <Text
          css={{
            color: '$chxn3',
            textAlign: 'center',
            fontSize: 12,
            fontFamily: `"Lateral Extended Regular", sans-serif`
          }}
        >
          @react-three/fiber
          <br />
          @react-three/postprocessing
        </Text>
      </Container>
      <R3FCanvasLayout>
        <ALogoScene />
      </R3FCanvasLayout>
    </>
  );
};

export default ThreeDevPage;
