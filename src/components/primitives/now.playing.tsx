'use client';

import useSWR from 'swr';
import fetcher from '@/lib/utils';
import type { SpotifyNowPlaying } from '@/lib/spotify';
import { SpotifyLogo } from '../shared/svg/spotify';

export default function NowPlaying() {
  const { data } = useSWR<SpotifyNowPlaying>('/api/spotify', fetcher);

  return (
    <>
      <div className='flex h-full w-full flex-row items-center justify-start'>
        <div>
          {data?.isPlaying === false && (
            <>
              <div className='flex flex-row items-center justify-center gap-2'>
                <SpotifyLogo height={'18'} width={'18'} />
                <p className='text-sm font-semibold text-carbon-800 dark:text-carbon-600'>
                  Not Playing
                </p>
              </div>
            </>
          )}
          <div className='flex flex-row items-center justify-center gap-2'>
            {data?.isPlaying && (
              <>
                <div className='flex flex-row items-center justify-center gap-2'>
                  <SpotifyLogo height={'18'} width={'18'} />
                  <p className='text-sm font-semibold text-carbon-800 dark:text-carbon-400'>
                    {data?.artist} –{' '}
                    <span className='font-normal opacity-80'>{data?.title}</span>
                  </p>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
