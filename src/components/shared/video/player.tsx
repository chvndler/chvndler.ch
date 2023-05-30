'use client';

import MuxPlayer from '@mux/mux-player-react';
import '@mux/mux-player/themes/minimal';
import type { MuxPlayerProps } from '@mux/mux-player-react';
import { useEffect, useState } from 'react';

type MuxVideoPlayerProps = {
  id: string;
  poster?: string;
} & Omit<MuxPlayerProps, 'playbackId' | 'poster'>;

export default function MuxVideo({ id, poster, ...rest }: MuxVideoPlayerProps) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <MuxPlayer
      {...rest}
      className='z-0 w-full h-full rounded-md shadow-md'
      theme='minimal'
      autoPlay={false}
      streamType='on-demand'
      playbackId={id}
      poster={poster}
      title={rest.title || '© Copyright CDC®'}
      metadata={{
        video_id: '',
        video_title: '',
        viewer_user_id: '',
      }}
    />
  );
}
