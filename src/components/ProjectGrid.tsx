import { Box, Grid, Text } from '@/ui';
import Link from 'next/link';
import React from 'react';


export const ProjectGrid = () => {
  return (
    <>
      <Grid
        justify='start'
        align='start'
        flow='row'
        gap='1'
        gapX='1'
        gapY='1'
        css={{
          paddingBottom: '2px',
          wrap: 'wrap',
          gridTemplateColumns: '1fr 1fr 1fr',
          '@sm': {
            gridTemplateColumns: '1fr',
            marginTop: '20px',
          },
        }}>
        <Box css={{
          display: 'block',
          border: '1px solid $mauve8',
          borderRadius: '18px',
          backgroundColor: 'transparent',
          height: '30px',
          width: 'auto',
          '&:hover': { backgroundColor: '$mauve4', cursor: 'pointer' },
        }}>
          <Link href='https://www.github.com/chvndler/chvn.me' passHref>
            <Text as='a' target='_blank' rel='noreferrer noopener' css={{
              paddingLeft: '18px',
              paddingRight: '18px',
              color: '$mauve12',
              fontFamily: '$pragmaticaExtended',
              fontSize: '11px',
              fontWeight: 'bold',
              textAlign: 'center',
              lineHeight: '30px',
            }}>
              CHVN.ME
            </Text>
          </Link>
        </Box>
        
        <Box css={{
          display: 'block',
          border: '1px solid $mauve8',
          borderRadius: '18px',
          backgroundColor: 'transparent',
          height: '30px',
          width: 'auto',
          '&:hover': { backgroundColor: '$mauve4', cursor: 'pointer' },
        }}>
          <Link href='https://www.github.com/AtelierDesign/rhythm.color' passHref>
            <Text as='a' target='_blank' rel='noreferrer noopener' css={{
              paddingLeft: '18px',
              paddingRight: '18px',
              color: '$mauve12',
              fontFamily: '$pragmaticaExtended',
              fontSize: '11px',
              fontWeight: 'bold',
              textAlign: 'center',
              lineHeight: '30px',
            }}>
              RHYTHM COLOR®
            </Text>
          </Link>
        </Box>
        
        <Box css={{
          display: 'block',
          border: '1px solid $mauve8',
          borderRadius: '18px',
          backgroundColor: 'transparent',
          height: '30px',
          width: 'auto',
          '&:hover': { backgroundColor: '$mauve4', cursor: 'pointer' },
        }}>
          <Link href='https://www.github.com/AtelierDesign/ady.interval' passHref>
            <Text as='a' target='_blank' rel='noreferrer noopener' css={{
              paddingLeft: '18px',
              paddingRight: '18px',
              color: '$mauve12',
              fontFamily: '$pragmaticaExtended',
              fontSize: '11px',
              fontWeight: 'bold',
              textAlign: 'center',
              lineHeight: '30px',
            }}>
              ATELIER INTERVAL™
            </Text>
          </Link>
        </Box>
      </Grid>
      
      <Grid
        justify='start'
        align='start'
        flow='row'
        gap='1'
        gapX='1'
        gapY='1'
        css={{
          paddingTop: '2px',
          wrap: 'wrap',
          gridTemplateColumns: '1fr 1fr 1fr',
          '@sm': {
            gridTemplateColumns: '1fr',
          },
        }}>
        <Box css={{
          display: 'block',
          border: '1px solid $mauve8',
          borderRadius: '18px',
          backgroundColor: 'transparent',
          height: '30px',
          width: 'auto',
          '&:hover': { backgroundColor: '$mauve4', cursor: 'pointer' },
        }}>
          <Link href='https://www.github.com/chvndler/chvn.me' passHref>
            <Text as='a' target='_blank' rel='noreferrer noopener' css={{
              paddingLeft: '18px',
              paddingRight: '18px',
              color: '$mauve12',
              fontFamily: '$pragmaticaExtended',
              fontSize: '11px',
              fontWeight: 'bold',
              textAlign: 'center',
              lineHeight: '30px',
            }}>
              ADY.START
            </Text>
          </Link>
        </Box>
        
        <Box css={{
          display: 'block',
          border: '1px solid $mauve8',
          borderRadius: '18px',
          backgroundColor: 'transparent',
          height: '30px',
          width: 'auto',
          '&:hover': { backgroundColor: '$mauve4', cursor: 'pointer' },
        }}>
          <Link href='https://www.github.com/AtelierDesign/rhythm.color' passHref>
            <Text as='a' target='_blank' rel='noreferrer noopener' css={{
              paddingLeft: '18px',
              paddingRight: '18px',
              color: '$mauve12',
              fontFamily: '$pragmaticaExtended',
              fontSize: '11px',
              fontWeight: 'bold',
              textAlign: 'center',
              lineHeight: '30px',
            }}>
              FILM
            </Text>
          </Link>
        </Box>
        
        <Box css={{
          display: 'block',
          border: '1px solid $mauve8',
          borderRadius: '18px',
          backgroundColor: 'transparent',
          height: '30px',
          width: 'auto',
          '&:hover': { backgroundColor: '$mauve4', cursor: 'pointer' },
        }}>
          <Link href='https://www.github.com/AtelierDesign/ady.interval' passHref>
            <Text as='a' target='_blank' rel='noreferrer noopener' css={{
              paddingLeft: '18px',
              paddingRight: '18px',
              color: '$mauve12',
              fontFamily: '$pragmaticaExtended',
              fontSize: '11px',
              fontWeight: 'bold',
              textAlign: 'center',
              lineHeight: '30px',
            }}>
              PROJECT
            </Text>
          </Link>
        </Box>
      </Grid>
      
      <Box css={{}}>
        <Link href='/projects' passHref>
          <Text as='a' css={{
            fontSize: '11px',
            fontFamily: '$pragmaticaExtended',
            fontWeight: '400',
            color: '$mauve11',
            lineHeight: 'normal',
            paddingLeft: '5px',
            paddingTop: '15px',
            paddingBottom: '15px',
            '&:hover': { textDecoration: 'underline' },
          }}>
            view all projects →
          </Text>
        </Link>
      </Box>
    </>
  );
};
