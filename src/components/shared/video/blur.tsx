'use client';

import React from 'react';
import muxBlurHash from '@mux/blurhash';
import { MuxPlayerProps } from '@mux/mux-player-react/*';
import MuxPlayerLazy from '@mux/mux-player-react/lazy';

type MUX = {
  blurHashBase64: string;
  sourceWidth: number;
  sourceHeight: number;
} & MuxPlayerProps;

function MuxLazyPlayer({ playbackId, blurHashBase64, sourceWidth, sourceHeight }: MUX) {
  return (
    <MuxPlayerLazy
      playbackId={playbackId}
      placeholder={blurHashBase64}
      style={{ aspectRatio: `${sourceWidth}/${sourceHeight}` }}
      streamType='on-demand'
    />
  );
}

export const getStaticProps = async () => {
  const playbackId = '';
  const { blurHashBase64, sourceWidth, sourceHeight } = await muxBlurHash(playbackId);

  return {
    props: {
      playbackId,
      blurHashBase64,
      sourceWidth,
      sourceHeight,
    },
  };
};

export default MuxLazyPlayer;
