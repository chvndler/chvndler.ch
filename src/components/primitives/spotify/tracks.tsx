/** @format */

import useSWR from 'swr'

import {Grid} from '@/components/ds'
import fetcher from '@/lib/fetcher'

import {ResolvedTrack} from './ResolvedTrack'
import type {TopTracks} from './types'

export const Tracks = () => {
 const {data} = useSWR<TopTracks>('/api/top-tracks', fetcher)

 if (!data) {
  return null
 }

 return (
  <>
   <Grid columns={'2'} flow={'row'} gap={'3'} css={{border: '1px solid red'}}>
    {data.tracks.map((track, index) => (
     <ResolvedTrack ranking={index + 1} key={track.songUrl} {...track} />
    ))}
   </Grid>
  </>
 )
}
