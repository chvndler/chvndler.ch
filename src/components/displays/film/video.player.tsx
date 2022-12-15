/** @format */

import MuxPlayer from '@mux/mux-player-react'

import {
 CaptionBox,
 CaptionOther,
 CaptionTitle,
 MuxVideoStyles,
 VideoWrapper
} from './video.styles'

type MuxProps = {
 captionTitle?: string
 captionOther?: string
 videoId?: string
 posterId?: string
}

export const VideoPlayer = ({
 videoId,
 posterId,
 captionTitle,
 captionOther,
 ...props
}: MuxProps) => {
 return (
  <>
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
     streamType='on-demand'
     muted
     playbackId={videoId}
     poster={posterId}
     primaryColor={'rgba(72, 67, 73, 0.8)'}
     metadata={{}}
    />
    <CaptionBox>
     <CaptionTitle>{captionTitle}</CaptionTitle>
     <CaptionOther>{captionOther}</CaptionOther>
    </CaptionBox>
   </VideoWrapper>
  </>
 )
}

/**
 * <video poster="https://image.mux.com/{PLAYBACK_ID}/thumbnail.jpg" controls>
 */
