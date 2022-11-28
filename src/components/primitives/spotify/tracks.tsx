import useSWR from 'swr';

import { Grid } from '@/components/ds';
import fetcher from '@/lib/fetcher';

import { ResolvedTrack } from './ResolvedTrack';
import type { TopTracks } from './types';

export const Tracks = () => {
  const { data } = useSWR<TopTracks>('/api/top-tracks', fetcher);

  if (!data) {
    return null;
  }

  return (
    <>
      <Grid>
        {data.tracks.map((track, index) => (
          <ResolvedTrack ranking={index + 1} key={track.songUrl} {...track} />
        ))}
      </Grid>
    </>
  );
};
