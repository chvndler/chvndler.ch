'use client';
// import MuxPlayer from '@mux/mux-player-react';

import MuxPlayer from '@mux/mux-player-react/lazy';
import type { MuxPlayerProps } from '@mux/mux-player-react';
import { useEffect, useState } from 'react';

type MuxVideoPlayerProps = {
  id: string;
  poster?: string;
  metaId?: string;
  metaTitle?: string;
} & Omit<MuxPlayerProps, 'playbackId' | 'poster'>;

export default function MuxVideo({ id, poster, metaId, metaTitle, ...rest }: MuxVideoPlayerProps) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <>
      <MuxPlayer
        {...rest}
        className='z-0 h-full w-full'
        primaryColor='#E2E4EB'
        secondaryColor='transparent'
        autoPlay={false}
        streamType='on-demand'
        // customDomain='video.chvndler.ch'
        playbackId={id}
        poster={poster}
        title={rest.title || '© Copyright CDC®'}
        metadata={{
          video_id: metaId || '',
          video_title: metaTitle || '',
          viewer_user_id: '',
        }}
      />
    </>
  );
}
