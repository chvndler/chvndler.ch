import { theme } from 'stitches.config';

import { Box, Container, Flex, PassLink, Text } from '@/components/ds';
import { Icxn } from '@/components/icons/atlr-icxns';
import { AtlrNavbar } from '@/components/layout/atlr.navbar';
import { R3FCanvasLayout } from '@/components/layout/r3f-canvas-layout';
import { DevScene } from '@/components/primitives/three/CDC_dev';

const ThreePage = () => {
  return (
    <>
      <Box css={{ zIndex: 99999 }}>
        <AtlrNavbar />
      </Box>

      <Box
        css={{
          color: theme.colors.chxn10,
          boxSizing: 'border-box',
          width: '100vw',
          position: 'fixed',
          display: 'flex',
          top: 80,
          left: 0,
          right: 0,
          alignItems: 'center',
          margin: 'auto',
          justifyContent: 'center',
          userSelect: 'none'
        }}
      >
        <Flex css={{ flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
          <Icxn variant={'AirMouse'} />
          <Text
            css={{
              color: theme.colors.chxn4,
              textAlign: 'center',
              fontSize: 12.5,
              fontFamily: theme.fonts.panSb,
              mixBlendMode: 'difference',
              lineHeight: '1.5',
              userSelect: 'none'
            }}
          >
            Drag + Scroll to Explore
          </Text>
        </Flex>
      </Box>
      <Container size={'3'} css={{ position: 'fixed', bottom: 0, left: 0, right: 0, paddingBottom: 48, zIndex: 100 }}>
        <Flex css={{ flexDirection: 'row', alignItems: 'center', gap: 4, justifyContent: 'center', margin: 'auto' }}>
          <Text
            css={{
              color: '$chxn4',
              textAlign: 'center',
              fontSize: 14,
              fontFamily: theme.fonts.latRegExtd
            }}
          >
            built with
          </Text>
          <PassLink href={'https://threejs.org/'}>
            <Text
              css={{
                color: theme.colors.chxn7,
                textAlign: 'center',
                fontSize: 14,
                fontFamily: theme.fonts.latMedExtd,
                '&:hover': {
                  textDecoration: 'underline',
                  decorationColor: theme.colors.chxn4,
                  cursor: 'pointer'
                }
              }}
            >
              three.js
            </Text>
          </PassLink>
        </Flex>

        <Text
          css={{
            color: theme.colors.chxn4,
            textAlign: 'center',
            fontSize: 14,
            fontFamily: theme.fonts.panSb,
            mixBlendMode: 'difference'
          }}
        >
          +
        </Text>

        <PassLink href={'https://docs.pmnd.rs/react-three-fiber/getting-started/introduction'}>
          <Text
            css={{
              color: theme.colors.chxn4,
              textAlign: 'center',
              fontSize: 12.5,
              fontFamily: theme.fonts.panRg,
              mixBlendMode: 'difference',
              lineHeight: '1.5'
            }}
          >
            @react-three/fiber
          </Text>
        </PassLink>

        <PassLink href={'https://docs.pmnd.rs/react-postprocessing'}>
          <Text
            css={{
              color: theme.colors.chxn4,
              textAlign: 'center',
              fontSize: 12.5,
              fontFamily: theme.fonts.panRg,
              lineHeight: '1.5'
            }}
          >
            @react-three/postprocessing
          </Text>
        </PassLink>

        <PassLink href={'https://github.com/pmndrs/drei'}>
          <Text
            css={{
              color: theme.colors.chxn4,
              textAlign: 'center',
              fontSize: 12.5,
              fontFamily: theme.fonts.panRg,
              lineHeight: '1.5'
            }}
          >
            @react-three/drei
          </Text>
        </PassLink>
      </Container>
      <R3FCanvasLayout>
        <DevScene />
      </R3FCanvasLayout>
    </>
  );
};

export default ThreePage;
