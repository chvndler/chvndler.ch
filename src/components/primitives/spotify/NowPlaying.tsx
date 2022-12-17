/** @format */

import useSWR from 'swr'

import {Box, Flex, PassLink, Status} from '@/components/ds'
import {Avatar} from '@/components/primitives/avatar'
import fetcher from '@/lib/fetcher'

import {AlbumBox, TrackArtist, TrackBackground, TrackBox, TrackContainer, TrackTitle} from './track.styles'
import type {NowPlayingSong} from './types'

export const NowPlaying = () => {
 const {data} = useSWR<NowPlayingSong>('/api/now-playing', fetcher)

 return (
  <>
   <TrackContainer>
    <TrackBackground>
     <Flex css={{padding: '10px'}}>
      <Box css={{width: 'auto'}}>
       <Flex css={{flexDirection: 'row'}}>
        {data?.songUrl ? (
         <>
          <ArtworkModule />
          <TrackDetailsModule />
         </>
        ) : (
         <>
          {/* <!-- @NotPlaying --> */}
          <Flex css={{padding: 0, flexDirection: 'column', margin: 'auto'}}>
           <TrackTitle>Not Listening</TrackTitle>
          </Flex>
         </>
        )}
       </Flex>
      </Box>
     </Flex>
    </TrackBackground>
   </TrackContainer>
  </>
 )
}

const ArtworkModule = () => {
 const {data} = useSWR<NowPlayingSong>('/api/now-playing', fetcher)
 return (
  <>
   <AlbumBox>
    <PassLink href={data.songUrl}>
     <Avatar
      alt={(data.artist, data.title)}
      src={data.albumImageUrl}
      fallback={'N/A'}
      size={'5'}
      variant={'gray'}
      shape={'square'}
     />
    </PassLink>
   </AlbumBox>
  </>
 )
}

const TrackDetailsModule = () => {
 const {data} = useSWR<NowPlayingSong>('/api/now-playing', fetcher)
 return (
  <Flex
   css={{
    alignItems: 'left',
    paddingLeft: 8,
    paddingTop: 0,
    flexDirection: 'column',
    margin: 'auto',
    gap: 4
   }}>
   <TrackBox css={{justifyContent: 'flex-start'}}>
    <PassLink href={data.songUrl}>
     <TrackTitle>{data.title}</TrackTitle>
    </PassLink>

    <TrackArtist>{data.artist}</TrackArtist>
   </TrackBox>
   <Box
    css={{
     paddingLeft: 0,
     paddingRight: 2,
     paddingTop: 6,
     paddingBottom: 0,
     justifyContent: 'flex-end'
    }}>
    <Status size={'2'} variant={'green'} />
   </Box>
  </Flex>
 )
}
