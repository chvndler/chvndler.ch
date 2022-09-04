import Head from 'next/head';
import { Box, Canvas, Container, Grid, Text } from '@/ui';
import { ChvndlerCh } from '@/components/logo/ChvndlerCh';
import { css } from '@/lib/stitches.config';
import React from 'react';
import { ColorBar } from '@/components/ColorBar';
import { EnterFooter } from '@/components/EnterFooter';
import Link from 'next/link';

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
                  color: '$volt',
                  margin: 'auto',
                  display: 'flex',
                  justifyContent: 'center',
                  paddingBottom: '10px',
                }}
              >
                <ChvndlerCh width='300' />
              </Box>

              <Grid
                css={{
                  gap: 6,
                  gridTemplateColumns: '1fr 1fr 1fr',
                  maxWidth: '300px',
                  margin: 'auto',
                  alignItems: 'center',
                  justifyContent: 'center',
                  paddingTop: '15px',
                  '@md': {
                    gridTemplateColumns: '1fr 1fr 1fr',
                  },
                  '@sm': {
                    gridTemplateColumns: '1fr',
                  },
                }}>
                <Link href='/about' passHref>
                  <Text
                    as='a'
                    css={{
                      textAlign: 'center',
                      paddingLeft: 0,
                      paddingRight: 0,
                      paddingTop: '4px',
                      paddingBottom: '4px',
                      color: '$mauve12',
                      fontFamily: '$pragmaticaExtended',
                      fontSize: '14px',
                    }}
                  >
                    about
                  </Text>
                </Link>

                <Link href='/projects' passHref>
                  <Text
                    as='a'
                    css={{
                      textAlign: 'center',
                      paddingLeft: 0,
                      paddingRight: 0,
                      paddingTop: '4px',
                      paddingBottom: '4px',
                      color: '$mauve12',
                      fontFamily: '$pragmaticaExtended',
                      fontSize: '14px',
                    }}
                  >
                    projects
                  </Text>
                </Link>

                <Link href='/blog' passHref>
                  <Text
                    as='a'
                    css={{
                      textAlign: 'center',
                      paddingLeft: 0,
                      paddingRight: 0,
                      paddingTop: '4px',
                      paddingBottom: '4px',
                      color: '$mauve12',
                      fontFamily: '$pragmaticaExtended',
                      fontSize: '14px',
                    }}
                  >
                    journal
                  </Text>
                </Link>
              </Grid>
            </Container>
          </Canvas>
        </Box>
        <EnterFooter />
      </Box>
    </>
  );
};

export default Enter;
