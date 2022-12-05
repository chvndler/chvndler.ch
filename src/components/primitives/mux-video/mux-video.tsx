import MuxPlayer from '@mux/mux-player-react';

import { VideoStyles, VideoWrapper } from './video-wrapper';

export const MuxVideoPlayer = () => {
  return (
    <VideoWrapper>
      <MuxPlayer
        className={VideoStyles()}
        autoPlay
        streamType="on-demand"
        playbackId="1RLeJdsCMunRRJ81yLED8PEacwYsaxH01MtGYZQWTR6g"
        primaryColor={'rgba(72, 67, 73, 0.8)'}
        secondaryColor={'#FFF'}
        style={{}}
        metadata={{
          video_id: '5w9nzBSMPJmqReaQho5iVhGhaPKyuyOCmO4eWoKK1sk',
          video_title: '©2019 Film Reel',
          viewer_user_id: 'user-id-007'
        }}
      />
    </VideoWrapper>
  );
};
