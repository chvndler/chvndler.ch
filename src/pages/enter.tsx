import Head from 'next/head';
import { Box, Canvas, Container } from '@/ui';
import { ChvndlerCh } from '@/components/logo/ChvndlerCh';
import { css } from '@/lib/stitches.config';
import { CmndK } from '@/components/CmndK';
import React from 'react';
import { ColorBar } from '@/components/ColorBar';

const backdrop = css({
  zIndex: 0,
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
      <Box>
        <Head>
          <title>Chandler Ch.</title>
        </Head>
        <ColorBar />
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
        </Box>
        <CmndK />
      </Box>
    </>
  );
};

export default Enter;
