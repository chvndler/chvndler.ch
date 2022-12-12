import useSWR from 'swr'

import {Grid} from '@/components/ds'
import {ResolvedTrack} from '@/components/primitives/spotify/ResolvedTrack'
import type {TopTracks, TrackProps} from '@/components/primitives/spotify/types'
import fetcher from '@/lib/fetcher'

import {TrackCard} from './track.card.styles'

export const TrackCards = () => {
 const {data} = useSWR<TopTracks>('/api/top-tracks', fetcher)

 if (!data) {
  return null
 }

 return (
  <>
   <Grid columns={'2'} justify={'between'} align={'center'} gap={'3'} css={{width: '100%'}}>
    {data.tracks.map((track: JSX.IntrinsicAttributes & TrackProps, index: number) => (
     // eslint-disable-next-line react/jsx-key
     <TrackCard>
      <ResolvedTrack ranking={index + 1} key={track.songUrl} {...track} />
     </TrackCard>
    ))}
   </Grid>
  </>
 )
}
