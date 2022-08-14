import Head from 'next/head';
import { Box, Canvas, Container, Text } from '@/ui';
import { ChvndlerCh } from '@/components/logo/ChvndlerCh';
import { css } from '@/lib/stitches.config';
import { CmndK } from '@/components/CmndK';
import { ThemeButton } from '@/components/ThemeButton';

const backdrop = css({
  position: 'fixed',
  top: '0',
  left: '0',
  right: '0',
  bottom: '0',
  backgroundColor: '$mauve1',
  minWidth: '100vw',
  minHeight: '100vh',
  padding: '0',
  margin: '0',
});


const Enter = () => {
  return (
    <>
      <Head>
        <title>__</title>
      </Head>
      <Box className={backdrop()}>
        <Canvas>
          <Container
            size='2'
            css={{
              margin: 'auto',
              justifyContent: 'center',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <Text
              css={{
                textAlign: 'center',
                fontFamily: '$pragmaticaExtended',
                fontSize: '14px',
                fontWeight: '500',
                color: '$mauve11',
                paddingBottom: '10px',
              }}
            >
              tap [ ⌘k ] to navigate.
            </Text>
            <Box
              css={{
                width: '100%',
                color: '$mauve9',
                margin: 'auto',
                display: 'flex',
                justifyContent: 'center',
                paddingBottom: '10px',
              }}
            >
              <ChvndlerCh width='300' />


            </Box>

          </Container>
        </Canvas>

        <CmndK />
        <Box css={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          paddingBottom: '20px',
          margin: 'auto',
          textAlign: 'center',
          alignItems: 'center',
        }}>
          <ThemeButton />
        </Box>
      </Box>
    </>
  );
};

export default Enter;
