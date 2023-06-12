'use client';

import useSWR from 'swr';
import fetcher from '@/lib/utils';
import type { SpotifyNowPlaying } from '@/lib/spotify';

export const NowPlaying = () => {
  const { data } = useSWR<SpotifyNowPlaying>('', fetcher);

  return (
    <>
      <div className='now-playing'>{data?.artist && <>{data.artist}</>}</div>
    </>
  );
};
