import useSWR from 'swr'

import fetcher from '@/lib/fetcher'

import {ResolvedTrack} from '../ResolvedTrack'
import type {TopTracks} from '../types'

export const ResolvedTrackEntry = () => {
 const {data} = useSWR<TopTracks>('/api/top-tracks', fetcher)

 if (!data) {
  return null
 }

 return (
  <>
   <div>
    {data.tracks.map((track, index) => (
     <ResolvedTrack ranking={index + 1} key={track.songUrl} {...track} />
    ))}
   </div>
  </>
 )
}
