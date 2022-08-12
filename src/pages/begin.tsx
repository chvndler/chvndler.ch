import Head from 'next/head';
import { Box, Canvas, Container, Text } from '@/ui';
import { ChvndlerCh } from '@/components/logo/ChvndlerCh';
import { css } from '@/lib/stitches.config';
import { CmndK } from '@/components/CmndK';

const backdrop = css({
  // backgroundColor: '$rhythm',
  backgroundColor: '$mauve2',
  minWidth: '100vw',
  minHeight: '100vh',
  padding: '0',
  margin: '0',
});

// import { CmndK } from "@/components/CmndK";

const Begin = () => {
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
              color: '$mauve1',
              margin: 'auto',
              justifyContent: 'center',
              display: 'flex',
              flexDirection: 'column',
            }}
          >


            <Text css={{
              textAlign: 'center',
              fontFamily: '$pragmaticaExtended',
              fontSize: '14px',
              fontWeight: '500',
              color: '$mauve11',
              paddingBottom: '10px',
            }}>
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
      </Box>
    </>
  );
};

export default Begin;
