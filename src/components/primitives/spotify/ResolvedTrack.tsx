/** @format */

import React from 'react'
import {styled} from 'stitches.config'

import {Box, Heading, PassLink, Section, Text} from '@/components/ds'

import type {TrackProps} from './types'

export const ResolvedTrack = (track: TrackProps) => {
  return (
    <>
      <Box css={{}}>
        <Card css={{}}>
          <Section>
            <Heading
              css={{
                position: 'absolute',
                bottom: '0',
                left: '0',
                marginLeft: '18px',
                marginRight: '18px',
                marginTop: '16px',
                fontWeight: '700',
                fontSize: 12
              }}>
              {track.ranking}
            </Heading>
            <Box
              css={{
                position: 'absolute',
                top: '0',
                left: '0',

                marginLeft: '18px',
                marginRight: '18px',
                marginTop: '20px'
              }}>
              <PassLink href={track.songUrl}>
                <Title>{track.title}</Title>
              </PassLink>

              <Text>
                <Artist>{track.artist}</Artist>
              </Text>

              <PassLink href={track.songUrl}>
                {/* <!-- <SpotifyLogo /> --> */}
                <SpotifyLink>listen on Spotify</SpotifyLink>
              </PassLink>
            </Box>
          </Section>
        </Card>
      </Box>
    </>
  )
}

export type {TrackProps}

const Title = styled('div', {
  color: '$superLogo',
  fontFamily: '$inter',
  fontSize: '15px',
  fontWeight: '800',
  marginBottom: '10px',
  lineHeight: '1'
})

const Artist = styled('div', {
  fontFamily: '$inter',
  fontWeight: '500',
  fontSize: '13px',
  lineHeight: '1',

  color: '$sage9'
})

const SpotifyLink = styled('div', {
  fontFamily: '$inter',
  fontWeight: 'bold',
  fontSize: '13px',
  lineHeight: '1',

  paddingTop: '10px',

  color: '$spotify'
})

const Card = styled('div', {
  transition: 'all .4s ease-in-out',
  display: 'flex',
  position: 'relative',
  borderRadius: '18px',
  marginTop: '4px',
  marginBottom: '0',
  padding: '18px',
  alignItems: 'left',
  height: '120px',
  width: 'auto',

  '&:hover': {
    backgroundColor: '$rhythmA3'
  }
})
