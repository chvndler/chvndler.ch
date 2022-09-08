import React from 'react';
import Link from 'next/link';
import { Box, Text } from '@/ui';
import { SpotifyLogo } from '@/components/logo/SpotifyLogo';
import { styled } from '@stitches/react';

const Title = styled('div', {
  // mixBlendMode: 'difference',
  color: '$superLogo',
  fontFamily: '$inter',
  fontSize: '15px',
  fontWeight: '800',
  marginBottom: '10px',
  lineHeight: '1',

  // textTransform: 'uppercase',
});

const Artist = styled('div', {
  // mixBlendMode: 'difference',
  fontFamily: '$inter',
  fontWeight: '500',
  fontSize: '13px',
  lineHeight: '1',

  color: '$sage8',
});

/*
const SpotifyButton = styled('div', {
  // mixBlendMode: 'difference',
  fontFamily: '$inter',
  fontWeight: '500',
  fontSize: '13px',
  lineHeight: '1',

  color: '$superLime5',
});
*/

const Card = styled('div', {
  transition: 'all .4s ease-in-out',
  display: 'flex',
  // backgroundColor: '$rhythmA4',
  // border: 'solid 1px $slate7',
  position: 'relative',
  borderRadius: '18px',
  marginTop: '4px',
  marginBottom: '0',
  padding: '18px',
  alignItems: 'left',
  height: '120px',
  width: 'auto',

  '&:hover': {
    // transition: 'opacity 0.1s, transform 0.5s',
    backgroundColor: '$rhythmA3',
  },
});

export default function Track(track) {
  return (
    <>
      <Box css={{ paddingTop: '0px', paddingBottom: '0px' }}>
        <Card css={{}}>
          <section>
            <Text
              css={{
                position: 'absolute',
                top: '0',
                left: '0',
                marginLeft: '18px',
                marginRight: '18px',
                marginTop: '16px',
                fontWeight: '700',
                fontSize: '15px',
              }}>
              {track.ranking}
            </Text>
            <Box
              css={{
                position: 'absolute',
                bottom: '0',
                left: '0',

                marginLeft: '18px',
                marginRight: '18px',
                marginBottom: '20px',
              }}>
              <Link href={track.songUrl} passHref>
                <a target='_blank' rel='noopener noreferrer'>
                  <Title>{track.title}</Title>
                </a>
              </Link>

              <Text>
                <Artist>{track.artist}</Artist>
              </Text>
            </Box>

            <Box
              css={{
                position: 'absolute',
                bottom: '0',
                right: '0',
                width: 'auto',

                marginLeft: '18px',
                marginRight: '18px',
                marginBottom: '18px',
              }}>
              <Link href={track.songUrl} passHref>
                <a target='_blank' rel='noopener noreferrer'>
                  <SpotifyLogo />
                </a>
              </Link>
            </Box>
          </section>
        </Card>
      </Box>
    </>
  );
}
