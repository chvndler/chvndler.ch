import Hls, { Events } from 'hls.js';
import * as React from 'react';
import { mergeRefs } from 'react-merge-refs';

import { VideoStyles, VideoWrapper } from './video-wrapper';

type MuxVideoProps = {
  muxSrc?: string;
} & Omit<JSX.IntrinsicElements['video'], 'src'>;

const MuxVideo = React.forwardRef<HTMLVideoElement, MuxVideoProps>(({ muxSrc, ...rest }, ref) => {
  const videoRef = React.useRef<HTMLVideoElement>(null);

  React.useEffect(() => {
    let hls: Hls;

    if (videoRef.current) {
      const video = videoRef.current;

      if (video.canPlayType('application/vnd.apple.mpegurl')) {
        // Some browers (safari and ie edge) support HLS natively
        video.src = muxSrc;
        video.defaultMuted = true;
      } else if (Hls.isSupported()) {
        // This will run in all other modern browsers
        hls = new Hls();
        hls.attachMedia(video);
        hls.on(Events.MEDIA_ATTACHED, () => {
          hls?.loadSource(muxSrc);
          hls?.on(Events.MANIFEST_PARSED, (_event, data) => {
            // Maximum quality available
            hls.nextLevel ??= data.levels.length - 1;
          });
        });
      } else {
        console.error("This is a legacy browser that doesn't support MSE");
      }
    }

    return () => {
      if (hls) {
        hls.destroy();
      }
    };
  }, [videoRef, muxSrc]);

  return <video ref={mergeRefs([videoRef, ref])} autoPlay {...rest} />;
});

export const getMuxSrc = (playbackId: string) => {
  if (playbackId.startsWith('https://stream.mux.com')) return playbackId;
  return `https://stream.mux.com/${playbackId}.m3u8`;
};

const muxSrc = getMuxSrc('https://stream.mux.com/1RLeJdsCMunRRJ81yLED8PEacwYsaxH01MtGYZQWTR6g.m3u8');
export const MuxVideoObject = () => {
  return (
    <VideoWrapper>
      <MuxVideo
        className={VideoStyles()}
        muxSrc={muxSrc}
        id="muxVideo"
        stream-type="on-demand"
        autoPlay
        controls
        muted
        width={'100%'}
        height={'100%'}
      />
    </VideoWrapper>
  );
};
