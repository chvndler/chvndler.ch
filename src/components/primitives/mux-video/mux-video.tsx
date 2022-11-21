import MuxPlayer from '@mux/mux-player-react';

export const MuxVideoObject = () => {
  return (
    <MuxPlayer
      streamType="on-demand"
      playbackId="yuUntCOoIonDpYwojty1BNVxWbUbMmL22NoRBZqfTko"
      metadata={{
        video_id: 'video-id-54321',
        video_title: 'Test video title',
        viewer_user_id: 'user-id-007'
      }}
    />
  );
};
