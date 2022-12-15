/** @format */

import React from 'react'
// import { SpotifyLogo } from '@/components/SpotifyLogo';
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
        top: '0',
        left: '0',
        marginLeft: '18px',
        marginRight: '18px',
        marginTop: '16px',
        fontWeight: '700',
        fontSize: '15px'
       }}>
       {track.ranking}
      </Heading>
      <Box
       css={{
        position: 'absolute',
        bottom: '0',
        left: '0',

        marginLeft: '18px',
        marginRight: '18px',
        marginBottom: '20px'
       }}>
       <PassLink href={track.songUrl}>
        <Title>{track.title}</Title>
       </PassLink>

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
        marginBottom: '18px'
       }}>
       <PassLink href={track.songUrl}>
        {/* <!-- <SpotifyLogo /> --> */}
        listen on Spotify
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

 color: '$sage8'
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
