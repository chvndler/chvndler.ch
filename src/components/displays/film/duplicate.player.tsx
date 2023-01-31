/** @format */

import MuxPlayer from '@mux/mux-player-react'

import {CaptionBox, CaptionOther, CaptionTitle, MuxVideoStyles, VideoWrapper} from './video.styles'

type MuxProps = {
  title?: string
  caption?: string
  note?: string
  id?: string
  poster?: string
}

export const DupVideoPlayer = ({id, poster, title, caption, note, ...props}: MuxProps) => {
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
          playbackId={id}
          poster={poster}
          primaryColor={'#D9E3F2'}
          secondaryColor={'transparent'}
          metadata={{}}
        />
        <CaptionBox>
          <CaptionTitle>{title}</CaptionTitle>
          <CaptionOther>{caption}</CaptionOther>
          <span>{note}</span>
        </CaptionBox>
      </VideoWrapper>
    </>
  )
}
