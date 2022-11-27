import MuxPlayer from '@mux/mux-player-react';

import { CaptionOther, CaptionTitle, MuxVideoStyles, VideoWrapper } from './video.styles';

type MuxProps = {
  captionTitle?: string;
  captionOther?: string;
  videoId?: string;
  posterId?: string;
};

export const VideoPlayer = ({ videoId, posterId, captionTitle, captionOther, ...props }: MuxProps) => {
  return (
    <VideoWrapper>
      <MuxPlayer
        {...props}
        /**
         * Remove this comment
         * to allow [ autoPlay ]
         *
         * However, with a grid layout
         * autoPlaying videos is not recommended.
         */
        className={MuxVideoStyles()}
        streamType="on-demand"
        muted
        playbackId={videoId}
        poster={`https://image.mux.com/${posterId}/animated.gif?width=628&start=14.0673867`}
        primaryColor={'#EAFF97'}
        metadata={{}}
      />
      <CaptionTitle>{captionTitle}</CaptionTitle>
      <CaptionOther>{captionOther}</CaptionOther>
    </VideoWrapper>
  );
};

/**
 * <video poster="https://image.mux.com/{PLAYBACK_ID}/thumbnail.jpg" controls>
 */
