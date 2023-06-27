'use client';

import useSWR from 'swr';
import fetcher from '@/lib/utils';
import type { SpotifyNowPlaying } from '@/lib/spotify';
import { SpotifyLogo } from '../shared/svg/spotify';

import SmallSkeleton from '../shared/skeleton';

function SpotifyPlayer() {
  const { data } = useSWR<SpotifyNowPlaying>('/api/spotify', fetcher);

  return (
    <>
      <div className='items-center justify-start'>
        <div className='flex flex-row items-center justify-start gap-2'>
          <SpotifyLogo
            height={'18'}
            width={'18'}
          />
          {data?.isPlaying === false ? (
            <>
              <p className='text-sm font-semibold text-carbon-600 dark:text-carbon-600'>
                Not streaming
              </p>
            </>
          ) : (
            <>
              <a
                href={data?.songUrl}
                target='_blank'
                rel='noopener noreferrer'>
                <p className='text-sm font-semibold text-carbon-800 dark:text-carbon-400'>
                  {data?.artist} –{' '}
                  <span className='font-normal opacity-80'>{data?.title}</span>
                </p>
              </a>
            </>
          )}
        </div>
      </div>
    </>
  );
}

export const NowPlaying = () => {
  return (
    <>
      <SmallSkeleton>
        <SpotifyPlayer />
      </SmallSkeleton>
    </>
  );
};
